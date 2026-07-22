(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.ColorMosaicModel = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  function cloneCells(cells) {
    return cells.map((cell) => ({
      color: cell.color,
      fixed: cell.fixed,
      exclusions: [...cell.exclusions],
    }));
  }

  function normalizePuzzle(puzzle) {
    if (!puzzle || !Number.isInteger(puzzle.rows) || !Number.isInteger(puzzle.cols)) {
      throw new Error("盤面サイズが不正です。");
    }
    if (!Array.isArray(puzzle.colors) || puzzle.colors.length < 2) {
      throw new Error("色は2色以上必要です。");
    }
    const colors = [...new Set(puzzle.colors)];
    if (colors.length !== puzzle.colors.length) throw new Error("色記号が重複しています。");

    return {
      ...puzzle,
      colors,
      fixed: Array.isArray(puzzle.fixed) ? puzzle.fixed : [],
      clues: Array.isArray(puzzle.clues) ? puzzle.clues : [],
    };
  }

  function cellIndex(puzzle, row, col) {
    return (row - 1) * puzzle.cols + (col - 1);
  }

  function createInitialCells(puzzle) {
    const cells = Array.from({ length: puzzle.rows * puzzle.cols }, () => ({
      color: null,
      fixed: false,
      exclusions: [],
    }));
    for (const given of puzzle.fixed) {
      const index = cellIndex(puzzle, given.row, given.col);
      if (!cells[index] || !puzzle.colors.includes(given.color)) {
        throw new Error(`固定色の指定が不正です: r${given.row}c${given.col}`);
      }
      cells[index].color = given.color;
      cells[index].fixed = true;
    }
    return cells;
  }

  function createGame(rawPuzzle, options = {}) {
    const puzzle = normalizePuzzle(rawPuzzle);
    return {
      puzzle,
      cells: createInitialCells(puzzle),
      history: [],
      autoFill: options.autoFill !== false,
    };
  }

  function snapshot(game) {
    return cloneCells(game.cells);
  }

  function sameCellState(left, right) {
    return left.color === right.color
      && left.exclusions.length === right.exclusions.length
      && left.exclusions.every((color, index) => color === right.exclusions[index]);
  }

  function pushIfChanged(game, before) {
    const changed = game.cells.some((cell, index) => !sameCellState(cell, before[index]));
    if (changed) game.history.push(before);
    return changed;
  }

  function applyAutoFillToCell(game, index) {
    const cell = game.cells[index];
    if (!game.autoFill || cell.fixed || cell.color) return null;
    const excluded = new Set(cell.exclusions);
    const remaining = game.puzzle.colors.filter((color) => !excluded.has(color));
    if (remaining.length !== 1) return null;
    cell.color = remaining[0];
    return remaining[0];
  }

  function applyAction(game, action) {
    const index = action.index;
    const color = action.color;
    const cell = game.cells[index];
    if (!cell || cell.fixed || !game.puzzle.colors.includes(color)) {
      return { changed: false, autoFilled: null };
    }

    const before = snapshot(game);
    let autoFilled = null;

    if (action.type === "paint") {
      if (cell.color === color) {
        cell.color = null;
      } else {
        cell.color = color;
        cell.exclusions = cell.exclusions.filter((item) => item !== color);
      }
    } else if (action.type === "toggle-x") {
      const hasColor = cell.exclusions.includes(color);
      if (hasColor) {
        cell.exclusions = cell.exclusions.filter((item) => item !== color);
      } else {
        cell.exclusions = game.puzzle.colors.filter(
          (item) => item === color || cell.exclusions.includes(item),
        );
        if (cell.color === color) cell.color = null;
        autoFilled = applyAutoFillToCell(game, index);
      }
    } else {
      return { changed: false, autoFilled: null };
    }

    return { changed: pushIfChanged(game, before), autoFilled };
  }

  function setAutoFill(game, enabled) {
    const before = snapshot(game);
    game.autoFill = Boolean(enabled);
    const filled = [];
    if (game.autoFill) {
      game.cells.forEach((_, index) => {
        const color = applyAutoFillToCell(game, index);
        if (color) filled.push({ index, color });
      });
    }
    pushIfChanged(game, before);
    return filled;
  }

  function undo(game) {
    const previous = game.history.pop();
    if (!previous) return false;
    game.cells = cloneCells(previous);
    return true;
  }

  function reset(game) {
    const before = snapshot(game);
    game.cells = createInitialCells(game.puzzle);
    return pushIfChanged(game, before);
  }

  function neighbors(puzzle, row, col) {
    const result = [];
    for (let dr = -1; dr <= 1; dr += 1) {
      for (let dc = -1; dc <= 1; dc += 1) {
        if (dr === 0 && dc === 0) continue;
        const nextRow = row + dr;
        const nextCol = col + dc;
        if (nextRow < 1 || nextRow > puzzle.rows || nextCol < 1 || nextCol > puzzle.cols) continue;
        result.push(cellIndex(puzzle, nextRow, nextCol));
      }
    }
    return result;
  }

  function evaluateClue(game, clue) {
    const center = game.cells[cellIndex(game.puzzle, clue.row, clue.col)];
    if (!center.color) return { status: "unknown-center", same: 0, possible: 0 };

    let same = 0;
    let possible = 0;
    for (const index of neighbors(game.puzzle, clue.row, clue.col)) {
      const neighbor = game.cells[index];
      if (neighbor.color === center.color) same += 1;
      else if (!neighbor.color && !neighbor.exclusions.includes(center.color)) possible += 1;
    }

    if (same > clue.value || same + possible < clue.value) {
      return { status: "impossible", same, possible };
    }
    if (possible === 0) {
      return { status: same === clue.value ? "satisfied" : "impossible", same, possible };
    }
    return { status: "pending", same, possible };
  }

  function evaluateGame(game) {
    const clueStates = new Map();
    let impossibleClues = 0;
    for (const clue of game.puzzle.clues) {
      const state = evaluateClue(game, clue);
      clueStates.set(cellIndex(game.puzzle, clue.row, clue.col), state);
      if (state.status === "impossible") impossibleClues += 1;
    }

    const filled = game.cells.filter((cell) => cell.color).length;
    const contradictions = game.cells.filter(
      (cell) => cell.color && cell.exclusions.includes(cell.color),
    ).length;
    const complete = filled === game.cells.length;
    const solved = complete && impossibleClues === 0 && contradictions === 0
      && [...clueStates.values()].every((state) => state.status === "satisfied");

    return {
      filled,
      total: game.cells.length,
      complete,
      solved,
      impossibleClues,
      contradictions,
      clueStates,
    };
  }

  return {
    createGame,
    applyAction,
    setAutoFill,
    undo,
    reset,
    evaluateClue,
    evaluateGame,
    cellIndex,
    neighbors,
  };
});

