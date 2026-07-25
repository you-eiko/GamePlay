"use strict";

const assert = require("node:assert/strict");
const Model = require("./model.js");

function puzzle(overrides = {}) {
  return {
    id: "mobile-input-test",
    rows: 1,
    cols: 2,
    colors: ["R", "B"],
    fixed: [],
    clues: [],
    ...overrides,
  };
}

{
  const game = Model.createGame(puzzle(), { autoFill: false });
  Model.applyAction(game, { type: "cycle", index: 0, color: "R" });
  assert.deepEqual(game.cells[0].exclusions, ["R"], "1回目のタップはX");

  Model.applyAction(game, { type: "cycle", index: 0, color: "R" });
  assert.equal(game.cells[0].color, "R", "2回目のタップは着色");
  assert.equal(game.cells[0].tentative, false);
  assert.deepEqual(game.cells[0].exclusions, []);

  Model.applyAction(game, { type: "cycle", index: 0, color: "R" });
  assert.equal(game.cells[0].color, null, "3回目のタップはなし");
}

{
  const game = Model.createGame(puzzle(), { autoFill: false });
  Model.applyAction(game, {
    type: "paint",
    index: 0,
    color: "B",
    tentative: true,
    direct: true,
  });
  assert.equal(game.cells[0].color, "B", "長押しは直接着色");
  assert.equal(game.cells[0].tentative, true, "仮置きモードを保持");

  const tentativeEvaluation = Model.evaluateGame(game);
  assert.equal(tentativeEvaluation.filled, 0, "仮置きは完成マスへ数えない");
  assert.equal(tentativeEvaluation.tentative, 1);

  Model.applyAction(game, {
    type: "paint",
    index: 0,
    color: "B",
    tentative: false,
    direct: true,
  });
  assert.equal(game.cells[0].tentative, false, "通常長押しで仮置きを確定");
  assert.equal(Model.evaluateGame(game).filled, 1);

  assert.equal(Model.undo(game), true);
  assert.equal(game.cells[0].tentative, true, "Undoで仮置き状態も復元");
}

{
  const game = Model.createGame(puzzle({
    rows: 1,
    cols: 1,
    clues: [{ row: 1, col: 1, value: 0 }],
  }), { autoFill: false });
  Model.applyAction(game, {
    type: "cycle",
    index: 0,
    color: "R",
    tentative: true,
  });
  assert.equal(game.cells[0].color, "R", "仮置きモードの1回目は仮置き");
  assert.equal(game.cells[0].tentative, true);
  assert.deepEqual(game.cells[0].exclusions, [], "仮置きモードではXを経由しない");

  Model.applyAction(game, {
    type: "cycle",
    index: 0,
    color: "R",
    tentative: true,
  });
  assert.equal(game.cells[0].color, null, "仮置きモードの2回目は消去");

  Model.applyAction(game, {
    type: "cycle",
    index: 0,
    color: "R",
    tentative: true,
  });
  const tentativeEvaluation = Model.evaluateGame(game);
  assert.equal(tentativeEvaluation.complete, false, "仮置きだけでは完成しない");
  assert.equal(tentativeEvaluation.clueStates.get(0).status, "satisfied", "仮置きは数字検討へ反映");
}

{
  const game = Model.createGame(puzzle(), { autoFill: false });
  Model.applyAction(game, { type: "cycle", index: 0, color: "R" });
  Model.applyAction(game, { type: "cycle", index: 0, color: "R" });
  assert.equal(game.cells[0].color, "R");

  assert.equal(Model.undo(game), true);
  assert.deepEqual(game.cells[0].exclusions, ["R"], "Undoで直前の状態へ戻る");
  assert.equal(game.future.length, 1);

  assert.equal(Model.redo(game), true);
  assert.equal(game.cells[0].color, "R", "Redoで取り消した操作を復元");
  assert.deepEqual(game.cells[0].exclusions, []);

  assert.equal(Model.undo(game), true);
  Model.applyAction(game, { type: "cycle", index: 1, color: "B" });
  assert.equal(Model.redo(game), false, "Undo後の新しい操作でRedo履歴を破棄");
}

{
  const game = Model.createGame(puzzle(), { autoFill: true });
  const result = Model.applyAction(game, { type: "toggle-x", index: 0, color: "R" });
  assert.equal(result.autoFilled, "B", "従来の残り一色自動着色を維持");
  assert.equal(game.cells[0].color, "B");
  assert.equal(game.cells[0].tentative, false, "自動着色は確定色");
}

{
  const game = Model.createGame(puzzle({
    rows: 3,
    cols: 3,
    colors: ["R", "G", "B"],
    fixed: [{ row: 2, col: 2, color: "R" }],
    clues: [{ row: 2, col: 2, value: 0 }],
  }), { autoFill: false });
  Model.applyAction(game, {
    type: "paint",
    index: 0,
    color: "B",
    direct: true,
  });
  const historyBefore = game.history.length;

  const result = Model.excludeAroundClue(game, 4);
  assert.equal(result.changed, true);
  assert.equal(result.color, "R", "長押しした数字マス自身の色を使う");
  assert.equal(result.excluded, 7, "着色済みマスを除く周囲へまとめてX");
  assert.deepEqual(game.cells[0].exclusions, [], "着色済みの周囲マスは変更しない");
  assert.deepEqual(game.cells[1].exclusions, ["R"]);
  assert.equal(game.history.length, historyBefore + 1, "一括操作を一手として履歴へ保存");

  assert.equal(Model.undo(game), true);
  assert.equal(game.cells[0].color, "B", "Undo後も一括操作前の着色を維持");
  assert.deepEqual(game.cells[1].exclusions, [], "Undoで周囲のXをまとめて戻す");
}

console.log("ColorMosaic mobile input model tests passed.");
