(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.ColorMosaicModel = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  function cloneCells(cells) {
    return cells.map((cell) => ({
      color: cell.color,
      tentative: cell.tentative,
      fixed: cell.fixed,
      exclusions: [...cell.exclusions],
      tentativeExclusions: [...(cell.tentativeExclusions || [])],
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
      tentative: false,
      fixed: false,
      exclusions: [],
      tentativeExclusions: [],
    }));
    for (const given of puzzle.fixed) {
      const index = cellIndex(puzzle, given.row, given.col);
      if (!cells[index] || !puzzle.colors.includes(given.color)) {
        throw new Error(`固定色の指定が不正です: r${given.row}c${given.col}`);
      }
      cells[index].color = given.color;
      cells[index].tentative = false;
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
      future: [],
      autoFill: options.autoFill !== false,
    };
  }

  function snapshot(game) {
    return cloneCells(game.cells);
  }

  function sameCellState(left, right) {
    return left.color === right.color
      && left.tentative === right.tentative
      && left.exclusions.length === right.exclusions.length
      && left.exclusions.every((color, index) => color === right.exclusions[index])
      && left.tentativeExclusions.length === right.tentativeExclusions.length
      && left.tentativeExclusions.every(
        (color, index) => color === right.tentativeExclusions[index],
      );
  }

  function pushIfChanged(game, before) {
    const changed = game.cells.some((cell, index) => !sameCellState(cell, before[index]));
    if (changed) {
      game.history.push(before);
      game.future = [];
    }
    return changed;
  }

  function fillRemainingColor(game, index) {
    const cell = game.cells[index];
    if (cell.fixed || cell.color) return null;
    const excluded = new Set(cell.exclusions);
    const remaining = game.puzzle.colors.filter((color) => !excluded.has(color));
    if (remaining.length !== 1) return null;
    cell.color = remaining[0];
    cell.tentative = false;
    return remaining[0];
  }

  function applyAutoFillToCell(game, index) {
    if (!game.autoFill) return null;
    return fillRemainingColor(game, index);
  }

  function addExclusion(game, exclusions, color) {
    return game.puzzle.colors.filter(
      (item) => item === color || exclusions.includes(item),
    );
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

    if (action.type === "cycle") {
      const tentative = Boolean(action.tentative);
      if (tentative) {
        if ((cell.color && !cell.tentative) || cell.exclusions.includes(color)) {
          // 確定済みの情報は仮置き操作で上書きしない。
        } else if (cell.color === color && cell.tentative) {
          cell.color = null;
          cell.tentative = false;
          cell.tentativeExclusions = addExclusion(
            game,
            cell.tentativeExclusions,
            color,
          );
        } else if (cell.tentativeExclusions.includes(color)) {
          cell.tentativeExclusions = cell.tentativeExclusions.filter(
            (item) => item !== color,
          );
        } else {
          cell.color = color;
          cell.tentative = true;
          cell.tentativeExclusions = cell.tentativeExclusions.filter(
            (item) => item !== color,
          );
        }
      } else if (cell.color === color) {
        cell.tentativeExclusions = cell.tentativeExclusions.filter(
          (item) => item !== color,
        );
        if (cell.tentative) {
          cell.tentative = false;
        } else {
          cell.color = null;
          cell.tentative = false;
          cell.exclusions = addExclusion(game, cell.exclusions, color);
          autoFilled = applyAutoFillToCell(game, index);
        }
      } else if (cell.exclusions.includes(color)) {
        cell.exclusions = cell.exclusions.filter((item) => item !== color);
        cell.tentativeExclusions = cell.tentativeExclusions.filter(
          (item) => item !== color,
        );
      } else {
        cell.color = color;
        cell.tentative = false;
        cell.exclusions = cell.exclusions.filter((item) => item !== color);
        cell.tentativeExclusions = cell.tentativeExclusions.filter(
          (item) => item !== color,
        );
      }
    } else if (action.type === "paint") {
      const tentative = Boolean(action.tentative);
      if (
        tentative
        && ((cell.color && !cell.tentative) || cell.exclusions.includes(color))
      ) {
        // 確定済みの情報は仮置き操作で上書きしない。
      } else if (!action.direct && cell.color === color && cell.tentative === tentative) {
        cell.color = null;
        cell.tentative = false;
      } else {
        cell.color = color;
        cell.tentative = tentative;
        if (tentative) {
          cell.tentativeExclusions = cell.tentativeExclusions.filter(
            (item) => item !== color,
          );
        } else {
          cell.exclusions = cell.exclusions.filter((item) => item !== color);
          cell.tentativeExclusions = cell.tentativeExclusions.filter(
            (item) => item !== color,
          );
        }
      }
    } else if (action.type === "exclude") {
      const tentative = Boolean(action.tentative);
      if (tentative) {
        if (
          (!cell.color || cell.tentative)
          && !cell.exclusions.includes(color)
          && (!cell.tentativeExclusions.includes(color) || cell.color)
        ) {
          if (cell.tentative) {
            cell.color = null;
            cell.tentative = false;
          }
          cell.tentativeExclusions = addExclusion(
            game,
            cell.tentativeExclusions,
            color,
          );
        }
      } else if (!cell.exclusions.includes(color) || cell.color) {
        cell.color = null;
        cell.tentative = false;
        cell.exclusions = addExclusion(game, cell.exclusions, color);
        cell.tentativeExclusions = cell.tentativeExclusions.filter(
          (item) => item !== color,
        );
        autoFilled = applyAutoFillToCell(game, index);
      }
    } else if (action.type === "toggle-x") {
      const hasColor = cell.exclusions.includes(color);
      if (hasColor) {
        cell.exclusions = cell.exclusions.filter((item) => item !== color);
      } else {
        cell.exclusions = addExclusion(game, cell.exclusions, color);
        if (cell.color === color) {
          cell.color = null;
          cell.tentative = false;
        }
        cell.tentativeExclusions = cell.tentativeExclusions.filter(
          (item) => item !== color,
        );
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

  function fillForcedCells(game) {
    const before = snapshot(game);
    const filled = [];
    game.cells.forEach((_, index) => {
      const color = fillRemainingColor(game, index);
      if (color) filled.push({ index, color });
    });
    pushIfChanged(game, before);
    return filled;
  }

  function commitTentative(game) {
    const before = snapshot(game);
    let committed = 0;
    const autoFilled = [];

    game.cells.forEach((cell, index) => {
      if (cell.tentative && cell.color) {
        cell.tentative = false;
        cell.exclusions = cell.exclusions.filter((color) => color !== cell.color);
        committed += 1;
      }
      if (cell.tentativeExclusions.length) {
        for (const color of cell.tentativeExclusions) {
          cell.exclusions = addExclusion(game, cell.exclusions, color);
          committed += 1;
        }
        cell.tentativeExclusions = [];
      }
      const filledColor = applyAutoFillToCell(game, index);
      if (filledColor) autoFilled.push({ index, color: filledColor });
    });

    return {
      changed: pushIfChanged(game, before),
      committed,
      autoFilled,
    };
  }

  function discardTentative(game) {
    const before = snapshot(game);
    let discarded = 0;

    for (const cell of game.cells) {
      if (cell.tentative && cell.color) {
        cell.color = null;
        cell.tentative = false;
        discarded += 1;
      }
      discarded += cell.tentativeExclusions.length;
      cell.tentativeExclusions = [];
    }

    return {
      changed: pushIfChanged(game, before),
      discarded,
    };
  }

  function undo(game) {
    const previous = game.history.pop();
    if (!previous) return false;
    game.future.push(snapshot(game));
    game.cells = cloneCells(previous);
    return true;
  }

  function excludeAroundClue(game, index, options = {}) {
    const center = game.cells[index];
    const clue = game.puzzle.clues.find(
      (item) => cellIndex(game.puzzle, item.row, item.col) === index,
    );
    if (!center?.color || !clue) {
      return { changed: false, color: null, excluded: 0, autoFilled: [] };
    }

    const before = snapshot(game);
    const color = center.color;
    const tentative = Boolean(options.tentative);
    const autoFilled = [];
    let excluded = 0;

    for (const neighborIndex of neighbors(game.puzzle, clue.row, clue.col)) {
      const cell = game.cells[neighborIndex];
      if (
        cell.fixed
        || cell.color
        || cell.exclusions.includes(color)
        || cell.tentativeExclusions.includes(color)
      ) continue;

      if (tentative) {
        cell.tentativeExclusions = addExclusion(
          game,
          cell.tentativeExclusions,
          color,
        );
      } else {
        cell.exclusions = addExclusion(game, cell.exclusions, color);
      }
      excluded += 1;
      const filledColor = tentative
        ? null
        : applyAutoFillToCell(game, neighborIndex);
      if (filledColor) autoFilled.push({ index: neighborIndex, color: filledColor });
    }

    return {
      changed: pushIfChanged(game, before),
      color,
      excluded,
      autoFilled,
      tentative,
    };
  }

  function redo(game) {
    const next = game.future.pop();
    if (!next) return false;
    game.history.push(snapshot(game));
    game.cells = cloneCells(next);
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
    if (!center.color) {
      return { status: "unknown-center", same: 0, possible: 0, completed: false };
    }

    let same = 0;
    let possible = 0;
    let allNeighborsConfirmed = true;
    for (const index of neighbors(game.puzzle, clue.row, clue.col)) {
      const neighbor = game.cells[index];
      if (!neighbor.color || neighbor.tentative) allNeighborsConfirmed = false;
      if (neighbor.color === center.color) same += 1;
      else if (
        !neighbor.color
        && !neighbor.exclusions.includes(center.color)
        && !neighbor.tentativeExclusions.includes(center.color)
      ) possible += 1;
    }
    const completed = !center.tentative && allNeighborsConfirmed && same === clue.value;

    if (same > clue.value || same + possible < clue.value) {
      return { status: "impossible", same, possible, completed: false };
    }
    if (possible === 0) {
      return {
        status: same === clue.value ? "satisfied" : "impossible",
        same,
        possible,
        completed,
      };
    }
    return { status: "pending", same, possible, completed: false };
  }

  function evaluateGame(game) {
    const clueStates = new Map();
    let impossibleClues = 0;
    for (const clue of game.puzzle.clues) {
      const state = evaluateClue(game, clue);
      clueStates.set(cellIndex(game.puzzle, clue.row, clue.col), state);
      if (state.status === "impossible") impossibleClues += 1;
    }

    const filled = game.cells.filter((cell) => cell.color && !cell.tentative).length;
    const tentativeColors = game.cells.filter((cell) => cell.color && cell.tentative).length;
    const tentativeExclusions = game.cells.reduce(
      (total, cell) => total + cell.tentativeExclusions.length,
      0,
    );
    const tentative = tentativeColors + tentativeExclusions;
    const contradictions = game.cells.filter(
      (cell) => cell.color && (
        cell.exclusions.includes(cell.color)
        || cell.tentativeExclusions.includes(cell.color)
      ),
    ).length;
    const complete = filled === game.cells.length;
    const solved = complete && impossibleClues === 0 && contradictions === 0
      && [...clueStates.values()].every((state) => state.status === "satisfied");

    return {
      filled,
      tentative,
      tentativeColors,
      tentativeExclusions,
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
    fillForcedCells,
    commitTentative,
    discardTentative,
    undo,
    excludeAroundClue,
    redo,
    reset,
    evaluateClue,
    evaluateGame,
    cellIndex,
    neighbors,
  };
});
