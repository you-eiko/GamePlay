(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.ColorRoomsModel = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  function cellIndex(puzzle, row, col) {
    return (row - 1) * puzzle.cols + (col - 1);
  }

  function coordinates(puzzle, index) {
    return {
      row: Math.floor(index / puzzle.cols) + 1,
      col: (index % puzzle.cols) + 1,
    };
  }

  function orthogonalNeighbors(puzzle, index) {
    const { row, col } = coordinates(puzzle, index);
    const neighbors = [];
    if (row > 1) neighbors.push(cellIndex(puzzle, row - 1, col));
    if (col < puzzle.cols) neighbors.push(cellIndex(puzzle, row, col + 1));
    if (row < puzzle.rows) neighbors.push(cellIndex(puzzle, row + 1, col));
    if (col > 1) neighbors.push(cellIndex(puzzle, row, col - 1));
    return neighbors;
  }

  function wallKey(puzzle, index, direction) {
    if (!Number.isInteger(index) || index < 0 || index >= puzzle.rows * puzzle.cols) return null;
    const { row, col } = coordinates(puzzle, index);
    if (direction === "right" && col < puzzle.cols) return `v:${row}:${col}`;
    if (direction === "left" && col > 1) return `v:${row}:${col - 1}`;
    if (direction === "bottom" && row < puzzle.rows) return `h:${row}:${col}`;
    if (direction === "top" && row > 1) return `h:${row - 1}:${col}`;
    return null;
  }

  function validWallKeys(puzzle) {
    const keys = new Set();
    const count = puzzle.rows * puzzle.cols;
    for (let index = 0; index < count; index += 1) {
      const right = wallKey(puzzle, index, "right");
      const bottom = wallKey(puzzle, index, "bottom");
      if (right) keys.add(right);
      if (bottom) keys.add(bottom);
    }
    return keys;
  }

  function normalizePuzzle(raw) {
    if (!raw || !Number.isInteger(raw.rows) || !Number.isInteger(raw.cols)) {
      throw new Error("盤面サイズが不正です。");
    }
    if (!Array.isArray(raw.colors) || raw.colors.length < 2) {
      throw new Error("色は2色以上必要です。");
    }
    const colors = [...new Set(raw.colors)];
    if (colors.length !== raw.colors.length) throw new Error("色記号が重複しています。");
    const clues = Array.isArray(raw.clues) ? raw.clues.map((clue) => ({ ...clue })) : [];
    const fixed = Array.isArray(raw.fixed) ? raw.fixed.map((given) => ({ ...given })) : [];
    const cellCount = raw.rows * raw.cols;
    const seenClues = new Set();
    for (const clue of clues) {
      const index = cellIndex(raw, clue.row, clue.col);
      if (index < 0 || index >= cellCount || !Number.isInteger(clue.value) || clue.value < 1) {
        throw new Error(`数字の指定が不正です: r${clue.row}c${clue.col}`);
      }
      if (seenClues.has(index)) throw new Error(`数字が重複しています: r${clue.row}c${clue.col}`);
      seenClues.add(index);
    }
    if (clues.reduce((sum, clue) => sum + clue.value, 0) !== cellCount) {
      throw new Error("数字の合計が盤面のマス数と一致しません。");
    }
    for (const given of fixed) {
      const index = cellIndex(raw, given.row, given.col);
      if (index < 0 || index >= cellCount || !colors.includes(given.color)) {
        throw new Error(`固定色の指定が不正です: r${given.row}c${given.col}`);
      }
    }
    return { ...raw, colors, clues, fixed };
  }

  function roomLabel(index) {
    let value = index;
    let label = "";
    do {
      label = String.fromCharCode(65 + (value % 26)) + label;
      value = Math.floor(value / 26) - 1;
    } while (value >= 0);
    return label;
  }

  function initialState(puzzle) {
    const fixedMap = new Map(
      puzzle.fixed.map((given) => [cellIndex(puzzle, given.row, given.col), given.color]),
    );
    const cells = Array.from({ length: puzzle.rows * puzzle.cols }, (_, index) => ({
      color: fixedMap.get(index) || null,
      fixed: fixedMap.has(index),
    }));
    const rooms = puzzle.clues.map((clue, index) => {
      const clueIndex = cellIndex(puzzle, clue.row, clue.col);
      return {
        id: `room-${index}`,
        label: roomLabel(index),
        clueIndex,
        clueValue: clue.value,
        temporary: false,
        cells: [clueIndex],
      };
    });
    return { cells, rooms, walls: new Set(), nextTemporaryRoomId: 1 };
  }

  function cloneState(game) {
    return {
      cells: game.cells.map((cell) => ({ color: cell.color, fixed: cell.fixed })),
      rooms: game.rooms.map((room) => ({ ...room, cells: [...room.cells] })),
      walls: [...game.walls].sort(),
      nextTemporaryRoomId: game.nextTemporaryRoomId,
    };
  }

  function sameState(game, state) {
    return game.cells.every((cell, index) => cell.color === state.cells[index].color)
      && game.rooms.length === state.rooms.length
      && game.rooms.every((room, index) => (
        room.id === state.rooms[index].id
        && room.cells.length === state.rooms[index].cells.length
        && room.cells.every((cellIndexValue, cellIndexPosition) => (
          cellIndexValue === state.rooms[index].cells[cellIndexPosition]
        ))
      ))
      && game.walls.size === state.walls.length
      && state.walls.every((key) => game.walls.has(key))
      && game.nextTemporaryRoomId === state.nextTemporaryRoomId;
  }

  function restoreState(game, state) {
    game.cells = state.cells.map((cell) => ({ color: cell.color, fixed: cell.fixed }));
    game.rooms = state.rooms.map((room) => ({ ...room, cells: [...room.cells] }));
    game.walls = new Set(state.walls);
    game.nextTemporaryRoomId = state.nextTemporaryRoomId;
    if (game.focusedRoomId && !roomById(game, game.focusedRoomId)) game.focusedRoomId = null;
  }

  function createGame(rawPuzzle, options = {}) {
    const puzzle = normalizePuzzle(rawPuzzle);
    const state = initialState(puzzle);
    const game = {
      puzzle,
      cells: state.cells,
      rooms: state.rooms,
      walls: state.walls,
      nextTemporaryRoomId: state.nextTemporaryRoomId,
      focusedRoomId: null,
      history: [],
      future: [],
      syncCompleteRooms: options.syncCompleteRooms !== false,
    };
    if (options.progress) restoreProgress(game, options.progress);
    return game;
  }

  function startEdit(game) {
    return cloneState(game);
  }

  function finishEdit(game, before) {
    const synced = syncEligibleRooms(game);
    if (sameState(game, before)) return { changed: false, synced: [] };
    game.history.push(before);
    game.future = [];
    return { changed: true, synced };
  }

  function createTemporaryRoom(game, index) {
    if (!Number.isInteger(index) || !game.cells[index] || roomForCell(game, index) || clueAt(game, index)) {
      return null;
    }
    const number = game.nextTemporaryRoomId;
    const room = {
      id: `temp-${number}`,
      label: roomLabel(game.puzzle.clues.length + number - 1),
      clueIndex: null,
      clueValue: null,
      temporary: true,
      cells: [index],
    };
    game.nextTemporaryRoomId += 1;
    game.rooms.push(room);
    return room;
  }

  function hasWall(game, index, direction) {
    return wallSource(game, index, direction) !== null;
  }

  function wallSource(game, index, direction) {
    const key = wallKey(game.puzzle, index, direction);
    if (!key) return null;
    if (automaticWallKeys(game).has(key)) return "auto";
    if (game.walls.has(key)) return "player";
    return null;
  }

  function toggleWall(game, index, direction) {
    const key = wallKey(game.puzzle, index, direction);
    if (!key) return false;
    if (automaticWallKeys(game).has(key)) return false;
    if (game.walls.has(key)) game.walls.delete(key);
    else game.walls.add(key);
    return true;
  }

  function roomForCell(game, index) {
    return game.rooms.find((room) => room.cells.includes(index)) || null;
  }

  function roomById(game, id) {
    return game.rooms.find((room) => room.id === id) || null;
  }

  function clueAt(game, index) {
    return game.puzzle.clues.find(
      (clue) => cellIndex(game.puzzle, clue.row, clue.col) === index,
    ) || null;
  }

  function paintCell(game, index, color) {
    const cell = game.cells[index];
    if (!cell || cell.fixed || !game.puzzle.colors.includes(color)) return false;
    if (cell.color === color) return false;
    cell.color = color;
    return true;
  }

  function eraseCell(game, index) {
    const cell = game.cells[index];
    if (!cell || cell.fixed || cell.color === null) return false;
    cell.color = null;
    return true;
  }

  function editRoomCell(game, roomId, index, operation) {
    const room = roomById(game, roomId);
    if (!room || !game.cells[index]) return { changed: false, conflict: null };
    if (operation === "remove") {
      if (index === room.clueIndex || !room.cells.includes(index)) {
        return { changed: false, conflict: index === room.clueIndex ? "clue" : null };
      }
      room.cells = room.cells.filter((item) => item !== index);
      if (room.temporary && room.cells.length === 0) {
        game.rooms = game.rooms.filter((item) => item.id !== room.id);
        if (game.focusedRoomId === room.id) game.focusedRoomId = null;
        return { changed: true, conflict: null, removedRoom: true };
      }
      return { changed: true, conflict: null, removedRoom: false };
    }
    if (operation !== "add") return { changed: false, conflict: null };
    const assigned = roomForCell(game, index);
    if (assigned && assigned.id !== room.id) {
      return { changed: false, conflict: "assigned", roomId: assigned.id };
    }
    const otherClue = clueAt(game, index);
    if (otherClue && index !== room.clueIndex) {
      return { changed: false, conflict: "clue" };
    }
    if (room.cells.includes(index)) return { changed: false, conflict: null };
    room.cells = [...room.cells, index].sort((left, right) => left - right);
    return { changed: true, conflict: null };
  }

  function isConnected(puzzle, indices) {
    if (!indices.length) return false;
    const allowed = new Set(indices);
    const visited = new Set([indices[0]]);
    const queue = [indices[0]];
    while (queue.length) {
      const current = queue.shift();
      for (const next of orthogonalNeighbors(puzzle, current)) {
        if (allowed.has(next) && !visited.has(next)) {
          visited.add(next);
          queue.push(next);
        }
      }
    }
    return visited.size === allowed.size;
  }

  function roomProgress(game, room) {
    const colors = [...new Set(room.cells.map((index) => game.cells[index].color).filter(Boolean))];
    const connected = isConnected(game.puzzle, room.cells);
    return {
      count: room.cells.length,
      target: room.temporary ? null : room.clueValue,
      connected,
      color: colors.length === 1 ? colors[0] : null,
      mixedColors: colors.length > 1,
      complete: !room.temporary && room.cells.length === room.clueValue && connected,
    };
  }

  function automaticWallKeys(game) {
    const keys = new Set();
    const { puzzle } = game;
    for (const room of game.rooms) {
      const progress = roomProgress(game, room);
      if (!progress.complete || progress.mixedColors) continue;
      const roomCells = new Set(room.cells);
      for (const index of room.cells) {
        const { row, col } = coordinates(puzzle, index);
        const edges = [
          ["right", col < puzzle.cols ? index + 1 : null],
          ["bottom", row < puzzle.rows ? index + puzzle.cols : null],
          ["left", col > 1 ? index - 1 : null],
          ["top", row > 1 ? index - puzzle.cols : null],
        ];
        for (const [direction, neighbor] of edges) {
          if (neighbor === null || roomCells.has(neighbor)) continue;
          const key = wallKey(puzzle, index, direction);
          if (key) keys.add(key);
        }
      }
    }
    return keys;
  }

  function syncEligibleRooms(game) {
    if (!game.syncCompleteRooms) return [];
    const synced = [];
    for (const room of game.rooms) {
      const progress = roomProgress(game, room);
      if (!progress.complete || !progress.color || progress.mixedColors) continue;
      const changed = [];
      for (const index of room.cells) {
        const cell = game.cells[index];
        if (!cell.fixed && cell.color !== progress.color) {
          cell.color = progress.color;
          changed.push(index);
        }
      }
      if (changed.length) synced.push({ roomId: room.id, color: progress.color, indices: changed });
    }
    return synced;
  }

  function connectedComponents(game) {
    const visited = new Set();
    const components = [];
    game.cells.forEach((cell, start) => {
      if (!cell.color || visited.has(start)) return;
      const indices = [];
      const queue = [start];
      visited.add(start);
      while (queue.length) {
        const current = queue.shift();
        indices.push(current);
        for (const next of orthogonalNeighbors(game.puzzle, current)) {
          if (!visited.has(next) && game.cells[next].color === cell.color) {
            visited.add(next);
            queue.push(next);
          }
        }
      }
      components.push({ color: cell.color, indices });
    });
    return components;
  }

  function evaluateGame(game) {
    const ruleIssues = [];
    const memoIssues = [];
    const cellIssues = new Set();
    const complete = game.cells.every((cell) => cell.color);
    const components = connectedComponents(game);
    for (const component of components) {
      const clues = component.indices.map((index) => clueAt(game, index)).filter(Boolean);
      const canGrow = component.indices.some((index) => (
        orthogonalNeighbors(game.puzzle, index).some((next) => game.cells[next].color === null)
      ));
      if (clues.length > 1) {
        ruleIssues.push({ type: "multiple-clues", indices: component.indices });
        component.indices.forEach((index) => cellIssues.add(index));
      } else if (clues.length === 1 && component.indices.length > clues[0].value) {
        ruleIssues.push({ type: "oversize", indices: component.indices });
        component.indices.forEach((index) => cellIssues.add(index));
      } else if ((complete || !canGrow) && (clues.length !== 1 || component.indices.length !== clues[0].value)) {
        ruleIssues.push({ type: clues.length ? "wrong-size" : "missing-clue", indices: component.indices });
        component.indices.forEach((index) => cellIssues.add(index));
      }
    }

    const roomIssues = new Map();
    for (const room of game.rooms) {
      const progress = roomProgress(game, room);
      const reasons = [];
      if (progress.target !== null && progress.count > progress.target) reasons.push("too-many-cells");
      if (progress.mixedColors) reasons.push("mixed-colors");
      if (reasons.length) {
        roomIssues.set(room.id, reasons);
        room.cells.forEach((index) => cellIssues.add(index));
      }
    }

    for (let index = 0; index < game.cells.length; index += 1) {
      const leftRoom = roomForCell(game, index);
      const color = game.cells[index].color;
      if (!leftRoom || !color) continue;
      for (const next of orthogonalNeighbors(game.puzzle, index)) {
        if (next <= index || game.cells[next].color !== color) continue;
        const rightRoom = roomForCell(game, next);
        if (rightRoom && rightRoom.id !== leftRoom.id) {
          memoIssues.push({ type: "memo-touch", indices: [index, next] });
          cellIssues.add(index);
          cellIssues.add(next);
        }
      }
    }

    const filled = game.cells.filter((cell) => cell.color).length;
    return {
      filled,
      total: game.cells.length,
      complete,
      solved: complete && ruleIssues.length === 0,
      issues: [...ruleIssues, ...memoIssues],
      ruleIssues,
      memoIssues,
      cellIssues,
      roomIssues,
      components,
    };
  }

  function undo(game) {
    const previous = game.history.pop();
    if (!previous) return false;
    game.future.push(cloneState(game));
    restoreState(game, previous);
    return true;
  }

  function redo(game) {
    const next = game.future.pop();
    if (!next) return false;
    game.history.push(cloneState(game));
    restoreState(game, next);
    return true;
  }

  function reset(game) {
    const before = cloneState(game);
    const state = initialState(game.puzzle);
    game.cells = state.cells;
    game.rooms = state.rooms;
    game.walls = state.walls;
    game.nextTemporaryRoomId = state.nextTemporaryRoomId;
    game.focusedRoomId = null;
    if (sameState(game, before)) return false;
    game.history.push(before);
    game.future = [];
    return true;
  }

  function setSyncCompleteRooms(game, enabled) {
    const before = cloneState(game);
    game.syncCompleteRooms = Boolean(enabled);
    const synced = syncEligibleRooms(game);
    if (sameState(game, before)) return { changed: false, synced: [] };
    game.history.push(before);
    game.future = [];
    return { changed: true, synced };
  }

  function serializeProgress(game) {
    const clueRooms = game.rooms.filter((room) => !room.temporary);
    const temporaryRooms = game.rooms
      .filter((room) => room.temporary)
      .map((room) => ({ id: room.id, cells: [...room.cells] }));
    return {
      version: 1,
      colors: game.cells.map((cell) => cell.color),
      rooms: clueRooms.map((room) => [...room.cells]),
      temporaryRooms,
      nextTemporaryRoomId: game.nextTemporaryRoomId,
      walls: [...game.walls].sort(),
      syncCompleteRooms: game.syncCompleteRooms,
    };
  }

  function restoreProgress(game, progress) {
    const initial = initialState(game.puzzle);
    if (!progress || progress.version !== 1 || !Array.isArray(progress.colors)
      || progress.colors.length !== game.cells.length || !Array.isArray(progress.rooms)
      || progress.rooms.length !== initial.rooms.length) return false;

    const cells = initial.cells.map((cell, index) => ({
      ...cell,
      color: cell.fixed
        ? cell.color
        : (game.puzzle.colors.includes(progress.colors[index]) ? progress.colors[index] : null),
    }));
    const used = new Set();
    const rooms = initial.rooms.map((room, roomIndex) => {
      const candidates = Array.isArray(progress.rooms[roomIndex]) ? progress.rooms[roomIndex] : [];
      const valid = [];
      for (const index of candidates) {
        if (!Number.isInteger(index) || index < 0 || index >= cells.length || used.has(index)) continue;
        const clue = game.puzzle.clues.find(
          (item) => cellIndex(game.puzzle, item.row, item.col) === index,
        );
        if (clue && index !== room.clueIndex) continue;
        used.add(index);
        valid.push(index);
      }
      if (!valid.includes(room.clueIndex)) valid.push(room.clueIndex);
      used.add(room.clueIndex);
      return { ...room, cells: valid.sort((left, right) => left - right) };
    });
    let maxTemporaryRoomId = 0;
    const temporaryRooms = [];
    const savedTemporaryRooms = Array.isArray(progress.temporaryRooms) ? progress.temporaryRooms : [];
    for (const saved of savedTemporaryRooms) {
      const match = saved && typeof saved.id === "string" ? /^temp-(\d+)$/.exec(saved.id) : null;
      if (!match || !Array.isArray(saved.cells)) continue;
      const number = Number(match[1]);
      if (!Number.isInteger(number) || number < 1 || temporaryRooms.some((room) => room.id === saved.id)) continue;
      const valid = [];
      for (const index of saved.cells) {
        if (!Number.isInteger(index) || index < 0 || index >= cells.length || used.has(index)) continue;
        const clue = game.puzzle.clues.find(
          (item) => cellIndex(game.puzzle, item.row, item.col) === index,
        );
        if (clue) continue;
        used.add(index);
        valid.push(index);
      }
      if (!valid.length) continue;
      maxTemporaryRoomId = Math.max(maxTemporaryRoomId, number);
      temporaryRooms.push({
        id: saved.id,
        label: roomLabel(game.puzzle.clues.length + number - 1),
        clueIndex: null,
        clueValue: null,
        temporary: true,
        cells: valid.sort((left, right) => left - right),
      });
    }
    const allowedWalls = validWallKeys(game.puzzle);
    const walls = new Set(
      (Array.isArray(progress.walls) ? progress.walls : [])
        .filter((key) => typeof key === "string" && allowedWalls.has(key)),
    );
    game.cells = cells;
    game.rooms = [...rooms, ...temporaryRooms];
    game.walls = walls;
    const savedNextId = Number.isInteger(progress.nextTemporaryRoomId)
      ? progress.nextTemporaryRoomId
      : 1;
    game.nextTemporaryRoomId = Math.max(1, savedNextId, maxTemporaryRoomId + 1);
    game.syncCompleteRooms = progress.syncCompleteRooms !== false;
    return true;
  }

  return {
    createGame,
    startEdit,
    finishEdit,
    createTemporaryRoom,
    wallKey,
    hasWall,
    wallSource,
    automaticWallKeys,
    toggleWall,
    paintCell,
    eraseCell,
    editRoomCell,
    roomForCell,
    roomById,
    roomProgress,
    evaluateGame,
    undo,
    redo,
    reset,
    setSyncCompleteRooms,
    serializeProgress,
    restoreProgress,
    cellIndex,
    coordinates,
    orthogonalNeighbors,
    isConnected,
  };
});
