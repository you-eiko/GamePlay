(function () {
  "use strict";

  const Model = window.ColorMosaicModel;
  const puzzleData = window.COLOR_MOSAIC_PUZZLES;
  if (!Model || !puzzleData || !Array.isArray(puzzleData.puzzles)) {
    document.body.textContent = "問題を読み込めませんでした。";
    return;
  }

  const COLOR_META = {
    R: { name: "赤", hex: "#ef5b64", text: "#ffffff" },
    G: { name: "緑", hex: "#4f9185", text: "#ffffff" },
    B: { name: "青", hex: "#4e82c4", text: "#ffffff" },
    Y: { name: "黄", hex: "#efa83d", text: "#17303b" },
    P: { name: "紫", hex: "#8d69b5", text: "#ffffff" },
    O: { name: "橙", hex: "#e27a3f", text: "#ffffff" },
  };
  const X_SLOT_BY_COLOR = Object.freeze({
    R: "top-left",
    G: "top-right",
    B: "bottom-left",
    Y: "bottom-right",
  });
  const X_SLOTS = ["top-left", "top-right", "bottom-left", "bottom-right"];
  const LONG_PRESS_MS = 450;
  const LONG_PRESS_MOVE_PX = 12;

  const elements = {
    puzzleSelect: document.querySelector("#puzzle-select"),
    puzzleMeta: document.querySelector("#puzzle-meta"),
    palettes: [...document.querySelectorAll("[data-palette]")],
    tentativeButtons: [...document.querySelectorAll("[data-tentative]")],
    mobileSelectedLabel: document.querySelector(".mobile-selected-label"),
    autoFill: document.querySelector("#auto-fill"),
    undoButtons: [...document.querySelectorAll("[data-undo]")],
    redoButtons: [...document.querySelectorAll("[data-redo]")],
    reset: document.querySelector("#reset-button"),
    boardFrame: document.querySelector("#board-frame"),
    board: document.querySelector("#board"),
    status: document.querySelector("#status"),
    hint: document.querySelector("#hint"),
    toast: document.querySelector("#toast"),
  };

  let game = null;
  let selectedColor = null;
  let tentativeMode = false;
  let toastTimer = null;
  let suppressedTap = { index: -1, until: 0 };

  function colorMeta(color) {
    return COLOR_META[color] || { name: color, hex: "#6f7c85", text: "#ffffff" };
  }

  function xSlot(color) {
    if (X_SLOT_BY_COLOR[color]) return X_SLOT_BY_COLOR[color];
    return X_SLOTS[game.puzzle.colors.indexOf(color)] || "bottom-right";
  }

  function clueMap(puzzle) {
    return new Map(puzzle.clues.map((clue) => [Model.cellIndex(puzzle, clue.row, clue.col), clue]));
  }

  function showToast(message) {
    elements.toast.textContent = message;
    elements.toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => elements.toast.classList.remove("is-visible"), 1900);
  }

  function setTentativeMode(enabled, announce = false) {
    tentativeMode = Boolean(enabled);
    elements.tentativeButtons.forEach((button) => {
      button.classList.toggle("is-active", tentativeMode);
      button.setAttribute("aria-pressed", String(tentativeMode));
    });
    elements.board.classList.toggle("is-tentative-mode", tentativeMode);
    if (announce) showToast(tentativeMode ? "仮置きモードをオンにしました。" : "通常の着色に戻しました。");
  }

  function selectColor(color) {
    selectedColor = color;
    const meta = colorMeta(color);
    elements.boardFrame.style.setProperty("--selected-color", meta.hex);
    elements.mobileSelectedLabel.textContent = `選択中：${meta.name}`;
    elements.palettes.forEach((palette) => {
      palette.querySelectorAll(".color-button").forEach((button) => {
        const active = button.dataset.color === color;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-checked", String(active));
      });
    });
  }

  function renderPalette() {
    elements.palettes.forEach((palette) => {
      palette.replaceChildren();
      for (const color of game.puzzle.colors) {
        const meta = colorMeta(color);
        const button = document.createElement("button");
        button.type = "button";
        button.className = "color-button";
        button.dataset.color = color;
        button.setAttribute("role", "radio");
        button.setAttribute("aria-label", `${meta.name}を選択`);
        button.style.setProperty("--cell-color", meta.hex);
        button.innerHTML = `<span class="color-dot">${color}</span>`;
        button.addEventListener("click", () => selectColor(color));
        palette.append(button);
      }
    });
    selectColor(game.puzzle.colors.includes(selectedColor) ? selectedColor : game.puzzle.colors[0]);
  }

  function cellDescription(index, clue) {
    const row = Math.floor(index / game.puzzle.cols) + 1;
    const col = (index % game.puzzle.cols) + 1;
    const cell = game.cells[index];
    const parts = [`${row}行${col}列`];
    if (clue) parts.push(`数字${clue.value}`);
    if (cell.color) {
      parts.push(`${colorMeta(cell.color).name}で${cell.tentative ? "仮置き" : "着色"}`);
    }
    else parts.push("未着色");
    if (cell.fixed) parts.push("固定色");
    if (cell.exclusions.length) {
      parts.push(`${cell.exclusions.map((color) => colorMeta(color).name).join("、")}にX`);
    }
    return parts.join("、");
  }

  function operateCell(index, operation = "cycle") {
    if (game.cells[index].fixed) {
      showToast("二重枠は固定色です。");
      return;
    }
    const result = Model.applyAction(game, {
      type: operation === "paint-direct" ? "paint" : operation,
      index,
      color: selectedColor,
      tentative: tentativeMode,
      direct: operation === "paint-direct",
    });
    if (!result.changed) return;
    if (result.autoFilled) {
      showToast(`${colorMeta(result.autoFilled).name}だけが残ったため、自動で塗りました。`);
    }
    render();
  }

  function excludeAroundClue(index) {
    const result = Model.excludeAroundClue(game, index);
    if (!result.changed) {
      showToast("周囲の未着色マスには、すでに同じ色の×があります。");
      return;
    }

    const colorName = colorMeta(result.color).name;
    if (result.autoFilled.length) {
      showToast(`${colorName}の×を${result.excluded}マスに付け、${result.autoFilled.length}マスを自動で塗りました。`);
    } else {
      showToast(`周囲${result.excluded}マスに${colorName}の×を付けました。`);
    }
    render();
  }

  function bindCellInteractions(button, index, isColoredClue) {
    let longPressTimer = null;
    let longPressed = false;
    let startX = 0;
    let startY = 0;

    function cancelLongPress() {
      window.clearTimeout(longPressTimer);
      longPressTimer = null;
    }

    button.addEventListener("pointerdown", (event) => {
      if (event.button !== 0 || (game.cells[index].fixed && !isColoredClue)) return;
      longPressed = false;
      startX = event.clientX;
      startY = event.clientY;
      cancelLongPress();
      longPressTimer = window.setTimeout(() => {
        longPressTimer = null;
        longPressed = true;
        suppressedTap = { index, until: performance.now() + 800 };
        if (isColoredClue) {
          excludeAroundClue(index);
        } else {
          operateCell(index, "paint-direct");
        }
        if (typeof navigator.vibrate === "function") navigator.vibrate(18);
      }, LONG_PRESS_MS);
    });
    button.addEventListener("pointermove", (event) => {
      if (
        Math.abs(event.clientX - startX) > LONG_PRESS_MOVE_PX
        || Math.abs(event.clientY - startY) > LONG_PRESS_MOVE_PX
      ) {
        cancelLongPress();
      }
    });
    button.addEventListener("pointerup", cancelLongPress);
    button.addEventListener("pointercancel", cancelLongPress);
    button.addEventListener("pointerleave", cancelLongPress);
    button.addEventListener("click", (event) => {
      if (
        longPressed
        || (suppressedTap.index === index && performance.now() < suppressedTap.until)
      ) {
        event.preventDefault();
        longPressed = false;
        return;
      }
      operateCell(index, "cycle");
    });
    button.addEventListener("contextmenu", (event) => event.preventDefault());
  }

  function renderBoard(evaluation) {
    const clues = clueMap(game.puzzle);
    elements.board.style.setProperty("--rows", game.puzzle.rows);
    elements.board.style.setProperty("--cols", game.puzzle.cols);
    elements.board.replaceChildren();

    game.cells.forEach((cell, index) => {
      const clue = clues.get(index);
      const button = document.createElement("button");
      button.type = "button";
      button.className = "cell";
      button.setAttribute("role", "gridcell");
      button.setAttribute("aria-label", cellDescription(index, clue));
      button.dataset.index = String(index);

      if (cell.color) {
        const meta = colorMeta(cell.color);
        button.classList.add("is-filled");
        if (cell.tentative) button.classList.add("is-tentative");
        button.style.setProperty("--cell-color", meta.hex);
        button.style.setProperty("--cell-text", meta.text);
      }
      if (cell.fixed) button.classList.add("is-fixed");
      const isColoredClue = Boolean(clue && cell.color);
      if (isColoredClue) {
        const colorName = colorMeta(cell.color).name;
        button.classList.add("can-exclude-neighbors");
        button.title = `長押しで周囲の未着色マスに${colorName}の×を付ける`;
      }
      if (evaluation.clueStates.get(index)?.status === "impossible") {
        button.classList.add("is-impossible");
      }

      if (clue) {
        const number = document.createElement("span");
        number.className = "clue-number";
        number.textContent = String(clue.value);
        button.append(number);
      } else if (cell.color) {
        const symbol = document.createElement("span");
        symbol.className = "color-symbol";
        symbol.textContent = cell.color;
        button.append(symbol);
      }

      if (cell.color || cell.fixed) {
        const label = document.createElement("span");
        label.className = "fixed-label";
        label.textContent = `${cell.color || "?"}${cell.fixed ? "◆" : ""}`;
        button.append(label);
      }

      if (cell.tentative) {
        const badge = document.createElement("span");
        badge.className = "tentative-badge";
        badge.textContent = "✎";
        badge.setAttribute("aria-hidden", "true");
        button.append(badge);
      }

      if (cell.exclusions.length) {
        const list = document.createElement("span");
        list.className = "x-list";
        for (const color of cell.exclusions) {
          const meta = colorMeta(color);
          const mark = document.createElement("span");
          mark.className = "x-mark";
          mark.dataset.slot = xSlot(color);
          mark.style.setProperty("--x-color", meta.hex);
          mark.textContent = "×";
          mark.setAttribute("aria-hidden", "true");
          mark.title = `${meta.name}を除外`;
          list.append(mark);
        }
        button.append(list);
      }

      bindCellInteractions(button, index, isColoredClue);
      elements.board.append(button);
    });
  }

  function renderStatus(evaluation) {
    elements.status.className = "status-card";
    let message = `${evaluation.filled} / ${evaluation.total} マス着色`;
    if (evaluation.tentative) message += `（仮置き ${evaluation.tentative}）`;
    if (evaluation.solved) {
      elements.status.classList.add("is-solved");
      message = "完成。すべての数字が一致しています。";
    } else if (evaluation.impossibleClues || evaluation.contradictions) {
      elements.status.classList.add("is-warning");
      const count = evaluation.impossibleClues + evaluation.contradictions;
      message = `現在の候補では成立しない場所が${count}か所あります。`;
    } else if (evaluation.complete) {
      elements.status.classList.add("is-warning");
      message = "全マス着色済みですが、数字を再確認してください。";
    }
    elements.status.innerHTML = `<span class="status-dot" aria-hidden="true"></span><span>${message}</span>`;
  }

  function renderMeta() {
    const puzzle = game.puzzle;
    elements.puzzleMeta.innerHTML = [
      puzzle.difficulty ? `難易度 ${puzzle.difficulty}` : null,
      `${puzzle.rows}×${puzzle.cols}`,
      `${puzzle.colors.length}色`,
      `数字${puzzle.clues.length}`,
      `固定色${puzzle.fixed.length}`,
    ].filter(Boolean).map((text) => `<span class="meta-chip">${text}</span>`).join("");
    elements.hint.innerHTML = `<strong>最初のヒント</strong><br>${puzzle.first_hint || "固定色つきの0と、位置の最大値から探してみましょう。"}`;
  }

  function render() {
    const evaluation = Model.evaluateGame(game);
    renderBoard(evaluation);
    renderStatus(evaluation);
    elements.undoButtons.forEach((button) => {
      button.disabled = game.history.length === 0;
    });
    elements.redoButtons.forEach((button) => {
      button.disabled = game.future.length === 0;
    });
    elements.autoFill.checked = game.autoFill;
    setTentativeMode(tentativeMode);
  }

  function loadPuzzle(id) {
    const puzzle = puzzleData.puzzles.find((item) => item.id === id) || puzzleData.puzzles[0];
    game = Model.createGame(puzzle, { autoFill: elements.autoFill.checked });
    renderPalette();
    renderMeta();
    render();
  }

  function initialize() {
    for (const puzzle of puzzleData.puzzles) {
      const option = document.createElement("option");
      option.value = puzzle.id;
      const difficulty = puzzle.difficulty ? `［${puzzle.difficulty}］` : "";
      option.textContent = `${puzzle.id}　${difficulty}${puzzle.title}`;
      elements.puzzleSelect.append(option);
    }

    elements.puzzleSelect.addEventListener("change", () => loadPuzzle(elements.puzzleSelect.value));
    elements.tentativeButtons.forEach((button) => {
      button.addEventListener("click", () => setTentativeMode(!tentativeMode, true));
    });
    elements.autoFill.addEventListener("change", () => {
      const filled = Model.setAutoFill(game, elements.autoFill.checked);
      if (filled.length) showToast(`${filled.length}マスを残りの色で塗りました。`);
      render();
    });
    elements.undoButtons.forEach((button) => {
      button.addEventListener("click", () => {
        if (Model.undo(game)) render();
      });
    });
    elements.redoButtons.forEach((button) => {
      button.addEventListener("click", () => {
        if (Model.redo(game)) render();
      });
    });
    elements.reset.addEventListener("click", () => {
      if (Model.reset(game)) {
        render();
        showToast("初期盤面へ戻しました。Undoで取り消せます。");
      }
    });

    document.addEventListener("keydown", (event) => {
      const target = event.target;
      if (target instanceof HTMLInputElement || target instanceof HTMLSelectElement) return;
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "z") {
        event.preventDefault();
        if (event.shiftKey) {
          if (Model.redo(game)) render();
        } else if (Model.undo(game)) {
          render();
        }
      } else if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "y") {
        event.preventDefault();
        if (Model.redo(game)) render();
      } else if (event.key.toLowerCase() === "t") {
        setTentativeMode(!tentativeMode, true);
      } else {
        const color = game.puzzle.colors.find((item) => item.toLowerCase() === event.key.toLowerCase());
        if (color) selectColor(color);
      }
    });

    loadPuzzle(puzzleData.puzzles[0].id);
  }

  initialize();
})();
