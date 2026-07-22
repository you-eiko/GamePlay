(function () {
  "use strict";

  const Model = window.ColorRoomsModel;
  const puzzleData = window.COLOR_ROOMS_PUZZLES;
  if (!Model || !puzzleData || !Array.isArray(puzzleData.puzzles)) {
    document.body.textContent = "問題を読み込めませんでした。";
    return;
  }

  const COLOR_META = {
    R: { name: "赤", hex: "#ef5b64", text: "#ffffff", symbol: "●" },
    G: { name: "緑", hex: "#4f9185", text: "#ffffff", symbol: "▲" },
    B: { name: "青", hex: "#4e82c4", text: "#ffffff", symbol: "■" },
    Y: { name: "黄", hex: "#efa83d", text: "#17303b", symbol: "◆" },
  };
  const STORAGE_PREFIX = "gameplay:colorrooms:";

  const elements = {
    puzzleSelect: document.querySelector("#puzzle-select"),
    puzzleMeta: document.querySelector("#puzzle-meta"),
    modeButtons: [...document.querySelectorAll("[data-mode-button]")],
    palettes: [...document.querySelectorAll("[data-palette]")],
    erasers: [...document.querySelectorAll("[data-eraser]")],
    undoButtons: [...document.querySelectorAll("[data-undo]")],
    redoButtons: [...document.querySelectorAll("[data-redo]")],
    resetButtons: [...document.querySelectorAll("[data-reset]")],
    closeRoomButtons: [...document.querySelectorAll("[data-close-room]")],
    syncRooms: [...document.querySelectorAll("[data-sync-rooms]")],
    board: document.querySelector("#board"),
    status: document.querySelector("#status"),
    roomFocus: document.querySelector("#room-focus"),
    roomFocusTitle: document.querySelector("#room-focus-title"),
    roomFocusProgress: document.querySelector("#room-focus-progress"),
    mobileRoomMessage: document.querySelector("#mobile-room-message"),
    hint: document.querySelector("#hint"),
    toast: document.querySelector("#toast"),
  };

  let game = null;
  let selectedColor = null;
  let mode = "color";
  let colorTool = "paint";
  let stroke = null;
  let toastTimer = null;
  let wasSolved = false;

  function colorMeta(color) {
    return COLOR_META[color] || { name: color, hex: "#6f7c85", text: "#ffffff", symbol: "●" };
  }

  function clueMap(puzzle) {
    return new Map(
      puzzle.clues.map((clue) => [Model.cellIndex(puzzle, clue.row, clue.col), clue]),
    );
  }

  function storageKey(id) {
    return `${STORAGE_PREFIX}${id}`;
  }

  function readProgress(id) {
    try {
      const value = window.localStorage.getItem(storageKey(id));
      return value ? JSON.parse(value) : null;
    } catch (_) {
      return null;
    }
  }

  function saveProgress() {
    if (!game) return;
    try {
      window.localStorage.setItem(
        storageKey(game.puzzle.id),
        JSON.stringify(Model.serializeProgress(game)),
      );
      window.localStorage.setItem(`${STORAGE_PREFIX}last-puzzle`, game.puzzle.id);
    } catch (_) {
      // プライベートブラウズなどで保存できない場合も、プレイ自体は続ける。
    }
  }

  function showToast(message) {
    elements.toast.textContent = message;
    elements.toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => elements.toast.classList.remove("is-visible"), 1900);
  }

  function selectMode(nextMode) {
    mode = nextMode === "room" ? "room" : "color";
    document.body.dataset.mode = mode;
    elements.modeButtons.forEach((button) => {
      const active = button.dataset.modeButton === mode;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    renderBoard(Model.evaluateGame(game));
    renderRoomFocus();
  }

  function selectColor(color) {
    if (!game.puzzle.colors.includes(color)) return;
    selectedColor = color;
    colorTool = "paint";
    document.body.dataset.colorTool = colorTool;
    selectMode("color");
    updateToolControls();
  }

  function selectEraser() {
    colorTool = "erase";
    document.body.dataset.colorTool = colorTool;
    selectMode("color");
    updateToolControls();
  }

  function updateToolControls() {
    elements.palettes.forEach((palette) => {
      palette.querySelectorAll(".color-button").forEach((button) => {
        const active = colorTool === "paint" && button.dataset.color === selectedColor;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-checked", String(active));
      });
    });
    elements.erasers.forEach((button) => {
      const active = colorTool === "erase";
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
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
        button.style.setProperty("--cell-text", meta.text);
        button.innerHTML = `<span class="color-dot">${meta.symbol}</span><span class="color-name">${meta.name}</span>`;
        button.addEventListener("click", () => selectColor(color));
        palette.append(button);
      }
    });
    if (!game.puzzle.colors.includes(selectedColor)) selectedColor = game.puzzle.colors[0];
    updateToolControls();
  }

  function cellDescription(index, clue, room) {
    const { row, col } = Model.coordinates(game.puzzle, index);
    const cell = game.cells[index];
    const parts = [`${row}行${col}列`];
    if (clue) parts.push(`数字${clue.value}`);
    if (cell.color) parts.push(`${colorMeta(cell.color).name}で着色`);
    else parts.push("未着色");
    if (cell.fixed) parts.push("固定色");
    if (room && room.cells.length > 1) parts.push(`部屋${room.label}の同室メモ`);
    return parts.join("、");
  }

  function renderBoard(evaluation) {
    const clues = clueMap(game.puzzle);
    elements.board.style.setProperty("--rows", game.puzzle.rows);
    elements.board.style.setProperty("--cols", game.puzzle.cols);
    if (window.innerWidth <= 820) {
      const cellSize = Math.min(74, Math.floor((window.innerWidth - 44) / game.puzzle.cols));
      elements.board.style.setProperty("--cell-size", `${cellSize}px`);
    } else {
      elements.board.style.removeProperty("--cell-size");
    }
    elements.board.classList.toggle("is-room-mode", mode === "room");
    elements.board.classList.toggle("has-focus", Boolean(game.focusedRoomId));
    elements.board.replaceChildren();

    game.cells.forEach((cell, index) => {
      const clue = clues.get(index);
      const room = Model.roomForCell(game, index);
      const button = document.createElement("button");
      button.type = "button";
      button.className = "cell";
      button.dataset.index = String(index);
      button.setAttribute("role", "gridcell");
      button.setAttribute("aria-label", cellDescription(index, clue, room));

      if (cell.color) {
        const meta = colorMeta(cell.color);
        button.classList.add("is-filled");
        button.style.setProperty("--cell-color", meta.hex);
        button.style.setProperty("--cell-text", meta.text);
      }
      if (cell.fixed) button.classList.add("is-fixed");
      if (evaluation.cellIssues.has(index)) button.classList.add("is-issue");
      if (room && room.id === game.focusedRoomId) button.classList.add("is-focus-room");

      const col = index % game.puzzle.cols;
      const row = Math.floor(index / game.puzzle.cols);
      if (col < game.puzzle.cols - 1) {
        const right = index + 1;
        const rightRoom = Model.roomForCell(game, right);
        if (cell.color && game.cells[right].color && cell.color !== game.cells[right].color) {
          button.classList.add("edge-right-boundary");
        } else if (room && rightRoom && room.id === rightRoom.id) {
          button.classList.add("edge-right-room");
        }
      }
      if (row < game.puzzle.rows - 1) {
        const below = index + game.puzzle.cols;
        const belowRoom = Model.roomForCell(game, below);
        if (cell.color && game.cells[below].color && cell.color !== game.cells[below].color) {
          button.classList.add("edge-bottom-boundary");
        } else if (room && belowRoom && room.id === belowRoom.id) {
          button.classList.add("edge-bottom-room");
        }
      }

      if (clue) {
        const number = document.createElement("span");
        number.className = "clue-number";
        number.textContent = String(clue.value);
        button.append(number);
      } else if (cell.color) {
        const symbol = document.createElement("span");
        symbol.className = "color-symbol";
        symbol.textContent = colorMeta(cell.color).symbol;
        button.append(symbol);
      }

      if (cell.color) {
        const code = document.createElement("span");
        code.className = "color-code";
        code.textContent = cell.color;
        button.append(code);
      }

      if (room && (room.cells.length > 1 || room.id === game.focusedRoomId)) {
        const label = document.createElement("span");
        label.className = "room-label";
        label.textContent = room.label;
        button.append(label);
      }
      elements.board.append(button);
    });
  }

  function renderStatus(evaluation) {
    elements.status.className = "status-card";
    let message = `${evaluation.filled} / ${evaluation.total} マス着色`;
    if (evaluation.solved) {
      elements.status.classList.add("is-solved");
      message = "完成。すべての部屋が数字どおりです。";
    } else if (evaluation.ruleIssues.length) {
      elements.status.classList.add("is-warning");
      message = `基本ルールと合わない場所が${evaluation.ruleIssues.length}か所あります。`;
    } else if (evaluation.roomIssues.size || evaluation.memoIssues.length) {
      elements.status.classList.add("is-warning");
      const count = evaluation.roomIssues.size + evaluation.memoIssues.length;
      message = `同室メモと色が合わない場所が${count}か所あります。`;
    } else if (evaluation.complete) {
      elements.status.classList.add("is-warning");
      message = "全マス着色済みです。赤枠の部屋を見直してください。";
    }
    elements.status.innerHTML = `<span class="status-dot" aria-hidden="true"></span><span>${message}</span>`;
    if (evaluation.solved && !wasSolved) showToast("完成しました。お見事です。");
    wasSolved = evaluation.solved;
  }

  function renderRoomFocus() {
    const room = game.focusedRoomId ? Model.roomById(game, game.focusedRoomId) : null;
    elements.roomFocus.hidden = !room;
    elements.closeRoomButtons.forEach((button) => { button.disabled = !room; });
    if (!room) {
      elements.mobileRoomMessage.textContent = "数字をタップして部屋を選択";
      return;
    }
    const progress = Model.roomProgress(game, room);
    const state = progress.complete ? "完成" : (progress.connected ? "連結" : "未連結");
    elements.roomFocusTitle.textContent = `部屋${room.label}　数字${room.clueValue}`;
    elements.roomFocusProgress.textContent = `登録 ${progress.count}/${progress.target}・${state}`;
    elements.mobileRoomMessage.textContent = `部屋${room.label}　${progress.count}/${progress.target}・${state}`;
  }

  function renderMeta() {
    const puzzle = game.puzzle;
    elements.puzzleMeta.innerHTML = [
      `${puzzle.rows}×${puzzle.cols}`,
      `${puzzle.colors.length}色`,
      `数字${puzzle.clues.length}`,
    ].map((value) => `<span class="meta-chip">${value}</span>`).join("");
    elements.hint.innerHTML = `<strong>${puzzle.description}</strong><br>${puzzle.first_hint}`;
  }

  function render(options = {}) {
    const evaluation = Model.evaluateGame(game);
    renderBoard(evaluation);
    renderStatus(evaluation);
    renderRoomFocus();
    elements.undoButtons.forEach((button) => { button.disabled = game.history.length === 0; });
    elements.redoButtons.forEach((button) => { button.disabled = game.future.length === 0; });
    elements.syncRooms.forEach((input) => { input.checked = game.syncCompleteRooms; });
    updateToolControls();
    if (options.persist !== false) saveProgress();
  }

  function focusRoom(roomId) {
    game.focusedRoomId = roomId;
    selectMode("room");
    renderRoomFocus();
  }

  function closeRoomFocus() {
    game.focusedRoomId = null;
    renderBoard(Model.evaluateGame(game));
    renderRoomFocus();
  }

  function cellFromPoint(clientX, clientY) {
    const target = document.elementFromPoint(clientX, clientY);
    const cell = target && target.closest ? target.closest(".cell") : null;
    if (!cell || !elements.board.contains(cell)) return null;
    return Number(cell.dataset.index);
  }

  function applyStrokeIndex(index) {
    if (!stroke || stroke.visited.has(index)) return;
    stroke.visited.add(index);
    let changed = false;
    if (stroke.kind === "color") {
      changed = stroke.operation === "erase"
        ? Model.eraseCell(game, index)
        : Model.paintCell(game, index, selectedColor);
      if (!changed && game.cells[index]?.fixed && !stroke.notified) {
        stroke.notified = true;
        showToast("白い角印は固定色です。");
      }
    } else {
      const result = Model.editRoomCell(game, stroke.roomId, index, stroke.operation);
      changed = result.changed;
      if (result.conflict && !stroke.notified) {
        stroke.notified = true;
        showToast(result.conflict === "assigned"
          ? "別の数字部屋に登録済みです。先にその部屋を選んで解除してください。"
          : "数字マスは別の部屋へ追加できません。");
      }
    }
    if (changed) render({ persist: false });
  }

  function beginStroke(event, index) {
    if (stroke || event.button !== 0) return;
    if (mode === "room") {
      const assigned = Model.roomForCell(game, index);
      if (!game.focusedRoomId) {
        if (assigned) focusRoom(assigned.id);
        else showToast("まず数字マスをタップして部屋を選びます。");
        return;
      }
      if (assigned && assigned.id !== game.focusedRoomId) {
        focusRoom(assigned.id);
        showToast(`部屋${assigned.label}へ切り替えました。`);
        return;
      }
      const room = Model.roomById(game, game.focusedRoomId);
      const operation = room.cells.includes(index) ? "remove" : "add";
      if (operation === "remove" && index === room.clueIndex) {
        showToast("数字マスは部屋メモから外せません。");
        return;
      }
      stroke = {
        pointerId: event.pointerId,
        kind: "room",
        roomId: room.id,
        operation,
        before: Model.startEdit(game),
        visited: new Set(),
        notified: false,
      };
    } else {
      stroke = {
        pointerId: event.pointerId,
        kind: "color",
        operation: colorTool,
        before: Model.startEdit(game),
        visited: new Set(),
        notified: false,
      };
    }
    elements.board.setPointerCapture?.(event.pointerId);
    applyStrokeIndex(index);
  }

  function finishStroke(event) {
    if (!stroke || (event && event.pointerId !== stroke.pointerId)) return;
    const result = Model.finishEdit(game, stroke.before);
    stroke = null;
    if (result.changed) {
      render();
      const syncedCount = result.synced.reduce((sum, item) => sum + item.indices.length, 0);
      if (syncedCount) showToast(`完成した部屋を${syncedCount}マス一括着色しました。`);
    }
  }

  function loadPuzzle(id) {
    const puzzle = puzzleData.puzzles.find((item) => item.id === id) || puzzleData.puzzles[0];
    game = Model.createGame(puzzle, { progress: readProgress(puzzle.id) });
    elements.puzzleSelect.value = puzzle.id;
    selectedColor = puzzle.colors.includes(selectedColor) ? selectedColor : puzzle.colors[0];
    colorTool = "paint";
    wasSolved = false;
    renderPalette();
    renderMeta();
    render();
  }

  function initialize() {
    for (const puzzle of puzzleData.puzzles) {
      const option = document.createElement("option");
      option.value = puzzle.id;
      option.textContent = `${puzzle.id}　${puzzle.title}`;
      elements.puzzleSelect.append(option);
    }

    elements.puzzleSelect.addEventListener("change", () => loadPuzzle(elements.puzzleSelect.value));
    elements.modeButtons.forEach((button) => {
      button.addEventListener("click", () => selectMode(button.dataset.modeButton));
    });
    elements.erasers.forEach((button) => button.addEventListener("click", selectEraser));
    elements.undoButtons.forEach((button) => {
      button.addEventListener("click", () => { if (Model.undo(game)) render(); });
    });
    elements.redoButtons.forEach((button) => {
      button.addEventListener("click", () => { if (Model.redo(game)) render(); });
    });
    elements.resetButtons.forEach((button) => {
      button.addEventListener("click", () => {
        if (!window.confirm("この問題を初期状態へ戻しますか？")) return;
        if (Model.reset(game)) {
          render();
          showToast("初期状態へ戻しました。Undoで取り消せます。");
        }
      });
    });
    elements.closeRoomButtons.forEach((button) => button.addEventListener("click", closeRoomFocus));
    elements.syncRooms.forEach((input) => {
      input.addEventListener("change", () => {
        const result = Model.setSyncCompleteRooms(game, input.checked);
        render();
        if (result.synced.length) showToast("完成済みの部屋を一括着色しました。");
      });
    });

    elements.board.addEventListener("pointerdown", (event) => {
      const cell = event.target.closest(".cell");
      if (!cell) return;
      event.preventDefault();
      beginStroke(event, Number(cell.dataset.index));
    });
    elements.board.addEventListener("pointermove", (event) => {
      if (!stroke || event.pointerId !== stroke.pointerId) return;
      event.preventDefault();
      const index = cellFromPoint(event.clientX, event.clientY);
      if (index !== null) applyStrokeIndex(index);
    });
    elements.board.addEventListener("pointerup", finishStroke);
    elements.board.addEventListener("pointercancel", finishStroke);
    elements.board.addEventListener("contextmenu", (event) => {
      const cell = event.target.closest(".cell");
      if (!cell) return;
      event.preventDefault();
      const before = Model.startEdit(game);
      Model.eraseCell(game, Number(cell.dataset.index));
      const result = Model.finishEdit(game, before);
      if (result.changed) render();
    });

    document.addEventListener("keydown", (event) => {
      const target = event.target;
      if (target instanceof HTMLInputElement || target instanceof HTMLSelectElement) return;
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "z") {
        event.preventDefault();
        if (event.shiftKey) {
          if (Model.redo(game)) render();
        } else if (Model.undo(game)) render();
      } else if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "y") {
        event.preventDefault();
        if (Model.redo(game)) render();
      } else if (event.key.toLowerCase() === "c") {
        selectMode("color");
      } else if (event.key.toLowerCase() === "m") {
        selectMode("room");
      } else if (event.key.toLowerCase() === "e") {
        selectEraser();
      } else if (/^[1-4]$/.test(event.key)) {
        const color = game.puzzle.colors[Number(event.key) - 1];
        if (color) selectColor(color);
      }
    });

    let lastPuzzle = null;
    try { lastPuzzle = window.localStorage.getItem(`${STORAGE_PREFIX}last-puzzle`); } catch (_) { /* noop */ }
    loadPuzzle(puzzleData.puzzles.some((puzzle) => puzzle.id === lastPuzzle)
      ? lastPuzzle
      : puzzleData.puzzles[0].id);
  }

  initialize();
})();
