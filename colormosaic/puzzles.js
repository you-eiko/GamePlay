(function (root) {
  "use strict";

  const data = {
  "puzzles": [
    {
      "id": "P1",
      "title": "入門",
      "difficulty": "初級",
      "solver_tier": "BEGINNER",
      "rows": 4,
      "cols": 4,
      "colors": [
        "R",
        "G",
        "B"
      ],
      "fixed": [
        {
          "row": 1,
          "col": 3,
          "color": "B"
        },
        {
          "row": 3,
          "col": 1,
          "color": "G"
        },
        {
          "row": 4,
          "col": 4,
          "color": "R"
        }
      ],
      "clues": [
        {
          "row": 1,
          "col": 3,
          "value": 0
        },
        {
          "row": 2,
          "col": 1,
          "value": 1
        },
        {
          "row": 2,
          "col": 2,
          "value": 1
        },
        {
          "row": 2,
          "col": 4,
          "value": 2
        },
        {
          "row": 3,
          "col": 1,
          "value": 0
        },
        {
          "row": 3,
          "col": 2,
          "value": 3
        },
        {
          "row": 3,
          "col": 3,
          "value": 0
        },
        {
          "row": 3,
          "col": 4,
          "value": 4
        },
        {
          "row": 4,
          "col": 4,
          "value": 2
        }
      ],
      "first_hint": "右下の赤2と、その左上にある数字4付近から候補が連鎖します。"
    },
    {
      "id": "P2",
      "title": "初級",
      "difficulty": "初級",
      "solver_tier": "BEGINNER",
      "rows": 5,
      "cols": 5,
      "colors": [
        "R",
        "G",
        "B"
      ],
      "fixed": [
        {
          "row": 1,
          "col": 1,
          "color": "R"
        },
        {
          "row": 2,
          "col": 5,
          "color": "G"
        },
        {
          "row": 3,
          "col": 3,
          "color": "G"
        },
        {
          "row": 5,
          "col": 1,
          "color": "B"
        }
      ],
      "clues": [
        {
          "row": 1,
          "col": 1,
          "value": 0
        },
        {
          "row": 1,
          "col": 2,
          "value": 1
        },
        {
          "row": 1,
          "col": 3,
          "value": 3
        },
        {
          "row": 1,
          "col": 5,
          "value": 2
        },
        {
          "row": 2,
          "col": 2,
          "value": 0
        },
        {
          "row": 3,
          "col": 2,
          "value": 4
        },
        {
          "row": 3,
          "col": 3,
          "value": 2
        },
        {
          "row": 3,
          "col": 4,
          "value": 3
        },
        {
          "row": 4,
          "col": 5,
          "value": 0
        },
        {
          "row": 5,
          "col": 1,
          "value": 3
        },
        {
          "row": 5,
          "col": 3,
          "value": 4
        },
        {
          "row": 5,
          "col": 5,
          "value": 0
        }
      ],
      "first_hint": "左下の青3は角の最大値なので、周囲3マスがすべて青になります。"
    },
    {
      "id": "P3",
      "title": "標準",
      "difficulty": "初級",
      "solver_tier": "BEGINNER",
      "rows": 5,
      "cols": 5,
      "colors": [
        "R",
        "G",
        "B"
      ],
      "fixed": [
        {
          "row": 1,
          "col": 5,
          "color": "G"
        },
        {
          "row": 2,
          "col": 1,
          "color": "R"
        },
        {
          "row": 5,
          "col": 3,
          "color": "B"
        },
        {
          "row": 5,
          "col": 4,
          "color": "B"
        }
      ],
      "clues": [
        {
          "row": 1,
          "col": 1,
          "value": 1
        },
        {
          "row": 1,
          "col": 4,
          "value": 2
        },
        {
          "row": 2,
          "col": 2,
          "value": 3
        },
        {
          "row": 2,
          "col": 3,
          "value": 3
        },
        {
          "row": 3,
          "col": 1,
          "value": 5
        },
        {
          "row": 3,
          "col": 3,
          "value": 4
        },
        {
          "row": 4,
          "col": 2,
          "value": 6
        },
        {
          "row": 4,
          "col": 4,
          "value": 4
        },
        {
          "row": 4,
          "col": 5,
          "value": 1
        },
        {
          "row": 5,
          "col": 3,
          "value": 1
        }
      ],
      "first_hint": "左中央の5と、その下寄りの6が大きな同色領域を作ります。"
    },
    {
      "id": "P4",
      "title": "4色問題",
      "difficulty": "初級",
      "solver_tier": "BEGINNER",
      "rows": 5,
      "cols": 5,
      "colors": [
        "R",
        "G",
        "B",
        "Y"
      ],
      "fixed": [
        {
          "row": 1,
          "col": 1,
          "color": "R"
        },
        {
          "row": 1,
          "col": 3,
          "color": "G"
        },
        {
          "row": 3,
          "col": 2,
          "color": "B"
        },
        {
          "row": 4,
          "col": 5,
          "color": "G"
        },
        {
          "row": 5,
          "col": 2,
          "color": "Y"
        },
        {
          "row": 5,
          "col": 3,
          "color": "Y"
        }
      ],
      "clues": [
        {
          "row": 1,
          "col": 3,
          "value": 0
        },
        {
          "row": 1,
          "col": 5,
          "value": 1
        },
        {
          "row": 2,
          "col": 1,
          "value": 4
        },
        {
          "row": 2,
          "col": 3,
          "value": 2
        },
        {
          "row": 3,
          "col": 1,
          "value": 2
        },
        {
          "row": 3,
          "col": 2,
          "value": 0
        },
        {
          "row": 3,
          "col": 3,
          "value": 1
        },
        {
          "row": 3,
          "col": 5,
          "value": 4
        },
        {
          "row": 4,
          "col": 2,
          "value": 1
        },
        {
          "row": 4,
          "col": 3,
          "value": 0
        },
        {
          "row": 4,
          "col": 4,
          "value": 2
        },
        {
          "row": 5,
          "col": 2,
          "value": 3
        },
        {
          "row": 5,
          "col": 3,
          "value": 1
        },
        {
          "row": 5,
          "col": 4,
          "value": 2
        }
      ],
      "first_hint": "中央左の青0により、周囲から青を除外できます。左下の黄3も強い手掛かりです。"
    },
    {
      "id": "P5",
      "title": "やや難",
      "difficulty": "初級",
      "solver_tier": "BEGINNER",
      "rows": 6,
      "cols": 6,
      "colors": [
        "R",
        "G",
        "B"
      ],
      "fixed": [
        {
          "row": 1,
          "col": 1,
          "color": "G"
        },
        {
          "row": 1,
          "col": 5,
          "color": "G"
        },
        {
          "row": 4,
          "col": 1,
          "color": "R"
        },
        {
          "row": 5,
          "col": 1,
          "color": "B"
        },
        {
          "row": 6,
          "col": 4,
          "color": "R"
        }
      ],
      "clues": [
        {
          "row": 1,
          "col": 1,
          "value": 3
        },
        {
          "row": 1,
          "col": 3,
          "value": 2
        },
        {
          "row": 1,
          "col": 4,
          "value": 1
        },
        {
          "row": 1,
          "col": 5,
          "value": 2
        },
        {
          "row": 2,
          "col": 2,
          "value": 3
        },
        {
          "row": 2,
          "col": 5,
          "value": 3
        },
        {
          "row": 3,
          "col": 2,
          "value": 0
        },
        {
          "row": 3,
          "col": 4,
          "value": 2
        },
        {
          "row": 3,
          "col": 5,
          "value": 0
        },
        {
          "row": 3,
          "col": 6,
          "value": 3
        },
        {
          "row": 4,
          "col": 2,
          "value": 2
        },
        {
          "row": 4,
          "col": 4,
          "value": 3
        },
        {
          "row": 5,
          "col": 4,
          "value": 3
        },
        {
          "row": 5,
          "col": 5,
          "value": 2
        },
        {
          "row": 6,
          "col": 1,
          "value": 3
        },
        {
          "row": 6,
          "col": 3,
          "value": 3
        },
        {
          "row": 6,
          "col": 4,
          "value": 1
        },
        {
          "row": 6,
          "col": 5,
          "value": 0
        }
      ],
      "first_hint": "左上の緑3は角の最大値なので、周囲3マスがすべて緑になります。"
    },
    {
      "id": "CAL-BEGINNER",
      "title": "級境界・色つきゼロ",
      "difficulty": "初級",
      "solver_tier": "BEGINNER",
      "calibration": true,
      "rows": 1,
      "cols": 2,
      "colors": [
        "R",
        "G"
      ],
      "fixed": [
        {
          "row": 1,
          "col": 1,
          "color": "R"
        }
      ],
      "clues": [
        {
          "row": 1,
          "col": 1,
          "value": 0
        }
      ],
      "first_hint": "赤い0の隣は赤ではありません。二色盤なので、残る色まで決まります。"
    },
    {
      "id": "CAL-INTERMEDIATE",
      "title": "級境界・相対個数",
      "difficulty": "中級",
      "solver_tier": "INTERMEDIATE",
      "calibration": true,
      "rows": 2,
      "cols": 3,
      "colors": [
        "R",
        "G",
        "B"
      ],
      "fixed": [
        {
          "row": 1,
          "col": 2,
          "color": "R"
        },
        {
          "row": 1,
          "col": 3,
          "color": "G"
        },
        {
          "row": 2,
          "col": 1,
          "color": "B"
        }
      ],
      "clues": [
        {
          "row": 1,
          "col": 2,
          "value": 1
        },
        {
          "row": 1,
          "col": 3,
          "value": 0
        },
        {
          "row": 2,
          "col": 1,
          "value": 1
        },
        {
          "row": 2,
          "col": 2,
          "value": 1
        },
        {
          "row": 2,
          "col": 3,
          "value": 1
        }
      ],
      "first_hint": "緑の0で候補を減らしたあと、同じ二マスに「一個だけ入る」関係を重ねて見ます。"
    },
    {
      "id": "CAL-ADVANCED",
      "title": "級境界・三色の異色組",
      "difficulty": "上級",
      "solver_tier": "ADVANCED",
      "calibration": true,
      "rows": 2,
      "cols": 3,
      "colors": [
        "R",
        "G",
        "B"
      ],
      "fixed": [
        {
          "row": 1,
          "col": 1,
          "color": "G"
        },
        {
          "row": 2,
          "col": 1,
          "color": "B"
        },
        {
          "row": 2,
          "col": 3,
          "color": "R"
        }
      ],
      "clues": [
        {
          "row": 1,
          "col": 1,
          "value": 0
        },
        {
          "row": 1,
          "col": 2,
          "value": 1
        },
        {
          "row": 1,
          "col": 3,
          "value": 1
        },
        {
          "row": 2,
          "col": 1,
          "value": 1
        },
        {
          "row": 2,
          "col": 3,
          "value": 1
        }
      ],
      "first_hint": "緑の0から始めます。三つの未確定マスが互いに異色になる関係まで追うのが山場です。"
    },
    {
      "id": "CAL-OUT-OF-SCOPE",
      "title": "検証用・分岐なし範囲外",
      "difficulty": "人間解答範囲外",
      "solver_tier": null,
      "calibration": true,
      "rows": 2,
      "cols": 3,
      "colors": [
        "R",
        "G",
        "B"
      ],
      "fixed": [
        {
          "row": 1,
          "col": 3,
          "color": "R"
        },
        {
          "row": 2,
          "col": 1,
          "color": "B"
        },
        {
          "row": 2,
          "col": 2,
          "color": "G"
        }
      ],
      "clues": [
        {
          "row": 1,
          "col": 1,
          "value": 1
        },
        {
          "row": 1,
          "col": 2,
          "value": 1
        },
        {
          "row": 1,
          "col": 3,
          "value": 0
        },
        {
          "row": 2,
          "col": 2,
          "value": 2
        }
      ],
      "first_hint": "一意解は確認済みですが、現行の分岐なし手筋では完解できない検証盤です。候補比較用に使ってください。"
    }
  ]
};

  root.COLOR_MOSAIC_PUZZLES = data;
  if (typeof module === "object" && module.exports) {
    module.exports = data;
  }
})(typeof globalThis !== "undefined" ? globalThis : this);
