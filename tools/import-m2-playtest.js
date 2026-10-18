"use strict";

// node tools/import-m2-playtest.js ../ColorMosaic [--check]
// Read audited source entries; distribute only playable givens and provenance.
const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");
const Model = require("../colormosaic/model.js");

const sourceRoot = path.resolve(process.argv[2] || "../ColorMosaic");
const checkOnly = process.argv.includes("--check");
const sourceCommit = "5e2d79625a73abb8a16a5b9a55e553976e29fd0c";
const selection = [
  ["beginner-20261015-t1", "BF804F80C210", "色少なめ・0多め", "固定色9マス、0が10個。色の少ない配置を試せます。"],
  ["beginner-20261015-t1", "3726CAFB010B", "空白多め", "数字17マス、空白25マス。手がかりの少ない見た目を試せます。"],
  ["beginner-20261015-t1", "B39E2DA99E31", "2が多い配置", "数字2が12個、0が2個。0の多い盤面と比べてみてください。"],
  ["intermediate-20261015-t2", "21819507331B", "固定色多め", "固定色18マス、空白16マス。色の手がかりが多い中級です。"],
  ["intermediate-20261015-t2", "185143896363", "色付き数字多め", "色付き数字11マス、数字だけ12マス。色と数字の重なりが多い中級です。"],
  ["intermediate-20261015-t2", "8147DDB43CE7", "数字だけ多め", "色付き数字6マス、数字だけ17マス。中級の前2面との違いを試せます。"],
  ["advanced-20261015-t3", "508D29ACEAA2", "数字が密な配置", "数字26マス、空白16マス。数字の密な上級です。"],
  ["advanced-20261015-t6x128", "ACD5B6489FC2", "色と数字の重なり", "固定色18マスのうち13マスが数字付き。重なりの多い上級です。"],
  ["advanced-20261015-t6x128", "8A7E6B5C2C56", "大きな数字・空白多め", "数字5を含み、空白23マス。低い数字の多い盤面と比べてみてください。"],
  ["advanced-20261015-t6x128", "8B0ECFE6DE45", "0と1が中心", "数字25マスのうち0が10個、1が12個。小さな数字が中心の上級です。"],
];

function sorted(value) {
  if (Array.isArray(value)) return value.map(sorted);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.keys(value).sort().map((key) => [key, sorted(value[key])]));
  }
  return value;
}

function digest(value) {
  return crypto.createHash("sha256").update(JSON.stringify(sorted(value))).digest("hex");
}

function read(relative) {
  return JSON.parse(fs.readFileSync(path.join(sourceRoot, relative), "utf8"));
}

const puzzles = selection.map(([run, suffix, label, note], index) => {
  const directory = `yield-experiment/web-container/web-extra-tierkeep-7x7-4c-${run}`;
  const source = `${directory}/selected.json`;
  const auditSource = `${directory}/selection-audit.json`;
  const selected = read(source);
  const audit = read(auditSource);
  assert.equal(audit.audit_complete, true);
  assert.deepEqual(audit.errors, []);
  assert.equal(audit.independently_validated_count, selected.puzzles.length);
  const entry = selected.puzzles.find((item) => item.id.endsWith(`-${suffix}`));
  assert.ok(entry, suffix);
  const validation = audit.validations.find((item) => item.id === entry.id);
  assert.equal(validation?.grade, "M2");
  assert.equal(validation.independently_validated, true);
  assert.equal(validation.entry_sha256, digest(entry), `${suffix}: saved audit entry hash`);
  assert.equal(entry.generation.minimality_quality.grade, "M2");
  assert.equal(entry.validation.app_eligible, true);
  assert.equal(entry.generation.canonical_signature_sha256, validation.puzzle_signature);
  assert.equal(entry.generation.canonical_solution_signature_sha256, validation.solution_signature);

  // Verify completion using the source solution, without copying it to GamePlay.
  const game = Model.createGame(entry, { autoFill: false });
  entry.solution.flat().forEach((color, cellIndex) => {
    Model.applyAction(game, { type: "paint", index: cellIndex, color, direct: true });
  });
  assert.equal(Model.evaluateGame(game).solved, true, `${suffix}: GamePlay completion`);

  const fixed = new Set(entry.fixed.map((cell) => `${cell.row},${cell.col}`));
  const coloredNumbers = entry.clues.filter((cell) => fixed.has(`${cell.row},${cell.col}`)).length;
  const profile = {
    colored_numbers: coloredNumbers,
    colors_only: entry.fixed.length - coloredNumbers,
    numbers_only: entry.clues.length - coloredNumbers,
    blanks: entry.rows * entry.cols - entry.fixed.length - entry.clues.length + coloredNumbers,
  };
  const fields = ["id", "solver_tier", "rows", "cols", "colors", "fixed", "clues", "extra", "extra_rules", "extra_rule_label"];
  const puzzle = Object.fromEntries(fields.map((key) => [key, entry[key]]));
  const difficulty = { BEGINNER: "初級", INTERMEDIATE: "中級", ADVANCED: "上級" }[entry.solver_tier];
  return {
    ...puzzle,
    title: `M2 ${String(index + 1).padStart(2, "0")}｜${label}`,
    difficulty,
    playtest: true,
    collection: "m2-20261018",
    playtest_note: note,
    first_hint: "各行・各列に赤・緑・青・黄が最低1マスずつ必要です。数字の条件とあわせて候補を調べましょう。",
    generation: {
      source_repository: "ColorMosaic",
      source_commit: sourceCommit,
      source,
      source_audit: auditSource,
      source_entry_sha256: validation.entry_sha256,
      seed: entry.generation.seed,
      canonical_signature_sha256: validation.puzzle_signature,
      quality_grade: "M2",
      independently_validated: true,
    },
    playtest_profile: profile,
  };
});
assert.equal(new Set(puzzles.map((puzzle) => puzzle.id)).size, 10);
const data = { version: "m2-playtest-20261018", puzzles };
const output = `(function (root) {\n  "use strict";\n\n  // Generated by tools/import-m2-playtest.js; no solutions or witnesses.\n  const data = ${JSON.stringify(data, null, 2)};\n\n  root.COLOR_MOSAIC_M2_PLAYTEST = data;\n  if (typeof module === "object" && module.exports) module.exports = data;\n})(typeof globalThis !== "undefined" ? globalThis : this);\n`;
const target = path.join(__dirname, "../colormosaic/m2-puzzles.js");
if (checkOnly) {
  assert.equal(fs.readFileSync(target, "utf8").replace(/\r\n/g, "\n"), output);
} else {
  fs.writeFileSync(target, output);
}
console.log(`M2 playtest: 10 audited entries ${checkOnly ? "verified" : "imported"}; all 10 solutions accepted by GamePlay.`);
