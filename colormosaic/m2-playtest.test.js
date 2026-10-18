"use strict";

const assert = require("node:assert/strict");
const Model = require("./model.js");
const legacy = require("./puzzles.js").puzzles;
const { puzzles } = require("./m2-puzzles.js");

assert.equal(puzzles.length, 10);
assert.equal(new Set([...legacy, ...puzzles].map((puzzle) => puzzle.id)).size, legacy.length + 10);
assert.deepEqual(
  ["BEGINNER", "INTERMEDIATE", "ADVANCED"].map((tier) => puzzles.filter((p) => p.solver_tier === tier).length),
  [3, 3, 4],
);
for (const puzzle of puzzles) {
  assert.equal(puzzle.rows, 7);
  assert.equal(puzzle.cols, 7);
  assert.deepEqual(puzzle.colors, ["R", "G", "B", "Y"]);
  assert.deepEqual(puzzle.extra_rules, ["row_col_all_colors"]);
  assert.equal(puzzle.collection, "m2-20261018");
  assert.equal(puzzle.playtest, true);
  assert.equal(puzzle.generation.quality_grade, "M2");
  assert.equal(puzzle.generation.independently_validated, true);
  assert.match(puzzle.generation.source_entry_sha256, /^[0-9a-f]{64}$/);
  assert.ok(!Object.hasOwn(puzzle, "solution"), "完成解は公開データに含めない");
  assert.ok(!JSON.stringify(puzzle).includes("alternative_solution"), "別解証明書は取り込まない");
  for (const field of ["fixed", "clues"]) {
    const entries = puzzle[field];
    assert.ok(entries.length > 0);
    assert.equal(new Set(entries.map((cell) => `${cell.row},${cell.col}`)).size, entries.length);
    assert.ok(entries.every((cell) => cell.row >= 1 && cell.row <= 7 && cell.col >= 1 && cell.col <= 7));
  }
  const game = Model.createGame(puzzle, { autoFill: false });
  assert.equal(game.cells.length, 49);
  assert.equal(game.cells.filter((cell) => cell.fixed).length, puzzle.fixed.length);
  assert.equal(Model.evaluateGame(game).solved, false);
  const editable = game.cells.findIndex((cell) => !cell.fixed);
  Model.applyAction(game, { type: "cycle", index: editable, color: "Y" });
  assert.equal(game.cells[editable].color, "Y");
  assert.equal(Model.undo(game), true);
  assert.equal(game.cells[editable].color, null);
  assert.equal(Model.redo(game), true);
  const restored = Model.createGame(puzzle, { progress: Model.serializeProgress(game) });
  assert.deepEqual(restored.cells, game.cells, `${puzzle.id}: 保存・復元`);
}

// Keep both sparse and dense givens, and distinct clue-value distributions.
assert.ok(Math.min(...puzzles.map((p) => p.fixed.length)) <= 9);
assert.ok(Math.max(...puzzles.map((p) => p.fixed.length)) >= 18);
assert.ok(Math.max(...puzzles.map((p) => p.playtest_profile.blanks)) >= 25);
assert.ok(puzzles.some((p) => p.clues.some((clue) => clue.value === 5)));
assert.ok(puzzles.some((p) => p.clues.filter((clue) => clue.value === 0).length >= 10));
console.log("M2 playtest data, input, history and progress tests passed.");
