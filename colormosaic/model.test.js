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
  assert.equal(game.cells[0].color, "R", "1回目のタップは着色");
  assert.equal(game.cells[0].tentative, false);
  assert.deepEqual(game.cells[0].exclusions, []);

  Model.applyAction(game, { type: "cycle", index: 0, color: "R" });
  assert.equal(game.cells[0].color, null, "2回目のタップはX");
  assert.deepEqual(game.cells[0].exclusions, ["R"]);

  Model.applyAction(game, { type: "cycle", index: 0, color: "R" });
  assert.equal(game.cells[0].color, null, "3回目のタップはなし");
  assert.deepEqual(game.cells[0].exclusions, []);
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
  assert.equal(game.cells[0].color, "B", "直接着色で仮置き");
  assert.equal(game.cells[0].tentative, true, "仮置き状態を保持");

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
  assert.equal(game.cells[0].tentative, false, "確定着色で仮置きを確定");
  assert.equal(Model.evaluateGame(game).filled, 1);

  assert.equal(Model.undo(game), true);
  assert.equal(game.cells[0].tentative, true, "Undoで仮置き状態も復元");
}

{
  const game = Model.createGame(puzzle(), { autoFill: false });
  Model.applyAction(game, {
    type: "paint",
    index: 0,
    color: "R",
    tentative: false,
    direct: true,
  });
  assert.equal(game.cells[0].color, "R", "長押し相当の直接着色");

  Model.applyAction(game, {
    type: "cycle",
    index: 0,
    color: "R",
    tentative: false,
  });
  assert.equal(game.cells[0].color, null, "直接着色後の通常タップでX");
  assert.deepEqual(game.cells[0].exclusions, ["R"]);
}

{
  const game = Model.createGame(puzzle(), { autoFill: false });
  Model.applyAction(game, {
    type: "exclude",
    index: 0,
    color: "R",
    tentative: true,
  });
  assert.equal(game.cells[0].color, null, "仮置き長押しは着色しない");
  assert.deepEqual(game.cells[0].exclusions, [], "仮置き長押しは確定Xを変更しない");
  assert.deepEqual(game.cells[0].tentativeExclusions, ["R"], "仮置き長押しは直接仮置きX");

  Model.applyAction(game, {
    type: "cycle",
    index: 0,
    color: "R",
    tentative: true,
  });
  assert.equal(game.cells[0].color, null, "仮置き長押しX後のタップはなし");
  assert.deepEqual(game.cells[0].exclusions, []);
  assert.deepEqual(game.cells[0].tentativeExclusions, []);
}

{
  const game = Model.createGame(puzzle(), { autoFill: false });
  Model.applyAction(game, {
    type: "exclude",
    index: 0,
    color: "R",
    tentative: false,
  });
  assert.deepEqual(game.cells[0].exclusions, ["R"], "通常長押しは直接確定X");
  assert.deepEqual(game.cells[0].tentativeExclusions, []);

  Model.applyAction(game, {
    type: "cycle",
    index: 0,
    color: "R",
    tentative: false,
  });
  assert.equal(game.cells[0].color, null, "通常長押しX後のタップはなし");
  assert.deepEqual(game.cells[0].exclusions, []);
}

{
  const game = Model.createGame(puzzle(), { autoFill: true });
  Model.applyAction(game, {
    type: "cycle",
    index: 0,
    color: "R",
  });
  const result = Model.applyAction(game, {
    type: "cycle",
    index: 0,
    color: "R",
  });
  assert.equal(result.autoFilled, "B", "着色からXへ進んだ場合も自動着色を適用");
  assert.equal(game.cells[0].color, "B");
  assert.deepEqual(game.cells[0].exclusions, ["R"]);
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
  assert.deepEqual(game.cells[0].tentativeExclusions, []);

  Model.applyAction(game, {
    type: "cycle",
    index: 0,
    color: "R",
    tentative: true,
  });
  assert.equal(game.cells[0].color, null, "仮置きモードの2回目はX");
  assert.deepEqual(game.cells[0].exclusions, [], "仮置きXは確定Xへ入れない");
  assert.deepEqual(game.cells[0].tentativeExclusions, ["R"]);

  Model.applyAction(game, {
    type: "cycle",
    index: 0,
    color: "R",
    tentative: true,
  });
  assert.equal(game.cells[0].color, null, "仮置きモードの3回目は消去");
  assert.deepEqual(game.cells[0].tentativeExclusions, []);

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
  const game = Model.createGame(puzzle({
    rows: 1,
    cols: 3,
    colors: ["R", "G", "B"],
  }), { autoFill: false });
  Model.applyAction(game, {
    type: "cycle",
    index: 0,
    color: "R",
    tentative: true,
  });
  Model.applyAction(game, {
    type: "cycle",
    index: 1,
    color: "G",
    tentative: true,
  });
  Model.applyAction(game, {
    type: "cycle",
    index: 1,
    color: "G",
    tentative: true,
  });
  Model.applyAction(game, {
    type: "exclude",
    index: 2,
    color: "B",
    tentative: true,
  });
  const evaluation = Model.evaluateGame(game);
  assert.equal(evaluation.tentativeColors, 1);
  assert.equal(evaluation.tentativeExclusions, 2);
  assert.equal(evaluation.tentative, 3, "仮置き色とXを合算");
  const historyBefore = game.history.length;

  const result = Model.commitTentative(game);
  assert.equal(result.changed, true);
  assert.equal(result.committed, 3);
  assert.equal(game.cells[0].color, "R");
  assert.equal(game.cells[0].tentative, false, "仮置き色を確定");
  assert.deepEqual(game.cells[1].exclusions, ["G"], "仮置きXを確定");
  assert.deepEqual(game.cells[2].exclusions, ["B"]);
  assert.deepEqual(game.cells[1].tentativeExclusions, []);
  assert.equal(game.history.length, historyBefore + 1, "全確定を一手として保存");

  assert.equal(Model.undo(game), true);
  assert.equal(game.cells[0].tentative, true, "Undoで仮置き色へ戻る");
  assert.deepEqual(game.cells[1].exclusions, []);
  assert.deepEqual(game.cells[1].tentativeExclusions, ["G"], "Undoで仮置きXへ戻る");
  assert.equal(Model.redo(game), true);
  assert.deepEqual(game.cells[1].exclusions, ["G"], "Redoで再び確定");
}

