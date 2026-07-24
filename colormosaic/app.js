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

  const elements = {
    puzzleSelect: document.querySelector("#puzzle-select"),
    puzzleMeta: document.querySelector("#puzzle-meta"),
    palettes: [...document.querySelectorAll("[data-palette]")],
    paintTools: [...document.querySelectorAll('[data-tool="paint"]')],
    xTools: [...document.querySelectorAll('[data-tool="x"]')],
    autoFill: document.querySelector("#auto-fill"),
    undoButtons: [...document.querySelectorAll("[data-undo]")],
    reset: document.querySelector("#reset-button"),
    board: document.querySelector("#board"),
    status: document.querySelector("#status"),
    hint: document.querySelector("#hint"),
    toast: document.querySelector("#toast"),
  };

  let game = null;
  let selectedColor = null;
  let tool = "paint";
  let toastTimer = null;

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

  function selectTool(nextTool) {
    tool = nextTool;
    const painting = tool === "paint";
    elements.paintTools.forEach((button) => {
      button.classList.toggle("is-active", painting);
      button.setAttribute("aria-pressed", String(painting));
    });
    elements.xTools.forEach((button) => {
      button.classList.toggle("is-active", !painting);
      button.setAttribute("aria-pressed", String(!painting));
    });
  }

  function selectColor(color) {
    selectedColor = color;
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
    if (cell.color) parts.push(`${colorMeta(cell.color).name}で着色`);
    else parts.push("未着色");
    if (cell.fixed) parts.push("固定色");
    if (cell.exclusions.length) {
      parts.push(`${cell.exclusions.map((color) => colorMeta(color).name).join("、")}にX`);
    }
    return parts.join("、");
  }

  function operateCell(index, operation = tool) {
    if (game.cells[index].fixed) {
      showToast("二重枠は固定色です。");
      return;
    }
    const result = Model.applyAction(game, {
      type: operation === "paint" ? "paint" : "toggle-x",
      index,
      color: selectedColor,
    });
    if (!result.changed) return;
    if (result.autoFilled) {
      showToast(`${colorMeta(result.autoFilled).name}だけが残ったため、自動で塗りました。`);
    }
    render();
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
        button.style.setProperty("--cell-color", meta.hex);
        button.style.setProperty("--cell-text", meta.text);
      }
      if (cell.fixed) button.classList.add("is-fixed");
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

      button.addEventListener("click", () => operateCell(index));
      button.addEventListener("contextmenu", (event) => {
        event.preventDefault();
        operateCell(index, "x");
      });
      elements.board.append(button);
    });
  }

  function renderStatus(evaluation) {
    elements.status.className = "status-card";
    let message = `${evaluation.filled} / ${evaluation.total} マス着色`;
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
    elements.autoFill.checked = game.autoFill;
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
    elements.paintTools.forEach((button) => {
      button.addEventListener("click", () => selectTool("paint"));
    });
    elements.xTools.forEach((button) => {
      button.addEventListener("click", () => selectTool("x"));
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
        if (Model.undo(game)) render();
      } else if (event.key.toLowerCase() === "p" || event.key === "1") {
        selectTool("paint");
      } else if (event.key.toLowerCase() === "x" || event.key === "2") {
        selectTool("x");
      } else {
        const color = game.puzzle.colors.find((item) => item.toLowerCase() === event.key.toLowerCase());
        if (color) selectColor(color);
      }
    });

    loadPuzzle(puzzleData.puzzles[0].id);
  }

  initialize();
})();
