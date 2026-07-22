(function (root) {
  "use strict";

  const data = {
    puzzles: [
      {
        id: "P4",
        title: "入門・同色分離",
        rows: 4,
        cols: 4,
        colors: ["R", "G", "B", "Y"],
        clues: [
          { row: 3, col: 3, value: 2 },
          { row: 4, col: 4, value: 2 },
          { row: 2, col: 3, value: 2 },
          { row: 3, col: 1, value: 5 },
          { row: 1, col: 3, value: 2 },
          { row: 4, col: 1, value: 3 },
        ],
        fixed: [
          { row: 1, col: 1, color: "Y" },
          { row: 1, col: 3, color: "G" },
          { row: 2, col: 3, color: "B" },
          { row: 3, col: 3, color: "G" },
          { row: 4, col: 4, color: "B" },
        ],
        description: "同じ色の数字2を、別々の部屋として閉じる小問です。",
        first_hint: "緑の2どうし、青の2どうしは同色でも別室です。数字2の伸び方から見てみましょう。",
      },
      {
        id: "P3",
        title: "初級・黄色を接続",
        rows: 4,
        cols: 4,
        colors: ["R", "G", "B", "Y"],
        clues: [
          { row: 4, col: 2, value: 3 },
          { row: 3, col: 3, value: 2 },
          { row: 2, col: 1, value: 2 },
          { row: 3, col: 4, value: 2 },
          { row: 2, col: 3, value: 5 },
          { row: 1, col: 1, value: 2 },
        ],
        fixed: [
          { row: 1, col: 1, color: "G" },
          { row: 1, col: 3, color: "R" },
          { row: 4, col: 1, color: "Y" },
          { row: 4, col: 3, color: "Y" },
        ],
        description: "下段の黄色2マスを、数字3の部屋としてつなぎます。",
        first_hint: "下段の黄色2マスが同じ数字3の部屋へ入ると、間のマスも黄色になります。",
      },
      {
        id: "P1",
        title: "標準・緑を接続",
        rows: 5,
        cols: 5,
        colors: ["R", "G", "B"],
        clues: [
          { row: 2, col: 3, value: 2 },
          { row: 3, col: 2, value: 2 },
          { row: 4, col: 2, value: 4 },
          { row: 5, col: 4, value: 4 },
          { row: 4, col: 4, value: 4 },
          { row: 1, col: 3, value: 6 },
          { row: 2, col: 1, value: 3 },
        ],
        fixed: [
          { row: 3, col: 3, color: "G" },
          { row: 5, col: 3, color: "G" },
          { row: 5, col: 4, color: "R" },
        ],
        description: "離れた緑2マスを、同じ4マス部屋として接続します。",
        first_hint: "中央と下段の緑は、数字4の同じ部屋へ入る接続路を探します。",
      },
      {
        id: "P2",
        title: "上級・緑を分離",
        rows: 5,
        cols: 5,
        colors: ["R", "G", "B"],
        clues: [
          { row: 3, col: 3, value: 3 },
          { row: 5, col: 3, value: 4 },
          { row: 1, col: 4, value: 2 },
          { row: 1, col: 5, value: 3 },
          { row: 4, col: 5, value: 3 },
          { row: 2, col: 3, value: 6 },
          { row: 4, col: 1, value: 4 },
        ],
        fixed: [
          { row: 1, col: 3, color: "B" },
          { row: 2, col: 1, color: "R" },
          { row: 3, col: 1, color: "G" },
          { row: 4, col: 4, color: "G" },
        ],
        description: "離れた緑2マスを、同色の別部屋として分離する上級問題です。",
        first_hint: "赤い固定色が入れる数字部屋と、上段の青い2マス部屋から整理します。",
      },
    ],
  };

  root.COLOR_ROOMS_PUZZLES = data;
  if (typeof module === "object" && module.exports) module.exports = data;
})(typeof globalThis !== "undefined" ? globalThis : this);