{
  const game = Model.createGame(puzzle({
    rows: 1,
    cols: 2,
    colors: ["R", "G", "B"],
  }), { autoFill: false });
  Model.applyAction(game, {
    type: "cycle",
    index: 0,
    color: "R",
    tentative: true,
  });
  Model.applyAction(game, {
    type: "toggle-x",
    index: 1,
    color: "R",
  });
  Model.applyAction(game, {
    type: "cycle",
    index: 1,
    color: "G",
    tentative: true,
  });
  const historyBefore = game.history.length;

  const result = Model.discardTentative(game);
  assert.equal(result.changed, true);
  assert.equal(result.discarded, 2);
  assert.equal(game.cells[0].color, null, "仮置き色を消去");
  assert.equal(game.cells[1].color, null);
  assert.deepEqual(game.cells[1].exclusions, ["R"], "確定Xは全消去で残す");
  assert.equal(game.history.length, historyBefore + 1, "全消去を一手として保存");

  assert.equal(Model.undo(game), true);
  assert.equal(game.cells[0].tentative, true, "Undoで仮置き色を復元");
  assert.equal(game.cells[1].color, "G");
  assert.equal(game.cells[1].tentative, true);
  assert.deepEqual(game.cells[1].exclusions, ["R"], "Undo後も確定Xを維持");
}

{
  const game = Model.createGame(puzzle({
    rows: 1,
    cols: 1,
    colors: ["R", "G", "B"],
  }), { autoFill: true });
  for (const color of ["R", "G"]) {
    Model.applyAction(game, {
      type: "cycle",
      index: 0,
      color,
      tentative: true,
    });
    Model.applyAction(game, {
      type: "cycle",
      index: 0,
      color,
      tentative: true,
    });
  }
  assert.equal(game.cells[0].color, null, "仮置きXだけでは自動着色しない");
  assert.deepEqual(game.cells[0].tentativeExclusions, ["R", "G"]);

  const result = Model.commitTentative(game);
  assert.deepEqual(result.autoFilled, [{ index: 0, color: "B" }]);
  assert.equal(game.cells[0].color, "B", "全確定後に自動着色");
  assert.equal(game.cells[0].tentative, false);
}

{
  const game = Model.createGame(puzzle(), { autoFill: false });
  Model.applyAction(game, { type: "cycle", index: 0, color: "R" });
  assert.equal(game.cells[0].color, "R");

  assert.equal(Model.undo(game), true);
  assert.equal(game.cells[0].color, null, "Undoで着色前へ戻る");
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
    rows: 1,
    cols: 3,
    colors: ["R", "G", "B"],
  }), { autoFill: false });
  Model.applyAction(game, { type: "toggle-x", index: 0, color: "R" });
  Model.applyAction(game, { type: "toggle-x", index: 0, color: "G" });
  Model.applyAction(game, { type: "toggle-x", index: 1, color: "R" });
  const historyBefore = game.history.length;

  const filled = Model.fillForcedCells(game);
  assert.deepEqual(filled, [{ index: 0, color: "B" }]);
  assert.equal(game.cells[0].color, "B", "n−1色のXがあるマスを残り一色で確定");
  assert.equal(game.cells[0].tentative, false, "一括確定は確定色");
  assert.equal(game.cells[1].color, null, "Xがn−1色未満のマスは変更しない");
  assert.equal(game.autoFill, false, "一括確定で自動着色設定を変更しない");
  assert.equal(game.history.length, historyBefore + 1, "一括確定を一手として履歴へ保存");

  assert.equal(Model.undo(game), true);
  assert.equal(game.cells[0].color, null, "一括確定を一度のUndoで戻す");
  assert.deepEqual(game.cells[0].exclusions, ["R", "G"]);
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

{
  const game = Model.createGame(puzzle({
    rows: 3,
    cols: 3,
    colors: ["R", "G", "B"],
    fixed: [{ row: 2, col: 2, color: "R" }],
    clues: [{ row: 2, col: 2, value: 0 }],
  }), { autoFill: true });
  const result = Model.excludeAroundClue(game, 4, { tentative: true });
  assert.equal(result.tentative, true);
  assert.equal(result.excluded, 8);
  assert.equal(result.autoFilled.length, 0, "一括仮置きXでは自動着色しない");
  assert.deepEqual(game.cells[0].exclusions, []);
  assert.deepEqual(game.cells[0].tentativeExclusions, ["R"]);
}

console.log("ColorMosaic mobile input model tests passed.");
