(function () {
  "use strict";

  const Model = window.ColorMosaicModel;
  const puzzleData = window.COLOR_MOSAIC_PUZZLES;
  if (!Model || !puzzleData || !Array.isArray(puzzleData.puzzles)) {
    document.body.textContent = "問題を読み込めませんでした。";
    return;
  }

  const visiblePuzzles = puzzleData.puzzles.filter((puzzle) => (
    !/^P[1-5]$/.test(puzzle.id)
    && !/^PLAY-6X6-(?:BEGINNER|INTERMEDIATE|ADVANCED)-/.test(puzzle.id)
  ));
  if (visiblePuzzles.length === 0) {
    document.body.textContent = "表示できる問題がありません。";
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
  const X_SLOT_LABEL = Object.freeze({
    "top-left": "左上",
    "top-right": "右上",
    "bottom-left": "左下",
    "bottom-right": "右下",
  });
  const X_SLOTS = ["top-left", "top-right", "bottom-left", "bottom-right"];
  const LONG_PRESS_MS = 450;
  const LONG_PRESS_MOVE_PX = 12;

  const elements = {
    puzzleSelect: document.querySelector("#puzzle-select"),
    puzzleMeta: document.querySelector("#puzzle-meta"),
    colorModeNote: document.querySelector("#color-mode-note"),
    exclusionTargetLabels: [...document.querySelectorAll("[data-exclusion-target]")],
    xSlotHelp: document.querySelector("#x-slot-help"),
    palettes: [...document.querySelectorAll("[data-palette]")],
    tentativeButtons: [...document.querySelectorAll("[data-tentative]")],
    tentativeActionGroups: [...document.querySelectorAll("[data-tentative-actions]")],
    tentativeCommitButtons: [...document.querySelectorAll("[data-tentative-commit]")],
    tentativeDiscardButtons: [...document.querySelectorAll("[data-tentative-discard]")],
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

  function updateTentativeActions(evaluation) {
    const count = evaluation?.tentative || 0;
    const visible = tentativeMode || count > 0;
    elements.tentativeActionGroups.forEach((group) => {
      group.hidden = !visible;
    });
    [
      ...elements.tentativeCommitButtons,
      ...elements.tentativeDiscardButtons,
    ].forEach((button) => {
      button.disabled = count === 0;
      const countLabel = button.querySelector("[data-tentative-count]");
      if (countLabel) countLabel.textContent = `(${count})`;
    });
  }

  function setTentativeMode(enabled, announce = false) {
    tentativeMode = Boolean(enabled);
    elements.tentativeButtons.forEach((button) => {
      button.classList.toggle("is-active", tentativeMode);
      button.setAttribute("aria-pressed", String(tentativeMode));
    });
    elements.board.classList.toggle("is-tentative-mode", tentativeMode);
    if (game) updateTentativeActions(Model.evaluateGame(game));
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
      palette.style.setProperty("--palette-columns", String(game.puzzle.colors.length));
      palette.setAttribute("aria-label", `${game.puzzle.colors.length}色から操作する色を選択`);
      for (const color of game.puzzle.colors) {
        const meta = colorMeta(color);
        const button = document.createElement("button");
        button.type = "button";
        button.className = "color-button";
        button.dataset.color = color;
        button.setAttribute("role", "radio");
        button.setAttribute("aria-label", `${meta.name}を選択`);
        button.style.setProperty("--cell-color", meta.hex);
        button.style.setProperty("--cell-text", meta.text);
        button.innerHTML = `<span class="color-dot">${color}</span>`;
        button.addEventListener("click", () => selectColor(color));
        palette.append(button);
      }
    });
    selectColor(game.puzzle.colors.includes(selectedColor) ? selectedColor : game.puzzle.colors[0]);
  }

  function applyColorModeUI() {
    const colors = game.puzzle.colors;
    const colorCount = colors.length;
    const exclusionTarget = Math.max(0, colorCount - 1);
    const colorNames = colors.map((color) => colorMeta(color).name);

    document.body.dataset.colorCount = String(colorCount);
    elements.colorModeNote.textContent = `${colorCount}色モード：${colorNames.join("・")}。${exclusionTarget}色の×で残り1色を確定できます。`;
    elements.exclusionTargetLabels.forEach((label) => {
      label.textContent = String(exclusionTarget);
    });
    elements.xSlotHelp.textContent = `色別の×は、${colors.map((color) => (
      `${colorMeta(color).name}＝${X_SLOT_LABEL[xSlot(color)] || xSlot(color)}`
    )).join("、")}に表示します。`;
    elements.boardFrame.title = `盤面の外側をダブルタップまたは長押しすると、${exclusionTarget}色の×があるマスを残り1色で確定します`;
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
    if (cell.tentativeExclusions.length) {
      parts.push(
        `${cell.tentativeExclusions.map((color) => colorMeta(color).name).join("、")}に仮置きX`,
      );
    }
    return parts.join("、");
  }

  function operateCell(index, operation = "cycle") {
    if (game.cells[index].fixed) {
      showToast("二重枠は固定色です。");
      return;
    }
    const result = Model.applyAction(game, {
      type: operation,
      index,
      color: selectedColor,
      tentative: tentativeMode,
    });
    if (!result.changed) return;
    if (result.autoFilled) {
      showToast(`${colorMeta(result.autoFilled).name}だけが残ったため、自動で塗りました。`);
    }
    render();
  }

  function excludeAroundClue(index) {
    const result = Model.excludeAroundClue(game, index, {
      tentative: tentativeMode,
    });
    if (!result.changed) {
      showToast(`周囲の未着色マスには、すでに同じ色の${tentativeMode ? "仮置き×" : "×"}があります。`);
      return;
    }

    const colorName = colorMeta(result.color).name;
    if (result.tentative) {
      showToast(`周囲${result.excluded}マスに${colorName}の仮置き×を付けました。`);
    } else if (result.autoFilled.length) {
      showToast(`${colorName}の×を${result.excluded}マスに付け、${result.autoFilled.length}マスを自動で塗りました。`);
    } else {
      showToast(`周囲${result.excluded}マスに${colorName}の×を付けました。`);
    }
    render();
  }

  function fillForcedCells() {
    const filled = Model.fillForcedCells(game);
    if (!filled.length) {
      showToast("残り一色に確定できるマスはありません。");
      return;
    }
    render();
    showToast(`${filled.length}マスを残りの一色で確定しました。`);
  }

  function commitTentative() {
    const result = Model.commitTentative(game);
    if (!result.changed) {
      showToast("確定する仮置きはありません。");
      return;
    }
    render();
    const autoFilled = result.autoFilled.length
      ? `、${result.autoFilled.length}マスを自動着色`
      : "";
    showToast(`仮置き${result.committed}件を確定しました${autoFilled}。`);
  }

  function discardTentative() {
    const result = Model.discardTentative(game);
    if (!result.changed) {
      showToast("消去する仮置きはありません。");
      return;
    }
    render();
    showToast(`仮置き${result.discarded}件を消去しました。Undoで戻せます。`);
  }

  function fitBoardToFrame() {
    if (!game || !window.matchMedia("(max-width: 560px)").matches) {
      elements.board.style.removeProperty("--fit-cell-size");
      return;
    }

    const frameStyle = window.getComputedStyle(elements.boardFrame);
    const boardStyle = window.getComputedStyle(elements.board);
    const frameInnerWidth = elements.boardFrame.clientWidth
      - Number.parseFloat(frameStyle.paddingLeft)
      - Number.parseFloat(frameStyle.paddingRight);
    const boardHorizontalPadding = Number.parseFloat(boardStyle.paddingLeft)
      + Number.parseFloat(boardStyle.paddingRight);
    const gapWidth = Number.parseFloat(boardStyle.columnGap) * (game.puzzle.cols - 1);
    const availableForCells = frameInnerWidth - boardHorizontalPadding - gapWidth;
    const fittedSize = Math.floor((availableForCells / game.puzzle.cols) * 100) / 100;
    elements.board.style.setProperty("--fit-cell-size", `${Math.max(1, fittedSize)}px`);
  }

  function bindBoardFrameInteractions() {
    const DOUBLE_TAP_MS = 340;
    const DOUBLE_TAP_MOVE_PX = 24;
    let activePointerId = null;
    let longPressTimer = null;
    let longPressed = false;
    let moved = false;
    let startX = 0;
    let startY = 0;
    let lastTap = { at: 0, x: 0, y: 0 };

    function cancelLongPress() {
      window.clearTimeout(longPressTimer);
      longPressTimer = null;
    }

    function finishPointer() {
      cancelLongPress();
      activePointerId = null;
    }

    elements.boardFrame.addEventListener("pointerdown", (event) => {
      if (event.button !== 0 || event.target !== elements.boardFrame) return;
      activePointerId = event.pointerId;
      longPressed = false;
      moved = false;
      startX = event.clientX;
      startY = event.clientY;
      cancelLongPress();
      longPressTimer = window.setTimeout(() => {
        longPressTimer = null;
        longPressed = true;
        lastTap = { at: 0, x: 0, y: 0 };
        fillForcedCells();
        if (typeof navigator.vibrate === "function") navigator.vibrate(18);
      }, LONG_PRESS_MS);
    });

    elements.boardFrame.addEventListener("pointermove", (event) => {
      if (
        event.pointerId === activePointerId
        && (
          Math.abs(event.clientX - startX) > LONG_PRESS_MOVE_PX
          || Math.abs(event.clientY - startY) > LONG_PRESS_MOVE_PX
        )
      ) {
        moved = true;
        cancelLongPress();
      }
    });

    elements.boardFrame.addEventListener("pointerup", (event) => {
      if (event.pointerId !== activePointerId) return;
      finishPointer();
      if (moved || event.target !== elements.boardFrame) {
        lastTap = { at: 0, x: 0, y: 0 };
        return;
      }
      if (longPressed) {
        event.preventDefault();
        longPressed = false;
        return;
      }

      const now = performance.now();
      const isDoubleTap = now - lastTap.at <= DOUBLE_TAP_MS
        && Math.abs(event.clientX - lastTap.x) <= DOUBLE_TAP_MOVE_PX
        && Math.abs(event.clientY - lastTap.y) <= DOUBLE_TAP_MOVE_PX;
      if (isDoubleTap) {
        event.preventDefault();
        lastTap = { at: 0, x: 0, y: 0 };
        fillForcedCells();
      } else {
        lastTap = { at: now, x: event.clientX, y: event.clientY };
      }
    });
    elements.boardFrame.addEventListener("pointercancel", () => {
      finishPointer();
      lastTap = { at: 0, x: 0, y: 0 };
    });
    elements.boardFrame.addEventListener("pointerleave", (event) => {
      if (event.pointerId !== activePointerId) return;
      finishPointer();
      lastTap = { at: 0, x: 0, y: 0 };
    });
    elements.boardFrame.addEventListener("contextmenu", (event) => {
      if (event.target === elements.boardFrame) event.preventDefault();
    });
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
      // A new pointerdown is a new gesture. Keep suppressing only the click
      // synthesized from the completed long press, never the user's next tap.
      suppressedTap = { index: -1, until: 0 };
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
          operateCell(index, "exclude");
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
        suppressedTap = { index: -1, until: 0 };
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

      if (cell.exclusions.length || cell.tentativeExclusions.length) {
        const list = document.createElement("span");
        list.className = "x-list";
        const marks = [
          ...cell.exclusions.map((color) => ({ color, tentative: false })),
          ...cell.tentativeExclusions
            .filter((color) => !cell.exclusions.includes(color))
            .map((color) => ({ color, tentative: true })),
        ];
        for (const { color, tentative } of marks) {
          const meta = colorMeta(color);
          const mark = document.createElement("span");
          mark.className = "x-mark";
          if (tentative) mark.classList.add("is-tentative");
          mark.dataset.slot = xSlot(color);
          mark.style.setProperty("--x-color", meta.hex);
          mark.textContent = "×";
          mark.setAttribute("aria-hidden", "true");
          mark.title = tentative ? `${meta.name}を仮置きで除外` : `${meta.name}を除外`;
          list.append(mark);
        }
        button.append(list);
      }

      bindCellInteractions(button, index, isColoredClue);
      elements.board.append(button);
    });
    fitBoardToFrame();
  }

  function renderStatus(evaluation) {
    elements.status.className = "status-card";
    let message = `${evaluation.filled} / ${evaluation.total} マス着色`;
    if (evaluation.tentative) {
      message += `（仮置き 色${evaluation.tentativeColors}・×${evaluation.tentativeExclusions}）`;
    }
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
    updateTentativeActions(evaluation);
  }

  function loadPuzzle(id) {
    const puzzle = visiblePuzzles.find((item) => item.id === id) || visiblePuzzles[0];
    game = Model.createGame(puzzle, { autoFill: elements.autoFill.checked });
    applyColorModeUI();
    renderPalette();
    renderMeta();
    render();
  }

  function initialize() {
    for (const puzzle of visiblePuzzles) {
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
    elements.tentativeCommitButtons.forEach((button) => {
      button.addEventListener("click", commitTentative);
    });
    elements.tentativeDiscardButtons.forEach((button) => {
      button.addEventListener("click", discardTentative);
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
    bindBoardFrameInteractions();
    window.addEventListener("resize", fitBoardToFrame, { passive: true });

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

    loadPuzzle(visiblePuzzles[0].id);
  }

  initialize();
})();
