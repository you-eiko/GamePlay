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
      "first_hint": "緑の0で候補を減らしたあと、(2,3)の数字1が作る「二マスのうち一方だけ」という関係を見ます。"
    },
    {
      "id": "CAL-INTERMEDIATE-CLIQUE",
      "title": "再分類・見える三色配置",
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
      "first_hint": "左上の緑0から始めます。残った二色候補に「一個だけ入る」関係を重ねると、三色の位置が決まります。"
    },
    {
      "id": "CAL-INTERMEDIATE-RELATION",
      "title": "再分類・二色関係",
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
      "first_hint": "右上の赤0から始めます。緑2で候補を絞ったら、同じ二色だけが残る二マスを上段の数字1で比べます。"
    },
    {
      "id": "CAL-INTERMEDIATE-R11",
      "title": "中級・重なり差分R11",
      "difficulty": "中級",
      "solver_tier": "INTERMEDIATE",
      "calibration": true,
      "rows": 3,
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
          "color": "B"
        },
        {
          "row": 3,
          "col": 1,
          "color": "R"
        },
        {
          "row": 3,
          "col": 3,
          "color": "R"
        }
      ],
      "clues": [
        {
          "row": 1,
          "col": 2,
          "value": 0
        },
        {
          "row": 2,
          "col": 2,
          "value": 2
        },
        {
          "row": 3,
          "col": 1,
          "value": 1
        },
        {
          "row": 3,
          "col": 3,
          "value": 2
        }
      ],
      "first_hint": "下段の赤1と赤2は二マスを共通に見ます。共有部を消すと、右だけの(2,3)は左だけの(2,1)より赤が一つ多いと分かります。"
    },
    {
      "id": "CAL-INTERMEDIATE-R17",
      "title": "中級・重み付き個数R17",
      "difficulty": "中級",
      "solver_tier": "INTERMEDIATE",
      "calibration": true,
      "rows": 3,
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
          "row": 3,
          "col": 1,
          "color": "B"
        },
        {
          "row": 3,
          "col": 2,
          "color": "B"
        },
        {
          "row": 3,
          "col": 3,
          "color": "G"
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
          "col": 2,
          "value": 3
        },
        {
          "row": 2,
          "col": 3,
          "value": 2
        },
        {
          "row": 3,
          "col": 2,
          "value": 2
        }
      ],
      "first_hint": "緑0から始めます。途中で(2,2)と(2,3)が同色になったら、青の個数では0個か2個をまとめて使う一組として数えます。"
    },
    {
      "id": "CAL-ADVANCED",
      "title": "級境界・差分と重み",
      "difficulty": "上級",
      "solver_tier": "ADVANCED",
      "calibration": true,
      "rows": 3,
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
          "color": "B"
        },
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
          "row": 3,
          "col": 1,
          "color": "R"
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
          "value": 2
        },
        {
          "row": 2,
          "col": 2,
          "value": 1
        },
        {
          "row": 2,
          "col": 3,
          "value": 3
        },
        {
          "row": 3,
          "col": 1,
          "value": 0
        }
      ],
      "first_hint": "左下の赤0から始めます。同色関係を作ったあと、重なり差分で一対二の個数差を残し、同色ペアを重み2で数えます。"
    },
    {
      "id": "CAL-OUT-OF-SCOPE",
      "title": "検証用・連立が必要",
      "difficulty": "人間解答範囲外",
      "solver_tier": null,
      "calibration": true,
      "rows": 3,
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
          "row": 1,
          "col": 2,
          "color": "B"
        },
        {
          "row": 1,
          "col": 3,
          "color": "G"
        },
        {
          "row": 3,
          "col": 3,
          "color": "R"
        }
      ],
      "clues": [
        {
          "row": 2,
          "col": 1,
          "value": 2
        },
        {
          "row": 2,
          "col": 2,
          "value": 4
        },
        {
          "row": 2,
          "col": 3,
          "value": 2
        },
        {
          "row": 3,
          "col": 2,
          "value": 2
        }
      ],
      "first_hint": "四つの数字が互いの中心色をまたいで連立します。採用済みの分岐なし手筋だけでは初手がなく、場合分けして追う検証盤です。"
    },
    {
      "id": "PLAY-6X6-BEGINNER-01",
      "title": "6×6 初級テスト 1",
      "difficulty": "初級",
      "solver_tier": "BEGINNER",
      "playtest": true,
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
          "color": "R"
        },
        {
          "row": 1,
          "col": 2,
          "color": "B"
        },
        {
          "row": 1,
          "col": 3,
          "color": "B"
        },
        {
          "row": 1,
          "col": 4,
          "color": "B"
        },
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
          "row": 2,
          "col": 2,
          "color": "R"
        },
        {
          "row": 2,
          "col": 3,
          "color": "R"
        },
        {
          "row": 2,
          "col": 6,
          "color": "R"
        },
        {
          "row": 3,
          "col": 1,
          "color": "R"
        },
        {
          "row": 3,
          "col": 2,
          "color": "G"
        },
        {
          "row": 3,
          "col": 5,
          "color": "R"
        },
        {
          "row": 3,
          "col": 6,
          "color": "G"
        },
        {
          "row": 4,
          "col": 2,
          "color": "G"
        },
        {
          "row": 4,
          "col": 3,
          "color": "R"
        },
        {
          "row": 4,
          "col": 4,
          "color": "G"
        },
        {
          "row": 4,
          "col": 5,
          "color": "G"
        },
        {
          "row": 4,
          "col": 6,
          "color": "R"
        },
        {
          "row": 5,
          "col": 1,
          "color": "R"
        },
        {
          "row": 5,
          "col": 4,
          "color": "R"
        },
        {
          "row": 5,
          "col": 5,
          "color": "R"
        },
        {
          "row": 5,
          "col": 6,
          "color": "R"
        },
        {
          "row": 6,
          "col": 1,
          "color": "R"
        },
        {
          "row": 6,
          "col": 2,
          "color": "R"
        },
        {
          "row": 6,
          "col": 3,
          "color": "R"
        },
        {
          "row": 6,
          "col": 4,
          "color": "R"
        },
        {
          "row": 6,
          "col": 5,
          "color": "G"
        },
        {
          "row": 6,
          "col": 6,
          "color": "B"
        }
      ],
      "clues": [
        {
          "row": 1,
          "col": 5,
          "value": 2
        },
        {
          "row": 2,
          "col": 4,
          "value": 2
        },
        {
          "row": 3,
          "col": 4,
          "value": 1
        },
        {
          "row": 4,
          "col": 1,
          "value": 1
        },
        {
          "row": 4,
          "col": 2,
          "value": 2
        },
        {
          "row": 5,
          "col": 3,
          "value": 1
        }
      ],
      "first_hint": "(3,4) の数字1を作れない候補を除きます（赤:3〜6、緑:2〜5）。"
    },
    {
      "id": "PLAY-6X6-BEGINNER-02",
      "title": "6×6 初級テスト 2",
      "difficulty": "初級",
      "solver_tier": "BEGINNER",
      "playtest": true,
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
          "col": 2,
          "color": "G"
        },
        {
          "row": 1,
          "col": 4,
          "color": "R"
        },
        {
          "row": 1,
          "col": 5,
          "color": "R"
        },
        {
          "row": 1,
          "col": 6,
          "color": "B"
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
        },
        {
          "row": 2,
          "col": 5,
          "color": "R"
        },
        {
          "row": 2,
          "col": 6,
          "color": "R"
        },
        {
          "row": 3,
          "col": 1,
          "color": "G"
        },
        {
          "row": 3,
          "col": 4,
          "color": "R"
        },
        {
          "row": 3,
          "col": 5,
          "color": "R"
        },
        {
          "row": 3,
          "col": 6,
          "color": "G"
        },
        {
          "row": 4,
          "col": 1,
          "color": "R"
        },
        {
          "row": 4,
          "col": 3,
          "color": "B"
        },
        {
          "row": 4,
          "col": 4,
          "color": "R"
        },
        {
          "row": 4,
          "col": 5,
          "color": "R"
        },
        {
          "row": 4,
          "col": 6,
          "color": "G"
        },
        {
          "row": 5,
          "col": 1,
          "color": "R"
        },
        {
          "row": 5,
          "col": 4,
          "color": "R"
        },
        {
          "row": 5,
          "col": 5,
          "color": "R"
        },
        {
          "row": 5,
          "col": 6,
          "color": "G"
        },
        {
          "row": 6,
          "col": 1,
          "color": "B"
        },
        {
          "row": 6,
          "col": 2,
          "color": "R"
        },
        {
          "row": 6,
          "col": 3,
          "color": "R"
        },
        {
          "row": 6,
          "col": 4,
          "color": "B"
        },
        {
          "row": 6,
          "col": 5,
          "color": "B"
        },
        {
          "row": 6,
          "col": 6,
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
          "value": 1
        },
        {
          "row": 3,
          "col": 3,
          "value": 2
        },
        {
          "row": 4,
          "col": 2,
          "value": 1
        },
        {
          "row": 5,
          "col": 2,
          "value": 1
        }
      ],
      "first_hint": "(1,2) の 緑 は必要な1個に達したので、残る周囲へは入りません。"
    },
    {
      "id": "PLAY-6X6-BEGINNER-03",
      "title": "6×6 初級テスト 3",
      "difficulty": "初級",
      "solver_tier": "BEGINNER",
      "playtest": true,
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
          "col": 2,
          "color": "G"
        },
        {
          "row": 1,
          "col": 3,
          "color": "R"
        },
        {
          "row": 1,
          "col": 4,
          "color": "R"
        },
        {
          "row": 1,
          "col": 5,
          "color": "R"
        },
        {
          "row": 1,
          "col": 6,
          "color": "B"
        },
        {
          "row": 2,
          "col": 1,
          "color": "R"
        },
        {
          "row": 2,
          "col": 4,
          "color": "R"
        },
        {
          "row": 2,
          "col": 5,
          "color": "B"
        },
        {
          "row": 2,
          "col": 6,
          "color": "B"
        },
        {
          "row": 3,
          "col": 1,
          "color": "G"
        },
        {
          "row": 3,
          "col": 4,
          "color": "B"
        },
        {
          "row": 3,
          "col": 6,
          "color": "R"
        },
        {
          "row": 4,
          "col": 2,
          "color": "B"
        },
        {
          "row": 5,
          "col": 1,
          "color": "G"
        },
        {
          "row": 5,
          "col": 6,
          "color": "R"
        },
        {
          "row": 6,
          "col": 1,
          "color": "R"
        },
        {
          "row": 6,
          "col": 3,
          "color": "B"
        },
        {
          "row": 6,
          "col": 5,
          "color": "B"
        },
        {
          "row": 6,
          "col": 6,
          "color": "B"
        }
      ],
      "clues": [
        {
          "row": 3,
          "col": 1,
          "value": 2
        },
        {
          "row": 3,
          "col": 3,
          "value": 5
        },
        {
          "row": 3,
          "col": 5,
          "value": 1
        },
        {
          "row": 4,
          "col": 2,
          "value": 0
        },
        {
          "row": 4,
          "col": 4,
          "value": 6
        },
        {
          "row": 4,
          "col": 5,
          "value": 1
        },
        {
          "row": 5,
          "col": 3,
          "value": 6
        }
      ],
      "first_hint": "(4,2) は 青 の0なので、周囲はすべて青以外です。"
    },
    {
      "id": "PLAY-6X6-BEGINNER-04",
      "title": "6×6 初級テスト 4",
      "difficulty": "初級",
      "solver_tier": "BEGINNER",
      "playtest": true,
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
          "color": "B"
        },
        {
          "row": 1,
          "col": 3,
          "color": "R"
        },
        {
          "row": 1,
          "col": 4,
          "color": "G"
        },
        {
          "row": 1,
          "col": 5,
          "color": "G"
        },
        {
          "row": 2,
          "col": 4,
          "color": "G"
        },
        {
          "row": 3,
          "col": 1,
          "color": "B"
        },
        {
          "row": 3,
          "col": 2,
          "color": "B"
        },
        {
          "row": 3,
          "col": 3,
          "color": "B"
        },
        {
          "row": 3,
          "col": 4,
          "color": "R"
        },
        {
          "row": 3,
          "col": 5,
          "color": "R"
        },
        {
          "row": 4,
          "col": 1,
          "color": "R"
        },
        {
          "row": 4,
          "col": 2,
          "color": "R"
        },
        {
          "row": 4,
          "col": 4,
          "color": "R"
        },
        {
          "row": 4,
          "col": 5,
          "color": "R"
        },
        {
          "row": 5,
          "col": 1,
          "color": "B"
        },
        {
          "row": 5,
          "col": 2,
          "color": "B"
        },
        {
          "row": 5,
          "col": 5,
          "color": "G"
        },
        {
          "row": 5,
          "col": 6,
          "color": "R"
        },
        {
          "row": 6,
          "col": 1,
          "color": "G"
        },
        {
          "row": 6,
          "col": 3,
          "color": "G"
        },
        {
          "row": 6,
          "col": 4,
          "color": "G"
        },
        {
          "row": 6,
          "col": 5,
          "color": "R"
        },
        {
          "row": 6,
          "col": 6,
          "color": "G"
        }
      ],
      "clues": [
        {
          "row": 1,
          "col": 2,
          "value": 0
        },
        {
          "row": 1,
          "col": 5,
          "value": 2
        },
        {
          "row": 2,
          "col": 2,
          "value": 4
        },
        {
          "row": 2,
          "col": 6,
          "value": 0
        },
        {
          "row": 3,
          "col": 6,
          "value": 1
        },
        {
          "row": 5,
          "col": 4,
          "value": 1
        },
        {
          "row": 6,
          "col": 2,
          "value": 2
        },
        {
          "row": 6,
          "col": 3,
          "value": 1
        }
      ],
      "first_hint": "(1,5) の 緑 は必要な2個に達したので、残る周囲へは入りません。"
    },
    {
      "id": "PLAY-6X6-BEGINNER-05",
      "title": "6×6 初級テスト 5",
      "difficulty": "初級",
      "solver_tier": "BEGINNER",
      "playtest": true,
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
          "color": "R"
        },
        {
          "row": 1,
          "col": 2,
          "color": "B"
        },
        {
          "row": 1,
          "col": 5,
          "color": "R"
        },
        {
          "row": 1,
          "col": 6,
          "color": "R"
        },
        {
          "row": 2,
          "col": 1,
          "color": "G"
        },
        {
          "row": 2,
          "col": 4,
          "color": "G"
        },
        {
          "row": 2,
          "col": 6,
          "color": "R"
        },
        {
          "row": 3,
          "col": 1,
          "color": "G"
        },
        {
          "row": 3,
          "col": 6,
          "color": "B"
        },
        {
          "row": 4,
          "col": 1,
          "color": "R"
        },
        {
          "row": 4,
          "col": 3,
          "color": "R"
        },
        {
          "row": 4,
          "col": 5,
          "color": "B"
        },
        {
          "row": 4,
          "col": 6,
          "color": "G"
        },
        {
          "row": 5,
          "col": 1,
          "color": "B"
        },
        {
          "row": 5,
          "col": 2,
          "color": "R"
        },
        {
          "row": 5,
          "col": 3,
          "color": "B"
        },
        {
          "row": 5,
          "col": 6,
          "color": "G"
        },
        {
          "row": 6,
          "col": 3,
          "color": "R"
        },
        {
          "row": 6,
          "col": 5,
          "color": "B"
        },
        {
          "row": 6,
          "col": 6,
          "color": "R"
        }
      ],
      "clues": [
        {
          "row": 1,
          "col": 4,
          "value": 0
        },
        {
          "row": 2,
          "col": 2,
          "value": 1
        },
        {
          "row": 2,
          "col": 4,
          "value": 3
        },
        {
          "row": 2,
          "col": 5,
          "value": 1
        },
        {
          "row": 3,
          "col": 3,
          "value": 1
        },
        {
          "row": 4,
          "col": 4,
          "value": 2
        },
        {
          "row": 5,
          "col": 3,
          "value": 4
        },
        {
          "row": 5,
          "col": 4,
          "value": 1
        },
        {
          "row": 6,
          "col": 1,
          "value": 0
        }
      ],
      "first_hint": "(1,4) は0なので、周囲に確定済みの色は中心色になれません。"
    },
    {
      "id": "PLAY-6X6-INTERMEDIATE-01",
      "title": "6×6 中級テスト 1",
      "difficulty": "中級",
      "solver_tier": "INTERMEDIATE",
      "playtest": true,
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
          "color": "R"
        },
        {
          "row": 1,
          "col": 3,
          "color": "G"
        },
        {
          "row": 1,
          "col": 5,
          "color": "G"
        },
        {
          "row": 2,
          "col": 4,
          "color": "R"
        },
        {
          "row": 2,
          "col": 5,
          "color": "B"
        },
        {
          "row": 2,
          "col": 6,
          "color": "R"
        },
        {
          "row": 3,
          "col": 3,
          "color": "G"
        },
        {
          "row": 3,
          "col": 4,
          "color": "R"
        },
        {
          "row": 4,
          "col": 1,
          "color": "G"
        },
        {
          "row": 4,
          "col": 2,
          "color": "R"
        },
        {
          "row": 4,
          "col": 3,
          "color": "R"
        },
        {
          "row": 4,
          "col": 4,
          "color": "R"
        },
        {
          "row": 5,
          "col": 1,
          "color": "B"
        },
        {
          "row": 5,
          "col": 2,
          "color": "R"
        },
        {
          "row": 5,
          "col": 4,
          "color": "R"
        },
        {
          "row": 5,
          "col": 5,
          "color": "G"
        },
        {
          "row": 5,
          "col": 6,
          "color": "R"
        },
        {
          "row": 6,
          "col": 1,
          "color": "R"
        },
        {
          "row": 6,
          "col": 3,
          "color": "R"
        },
        {
          "row": 6,
          "col": 6,
          "color": "G"
        }
      ],
      "clues": [
        {
          "row": 1,
          "col": 3,
          "value": 2
        },
        {
          "row": 2,
          "col": 1,
          "value": 0
        },
        {
          "row": 2,
          "col": 2,
          "value": 2
        },
        {
          "row": 2,
          "col": 5,
          "value": 4
        },
        {
          "row": 3,
          "col": 3,
          "value": 1
        },
        {
          "row": 3,
          "col": 6,
          "value": 4
        },
        {
          "row": 5,
          "col": 3,
          "value": 2
        },
        {
          "row": 6,
          "col": 5,
          "value": 0
        }
      ],
      "first_hint": "(2,5) の 青 を4個置ける場所がちょうど必要数しかないので、すべて確定します。"
    },
    {
      "id": "PLAY-6X6-INTERMEDIATE-02",
      "title": "6×6 中級テスト 2",
      "difficulty": "中級",
      "solver_tier": "INTERMEDIATE",
      "playtest": true,
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
          "color": "R"
        },
        {
          "row": 1,
          "col": 4,
          "color": "G"
        },
        {
          "row": 1,
          "col": 6,
          "color": "R"
        },
        {
          "row": 2,
          "col": 5,
          "color": "G"
        },
        {
          "row": 3,
          "col": 1,
          "color": "B"
        },
        {
          "row": 3,
          "col": 4,
          "color": "R"
        },
        {
          "row": 3,
          "col": 6,
          "color": "G"
        },
        {
          "row": 4,
          "col": 1,
          "color": "R"
        },
        {
          "row": 4,
          "col": 2,
          "color": "G"
        },
        {
          "row": 4,
          "col": 3,
          "color": "R"
        },
        {
          "row": 4,
          "col": 4,
          "color": "G"
        },
        {
          "row": 5,
          "col": 6,
          "color": "R"
        },
        {
          "row": 6,
          "col": 1,
          "color": "B"
        },
        {
          "row": 6,
          "col": 2,
          "color": "G"
        },
        {
          "row": 6,
          "col": 5,
          "color": "R"
        }
      ],
      "clues": [
        {
          "row": 1,
          "col": 2,
          "value": 0
        },
        {
          "row": 1,
          "col": 5,
          "value": 3
        },
        {
          "row": 1,
          "col": 6,
          "value": 2
        },
        {
          "row": 2,
          "col": 2,
          "value": 2
        },
        {
          "row": 3,
          "col": 1,
          "value": 2
        },
        {
          "row": 3,
          "col": 3,
          "value": 1
        },
        {
          "row": 4,
          "col": 5,
          "value": 2
        },
        {
          "row": 5,
          "col": 6,
          "value": 1
        },
        {
          "row": 6,
          "col": 1,
          "value": 2
        },
        {
          "row": 6,
          "col": 2,
          "value": 1
        },
        {
          "row": 6,
          "col": 3,
          "value": 0
        },
        {
          "row": 6,
          "col": 4,
          "value": 3
        },
        {
          "row": 6,
          "col": 6,
          "value": 1
        }
      ],
      "first_hint": "(5,6) の 赤 は必要な1個に達したので、残る周囲へは入りません。"
    },
    {
      "id": "PLAY-6X6-INTERMEDIATE-03",
      "title": "6×6 中級テスト 3",
      "difficulty": "中級",
      "solver_tier": "INTERMEDIATE",
      "playtest": true,
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
          "col": 2,
          "color": "R"
        },
        {
          "row": 1,
          "col": 3,
          "color": "B"
        },
        {
          "row": 1,
          "col": 4,
          "color": "G"
        },
        {
          "row": 2,
          "col": 1,
          "color": "B"
        },
        {
          "row": 2,
          "col": 2,
          "color": "R"
        },
        {
          "row": 2,
          "col": 3,
          "color": "B"
        },
        {
          "row": 3,
          "col": 1,
          "color": "R"
        },
        {
          "row": 3,
          "col": 3,
          "color": "B"
        },
        {
          "row": 3,
          "col": 6,
          "color": "R"
        },
        {
          "row": 4,
          "col": 1,
          "color": "G"
        },
        {
          "row": 4,
          "col": 5,
          "color": "B"
        },
        {
          "row": 4,
          "col": 6,
          "color": "G"
        },
        {
          "row": 5,
          "col": 1,
          "color": "G"
        },
        {
          "row": 5,
          "col": 3,
          "color": "R"
        },
        {
          "row": 5,
          "col": 4,
          "color": "R"
        },
        {
          "row": 5,
          "col": 6,
          "color": "G"
        },
        {
          "row": 6,
          "col": 1,
          "color": "G"
        },
        {
          "row": 6,
          "col": 2,
          "color": "G"
        },
        {
          "row": 6,
          "col": 3,
          "color": "B"
        },
        {
          "row": 6,
          "col": 6,
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
          "col": 5,
          "value": 0
        },
        {
          "row": 2,
          "col": 5,
          "value": 2
        },
        {
          "row": 3,
          "col": 2,
          "value": 3
        },
        {
          "row": 3,
          "col": 4,
          "value": 2
        },
        {
          "row": 3,
          "col": 6,
          "value": 1
        },
        {
          "row": 4,
          "col": 4,
          "value": 1
        },
        {
          "row": 5,
          "col": 4,
          "value": 2
        },
        {
          "row": 6,
          "col": 3,
          "value": 1
        },
        {
          "row": 6,
          "col": 4,
          "value": 2
        },
        {
          "row": 6,
          "col": 5,
          "value": 0
        }
      ],
      "first_hint": "(1,1) の周囲で数字1と同じ人数の色だけが中心候補に残ります。"
    },
    {
      "id": "PLAY-6X6-INTERMEDIATE-04",
      "title": "6×6 中級テスト 4",
      "difficulty": "中級",
      "solver_tier": "INTERMEDIATE",
      "playtest": true,
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
          "color": "B"
        },
        {
          "row": 1,
          "col": 3,
          "color": "G"
        },
        {
          "row": 1,
          "col": 4,
          "color": "B"
        },
        {
          "row": 1,
          "col": 6,
          "color": "G"
        },
        {
          "row": 2,
          "col": 1,
          "color": "G"
        },
        {
          "row": 2,
          "col": 2,
          "color": "R"
        },
        {
          "row": 2,
          "col": 3,
          "color": "B"
        },
        {
          "row": 2,
          "col": 6,
          "color": "G"
        },
        {
          "row": 3,
          "col": 1,
          "color": "B"
        },
        {
          "row": 3,
          "col": 2,
          "color": "G"
        },
        {
          "row": 3,
          "col": 3,
          "color": "G"
        },
        {
          "row": 3,
          "col": 4,
          "color": "R"
        },
        {
          "row": 3,
          "col": 6,
          "color": "G"
        },
        {
          "row": 4,
          "col": 4,
          "color": "R"
        },
        {
          "row": 4,
          "col": 6,
          "color": "B"
        },
        {
          "row": 5,
          "col": 4,
          "color": "G"
        },
        {
          "row": 5,
          "col": 5,
          "color": "B"
        },
        {
          "row": 6,
          "col": 1,
          "color": "G"
        },
        {
          "row": 6,
          "col": 3,
          "color": "B"
        },
        {
          "row": 6,
          "col": 4,
          "color": "G"
        },
        {
          "row": 6,
          "col": 6,
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
          "value": 1
        },
        {
          "row": 1,
          "col": 5,
          "value": 0
        },
        {
          "row": 3,
          "col": 5,
          "value": 3
        },
        {
          "row": 4,
          "col": 1,
          "value": 1
        },
        {
          "row": 4,
          "col": 3,
          "value": 1
        },
        {
          "row": 5,
          "col": 1,
          "value": 0
        },
        {
          "row": 6,
          "col": 3,
          "value": 2
        },
        {
          "row": 6,
          "col": 5,
          "value": 1
        }
      ],
      "first_hint": "(1,4) の 青 は必要な1個に達したので、残る周囲へは入りません。"
    },
    {
      "id": "PLAY-6X6-INTERMEDIATE-05",
      "title": "6×6 中級テスト 5",
      "difficulty": "中級",
      "solver_tier": "INTERMEDIATE",
      "playtest": true,
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
          "col": 2,
          "color": "R"
        },
        {
          "row": 1,
          "col": 3,
          "color": "B"
        },
        {
          "row": 1,
          "col": 4,
          "color": "R"
        },
        {
          "row": 1,
          "col": 6,
          "color": "R"
        },
        {
          "row": 2,
          "col": 3,
          "color": "G"
        },
        {
          "row": 3,
          "col": 1,
          "color": "R"
        },
        {
          "row": 4,
          "col": 1,
          "color": "R"
        },
        {
          "row": 4,
          "col": 3,
          "color": "B"
        },
        {
          "row": 5,
          "col": 3,
          "color": "G"
        },
        {
          "row": 6,
          "col": 2,
          "color": "R"
        },
        {
          "row": 6,
          "col": 5,
          "color": "G"
        }
      ],
      "clues": [
        {
          "row": 1,
          "col": 2,
          "value": 3
        },
        {
          "row": 1,
          "col": 4,
          "value": 2
        },
        {
          "row": 1,
          "col": 6,
          "value": 1
        },
        {
          "row": 2,
          "col": 3,
          "value": 3
        },
        {
          "row": 2,
          "col": 5,
          "value": 2
        },
        {
          "row": 3,
          "col": 4,
          "value": 3
        },
        {
          "row": 3,
          "col": 5,
          "value": 0
        },
        {
          "row": 4,
          "col": 4,
          "value": 2
        },
        {
          "row": 4,
          "col": 6,
          "value": 1
        },
        {
          "row": 5,
          "col": 3,
          "value": 2
        },
        {
          "row": 5,
          "col": 4,
          "value": 4
        },
        {
          "row": 5,
          "col": 6,
          "value": 1
        },
        {
          "row": 6,
          "col": 1,
          "value": 0
        },
        {
          "row": 6,
          "col": 2,
          "value": 2
        },
        {
          "row": 6,
          "col": 6,
          "value": 1
        }
      ],
      "first_hint": "(1,2) の 赤 を3個置ける場所がちょうど必要数しかないので、すべて確定します。"
    },
    {
      "id": "PLAY-6X6-ADVANCED-01",
      "title": "6×6 上級テスト 1",
      "difficulty": "上級",
      "solver_tier": "ADVANCED",
      "playtest": true,
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
          "color": "R"
        },
        {
          "row": 1,
          "col": 2,
          "color": "R"
        },
        {
          "row": 1,
          "col": 4,
          "color": "G"
        },
        {
          "row": 1,
          "col": 5,
          "color": "B"
        },
        {
          "row": 1,
          "col": 6,
          "color": "G"
        },
        {
          "row": 2,
          "col": 2,
          "color": "G"
        },
        {
          "row": 2,
          "col": 3,
          "color": "B"
        },
        {
          "row": 2,
          "col": 6,
          "color": "G"
        },
        {
          "row": 3,
          "col": 1,
          "color": "R"
        },
        {
          "row": 3,
          "col": 2,
          "color": "R"
        },
        {
          "row": 3,
          "col": 6,
          "color": "G"
        },
        {
          "row": 4,
          "col": 6,
          "color": "R"
        },
        {
          "row": 5,
          "col": 2,
          "color": "G"
        },
        {
          "row": 5,
          "col": 6,
          "color": "B"
        },
        {
          "row": 6,
          "col": 1,
          "color": "G"
        },
        {
          "row": 6,
          "col": 2,
          "color": "R"
        },
        {
          "row": 6,
          "col": 4,
          "color": "B"
        },
        {
          "row": 6,
          "col": 5,
          "color": "B"
        },
        {
          "row": 6,
          "col": 6,
          "color": "R"
        }
      ],
      "clues": [
        {
          "row": 1,
          "col": 4,
          "value": 3
        },
        {
          "row": 2,
          "col": 1,
          "value": 0
        },
        {
          "row": 2,
          "col": 4,
          "value": 3
        },
        {
          "row": 3,
          "col": 2,
          "value": 2
        },
        {
          "row": 3,
          "col": 5,
          "value": 3
        },
        {
          "row": 4,
          "col": 2,
          "value": 0
        },
        {
          "row": 4,
          "col": 5,
          "value": 6
        },
        {
          "row": 5,
          "col": 2,
          "value": 3
        },
        {
          "row": 5,
          "col": 4,
          "value": 5
        }
      ],
      "first_hint": "(1,4) の 緑 を3個置ける場所がちょうど必要数しかないので、すべて確定します。"
    },
    {
      "id": "PLAY-6X6-ADVANCED-02",
      "title": "6×6 上級テスト 2",
      "difficulty": "上級",
      "solver_tier": "ADVANCED",
      "playtest": true,
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
          "col": 4,
          "color": "R"
        },
        {
          "row": 1,
          "col": 6,
          "color": "R"
        },
        {
          "row": 2,
          "col": 1,
          "color": "R"
        },
        {
          "row": 2,
          "col": 4,
          "color": "R"
        },
        {
          "row": 3,
          "col": 1,
          "color": "R"
        },
        {
          "row": 3,
          "col": 3,
          "color": "G"
        },
        {
          "row": 3,
          "col": 5,
          "color": "B"
        },
        {
          "row": 4,
          "col": 6,
          "color": "G"
        },
        {
          "row": 5,
          "col": 6,
          "color": "B"
        },
        {
          "row": 6,
          "col": 1,
          "color": "R"
        },
        {
          "row": 6,
          "col": 2,
          "color": "B"
        },
        {
          "row": 6,
          "col": 3,
          "color": "R"
        },
        {
          "row": 6,
          "col": 4,
          "color": "G"
        },
        {
          "row": 6,
          "col": 5,
          "color": "G"
        },
        {
          "row": 6,
          "col": 6,
          "color": "G"
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
          "col": 5,
          "value": 0
        },
        {
          "row": 2,
          "col": 2,
          "value": 3
        },
        {
          "row": 2,
          "col": 3,
          "value": 0
        },
        {
          "row": 2,
          "col": 4,
          "value": 2
        },
        {
          "row": 3,
          "col": 6,
          "value": 3
        },
        {
          "row": 4,
          "col": 5,
          "value": 3
        },
        {
          "row": 4,
          "col": 6,
          "value": 3
        },
        {
          "row": 5,
          "col": 1,
          "value": 4
        },
        {
          "row": 5,
          "col": 3,
          "value": 6
        },
        {
          "row": 5,
          "col": 4,
          "value": 3
        }
      ],
      "first_hint": "(4,6) の 緑 を3個置ける場所がちょうど必要数しかないので、すべて確定します。"
    },
    {
      "id": "PLAY-6X6-ADVANCED-03",
      "title": "6×6 上級テスト 3",
      "difficulty": "上級",
      "solver_tier": "ADVANCED",
      "playtest": true,
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
          "color": "R"
        },
        {
          "row": 1,
          "col": 2,
          "color": "R"
        },
        {
          "row": 1,
          "col": 3,
          "color": "R"
        },
        {
          "row": 1,
          "col": 4,
          "color": "G"
        },
        {
          "row": 1,
          "col": 6,
          "color": "G"
        },
        {
          "row": 2,
          "col": 1,
          "color": "B"
        },
        {
          "row": 2,
          "col": 6,
          "color": "B"
        },
        {
          "row": 3,
          "col": 1,
          "color": "R"
        },
        {
          "row": 3,
          "col": 6,
          "color": "B"
        },
        {
          "row": 4,
          "col": 2,
          "color": "B"
        },
        {
          "row": 5,
          "col": 2,
          "color": "R"
        },
        {
          "row": 5,
          "col": 3,
          "color": "G"
        },
        {
          "row": 5,
          "col": 6,
          "color": "G"
        },
        {
          "row": 6,
          "col": 3,
          "color": "G"
        },
        {
          "row": 6,
          "col": 6,
          "color": "R"
        }
      ],
      "clues": [
        {
          "row": 2,
          "col": 3,
          "value": 3
        },
        {
          "row": 2,
          "col": 4,
          "value": 6
        },
        {
          "row": 3,
          "col": 1,
          "value": 3
        },
        {
          "row": 3,
          "col": 2,
          "value": 3
        },
        {
          "row": 4,
          "col": 6,
          "value": 2
        },
        {
          "row": 5,
          "col": 1,
          "value": 1
        },
        {
          "row": 5,
          "col": 4,
          "value": 0
        },
        {
          "row": 5,
          "col": 5,
          "value": 3
        },
        {
          "row": 5,
          "col": 6,
          "value": 3
        },
        {
          "row": 6,
          "col": 2,
          "value": 0
        },
        {
          "row": 6,
          "col": 6,
          "value": 1
        }
      ],
      "first_hint": "(3,1) の 赤 を3個置ける場所がちょうど必要数しかないので、すべて確定します。"
    },
    {
      "id": "PLAY-6X6-ADVANCED-04",
      "title": "6×6 上級テスト 4",
      "difficulty": "上級",
      "solver_tier": "ADVANCED",
      "playtest": true,
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
          "color": "B"
        },
        {
          "row": 1,
          "col": 2,
          "color": "B"
        },
        {
          "row": 1,
          "col": 4,
          "color": "G"
        },
        {
          "row": 1,
          "col": 5,
          "color": "R"
        },
        {
          "row": 1,
          "col": 6,
          "color": "G"
        },
        {
          "row": 2,
          "col": 3,
          "color": "R"
        },
        {
          "row": 2,
          "col": 6,
          "color": "G"
        },
        {
          "row": 3,
          "col": 6,
          "color": "G"
        },
        {
          "row": 4,
          "col": 6,
          "color": "B"
        },
        {
          "row": 5,
          "col": 2,
          "color": "G"
        },
        {
          "row": 5,
          "col": 6,
          "color": "R"
        },
        {
          "row": 6,
          "col": 1,
          "color": "G"
        },
        {
          "row": 6,
          "col": 6,
          "color": "B"
        }
      ],
      "clues": [
        {
          "row": 1,
          "col": 3,
          "value": 3
        },
        {
          "row": 1,
          "col": 4,
          "value": 3
        },
        {
          "row": 2,
          "col": 2,
          "value": 1
        },
        {
          "row": 3,
          "col": 2,
          "value": 2
        },
        {
          "row": 3,
          "col": 5,
          "value": 3
        },
        {
          "row": 4,
          "col": 2,
          "value": 0
        },
        {
          "row": 4,
          "col": 5,
          "value": 6
        },
        {
          "row": 5,
          "col": 2,
          "value": 3
        },
        {
          "row": 5,
          "col": 3,
          "value": 2
        },
        {
          "row": 5,
          "col": 5,
          "value": 6
        }
      ],
      "first_hint": "(1,4) の 緑 を3個置ける場所がちょうど必要数しかないので、すべて確定します。"
    },
    {
      "id": "PLAY-6X6-ADVANCED-05",
      "title": "6×6 上級テスト 5",
      "difficulty": "上級",
      "solver_tier": "ADVANCED",
      "playtest": true,
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
          "color": "R"
        },
        {
          "row": 1,
          "col": 2,
          "color": "B"
        },
        {
          "row": 1,
          "col": 3,
          "color": "R"
        },
        {
          "row": 2,
          "col": 1,
          "color": "R"
        },
        {
          "row": 2,
          "col": 4,
          "color": "B"
        },
        {
          "row": 3,
          "col": 1,
          "color": "R"
        },
        {
          "row": 3,
          "col": 6,
          "color": "G"
        },
        {
          "row": 4,
          "col": 6,
          "color": "R"
        },
        {
          "row": 6,
          "col": 1,
          "color": "G"
        },
        {
          "row": 6,
          "col": 5,
          "color": "G"
        }
      ],
      "clues": [
        {
          "row": 1,
          "col": 3,
          "value": 3
        },
        {
          "row": 1,
          "col": 4,
          "value": 3
        },
        {
          "row": 2,
          "col": 5,
          "value": 1
        },
        {
          "row": 2,
          "col": 6,
          "value": 0
        },
        {
          "row": 3,
          "col": 2,
          "value": 3
        },
        {
          "row": 3,
          "col": 4,
          "value": 1
        },
        {
          "row": 4,
          "col": 1,
          "value": 0
        },
        {
          "row": 4,
          "col": 2,
          "value": 6
        },
        {
          "row": 4,
          "col": 5,
          "value": 0
        },
        {
          "row": 5,
          "col": 6,
          "value": 1
        },
        {
          "row": 6,
          "col": 1,
          "value": 0
        },
        {
          "row": 6,
          "col": 3,
          "value": 3
        },
        {
          "row": 6,
          "col": 5,
          "value": 3
        },
        {
          "row": 6,
          "col": 6,
          "value": 1
        }
      ],
      "first_hint": "(6,1) は 緑 の0なので、周囲はすべて緑以外です。"
    },
    {
      "id": "REVIEW-BALANCE-BEGINNER-01",
      "title": "初期情報バランス案・初級（色付き数字4／色のみ6／数字のみ12／空欄14）",
      "difficulty": "初級",
      "solver_tier": "BEGINNER",
      "balance_review": true,
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
          "col": 5,
          "color": "G"
        },
        {
          "row": 2,
          "col": 6,
          "color": "R"
        },
        {
          "row": 3,
          "col": 1,
          "color": "R"
        },
        {
          "row": 3,
          "col": 2,
          "color": "G"
        },
        {
          "row": 3,
          "col": 6,
          "color": "G"
        },
        {
          "row": 4,
          "col": 2,
          "color": "G"
        },
        {
          "row": 4,
          "col": 5,
          "color": "G"
        },
        {
          "row": 5,
          "col": 1,
          "color": "R"
        },
        {
          "row": 5,
          "col": 3,
          "color": "B"
        },
        {
          "row": 6,
          "col": 6,
          "color": "B"
        }
      ],
      "clues": [
        {
          "row": 1,
          "col": 1,
          "value": 2
        },
        {
          "row": 1,
          "col": 2,
          "value": 1
        },
        {
          "row": 1,
          "col": 4,
          "value": 2
        },
        {
          "row": 1,
          "col": 5,
          "value": 2
        },
        {
          "row": 2,
          "col": 4,
          "value": 2
        },
        {
          "row": 3,
          "col": 1,
          "value": 2
        },
        {
          "row": 3,
          "col": 4,
          "value": 1
        },
        {
          "row": 3,
          "col": 5,
          "value": 2
        },
        {
          "row": 3,
          "col": 6,
          "value": 1
        },
        {
          "row": 4,
          "col": 1,
          "value": 1
        },
        {
          "row": 4,
          "col": 3,
          "value": 1
        },
        {
          "row": 4,
          "col": 6,
          "value": 3
        },
        {
          "row": 5,
          "col": 3,
          "value": 1
        },
        {
          "row": 5,
          "col": 5,
          "value": 4
        },
        {
          "row": 6,
          "col": 2,
          "value": 3
        },
        {
          "row": 6,
          "col": 5,
          "value": 0
        }
      ],
      "first_hint": "(3,6) の 緑 は必要な1個に達したので、残る周囲へは入りません。"
    },
    {
      "id": "REVIEW-BALANCE-INTERMEDIATE-01",
      "title": "初期情報バランス案・中級（色付き数字4／色のみ3／数字のみ13／空欄16）",
      "difficulty": "中級",
      "solver_tier": "INTERMEDIATE",
      "balance_review": true,
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
          "col": 4,
          "color": "R"
        },
        {
          "row": 1,
          "col": 6,
          "color": "R"
        },
        {
          "row": 2,
          "col": 3,
          "color": "G"
        },
        {
          "row": 5,
          "col": 3,
          "color": "G"
        },
        {
          "row": 6,
          "col": 1,
          "color": "B"
        },
        {
          "row": 6,
          "col": 2,
          "color": "R"
        },
        {
          "row": 6,
          "col": 5,
          "color": "G"
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
          "col": 2,
          "value": 3
        },
        {
          "row": 1,
          "col": 3,
          "value": 0
        },
        {
          "row": 1,
          "col": 4,
          "value": 2
        },
        {
          "row": 1,
          "col": 6,
          "value": 1
        },
        {
          "row": 2,
          "col": 2,
          "value": 4
        },
        {
          "row": 2,
          "col": 3,
          "value": 3
        },
        {
          "row": 2,
          "col": 5,
          "value": 2
        },
        {
          "row": 3,
          "col": 4,
          "value": 3
        },
        {
          "row": 3,
          "col": 5,
          "value": 0
        },
        {
          "row": 4,
          "col": 1,
          "value": 2
        },
        {
          "row": 4,
          "col": 6,
          "value": 1
        },
        {
          "row": 5,
          "col": 3,
          "value": 2
        },
        {
          "row": 5,
          "col": 4,
          "value": 4
        },
        {
          "row": 5,
          "col": 6,
          "value": 1
        },
        {
          "row": 6,
          "col": 4,
          "value": 2
        },
        {
          "row": 6,
          "col": 6,
          "value": 1
        }
      ],
      "first_hint": "(1,1) の数字は近傍数と同じなので、中心と周囲はすべて同色です。"
    },
    {
      "id": "REVIEW-BALANCE-ADVANCED-01",
      "title": "初期情報バランス案・上級（色付き数字2／色のみ8／数字のみ10／空欄16）",
      "difficulty": "上級",
      "solver_tier": "ADVANCED",
      "balance_review": true,
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
          "color": "R"
        },
        {
          "row": 1,
          "col": 2,
          "color": "B"
        },
        {
          "row": 1,
          "col": 3,
          "color": "R"
        },
        {
          "row": 2,
          "col": 1,
          "color": "R"
        },
        {
          "row": 2,
          "col": 4,
          "color": "B"
        },
        {
          "row": 3,
          "col": 1,
          "color": "R"
        },
        {
          "row": 3,
          "col": 6,
          "color": "G"
        },
        {
          "row": 4,
          "col": 6,
          "color": "R"
        },
        {
          "row": 6,
          "col": 1,
          "color": "G"
        },
        {
          "row": 6,
          "col": 5,
          "color": "G"
        }
      ],
      "clues": [
        {
          "row": 1,
          "col": 3,
          "value": 3
        },
        {
          "row": 1,
          "col": 4,
          "value": 3
        },
        {
          "row": 2,
          "col": 5,
          "value": 1
        },
        {
          "row": 2,
          "col": 6,
          "value": 0
        },
        {
          "row": 3,
          "col": 2,
          "value": 3
        },
        {
          "row": 3,
          "col": 4,
          "value": 1
        },
        {
          "row": 4,
          "col": 1,
          "value": 0
        },
        {
          "row": 4,
          "col": 5,
          "value": 0
        },
        {
          "row": 5,
          "col": 2,
          "value": 6
        },
        {
          "row": 5,
          "col": 6,
          "value": 1
        },
        {
          "row": 6,
          "col": 5,
          "value": 3
        },
        {
          "row": 6,
          "col": 6,
          "value": 1
        }
      ],
      "first_hint": "(1,3) の 赤 を3個置ける場所がちょうど必要数しかないので、すべて確定します。"
    },
    {
      "id": "FORMAL-REVIEW-6X6-BEGINNER-01",
      "title": "6×6 初級 正式レビュー候補 1",
      "difficulty": "初級",
      "solver_tier": "BEGINNER",
      "playtest": true,
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
          "col": 3,
          "color": "R"
        },
        {
          "row": 1,
          "col": 6,
          "color": "G"
        },
        {
          "row": 2,
          "col": 1,
          "color": "R"
        },
        {
          "row": 2,
          "col": 4,
          "color": "R"
        },
        {
          "row": 3,
          "col": 1,
          "color": "G"
        },
        {
          "row": 4,
          "col": 5,
          "color": "G"
        },
        {
          "row": 5,
          "col": 1,
          "color": "G"
        },
        {
          "row": 5,
          "col": 3,
          "color": "R"
        },
        {
          "row": 6,
          "col": 2,
          "color": "B"
        },
        {
          "row": 6,
          "col": 5,
          "color": "B"
        }
      ],
      "clues": [
        {
          "row": 1,
          "col": 3,
          "value": 1
        },
        {
          "row": 2,
          "col": 1,
          "value": 2
        },
        {
          "row": 2,
          "col": 3,
          "value": 2
        },
        {
          "row": 2,
          "col": 5,
          "value": 4
        },
        {
          "row": 2,
          "col": 6,
          "value": 0
        },
        {
          "row": 3,
          "col": 1,
          "value": 2
        },
        {
          "row": 3,
          "col": 3,
          "value": 1
        },
        {
          "row": 4,
          "col": 2,
          "value": 1
        },
        {
          "row": 4,
          "col": 3,
          "value": 4
        },
        {
          "row": 4,
          "col": 4,
          "value": 1
        },
        {
          "row": 5,
          "col": 5,
          "value": 2
        },
        {
          "row": 5,
          "col": 6,
          "value": 3
        },
        {
          "row": 6,
          "col": 2,
          "value": 3
        },
        {
          "row": 6,
          "col": 4,
          "value": 1
        }
      ],
      "first_hint": "(1,3) の 赤 は必要な1個に達したので、残る周囲へは入りません。",
      "formal_review_candidate": true
    },
    {
      "id": "FORMAL-REVIEW-6X6-BEGINNER-02",
      "title": "6×6 初級 正式レビュー候補 2",
      "difficulty": "初級",
      "solver_tier": "BEGINNER",
      "playtest": true,
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
          "col": 3,
          "color": "R"
        },
        {
          "row": 1,
          "col": 5,
          "color": "B"
        },
        {
          "row": 2,
          "col": 1,
          "color": "R"
        },
        {
          "row": 3,
          "col": 2,
          "color": "B"
        },
        {
          "row": 3,
          "col": 3,
          "color": "B"
        },
        {
          "row": 3,
          "col": 4,
          "color": "R"
        },
        {
          "row": 3,
          "col": 6,
          "color": "G"
        },
        {
          "row": 4,
          "col": 3,
          "color": "G"
        },
        {
          "row": 5,
          "col": 3,
          "color": "R"
        },
        {
          "row": 6,
          "col": 1,
          "color": "G"
        },
        {
          "row": 6,
          "col": 2,
          "color": "G"
        },
        {
          "row": 6,
          "col": 6,
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
          "col": 5,
          "value": 2
        },
        {
          "row": 2,
          "col": 1,
          "value": 2
        },
        {
          "row": 2,
          "col": 2,
          "value": 1
        },
        {
          "row": 3,
          "col": 1,
          "value": 1
        },
        {
          "row": 3,
          "col": 4,
          "value": 5
        },
        {
          "row": 3,
          "col": 6,
          "value": 2
        },
        {
          "row": 4,
          "col": 1,
          "value": 1
        },
        {
          "row": 4,
          "col": 3,
          "value": 2
        },
        {
          "row": 4,
          "col": 6,
          "value": 1
        },
        {
          "row": 5,
          "col": 2,
          "value": 2
        },
        {
          "row": 5,
          "col": 5,
          "value": 5
        },
        {
          "row": 6,
          "col": 3,
          "value": 1
        }
      ],
      "first_hint": "(1,1) は0なので、周囲に確定済みの色は中心色になれません。",
      "formal_review_candidate": true
    },
    {
      "id": "FORMAL-REVIEW-6X6-BEGINNER-03",
      "title": "6×6 初級 正式レビュー候補 3",
      "difficulty": "初級",
      "solver_tier": "BEGINNER",
      "playtest": true,
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
          "color": "B"
        },
        {
          "row": 1,
          "col": 4,
          "color": "B"
        },
        {
          "row": 1,
          "col": 6,
          "color": "R"
        },
        {
          "row": 2,
          "col": 1,
          "color": "R"
        },
        {
          "row": 3,
          "col": 5,
          "color": "B"
        },
        {
          "row": 4,
          "col": 1,
          "color": "R"
        },
        {
          "row": 4,
          "col": 3,
          "color": "B"
        },
        {
          "row": 5,
          "col": 3,
          "color": "R"
        },
        {
          "row": 5,
          "col": 6,
          "color": "R"
        },
        {
          "row": 6,
          "col": 2,
          "color": "R"
        }
      ],
      "clues": [
        {
          "row": 1,
          "col": 1,
          "value": 1
        },
        {
          "row": 2,
          "col": 4,
          "value": 6
        },
        {
          "row": 3,
          "col": 2,
          "value": 1
        },
        {
          "row": 3,
          "col": 3,
          "value": 6
        },
        {
          "row": 3,
          "col": 5,
          "value": 0
        },
        {
          "row": 3,
          "col": 6,
          "value": 0
        },
        {
          "row": 4,
          "col": 2,
          "value": 1
        },
        {
          "row": 4,
          "col": 5,
          "value": 5
        },
        {
          "row": 5,
          "col": 2,
          "value": 3
        },
        {
          "row": 5,
          "col": 5,
          "value": 6
        },
        {
          "row": 6,
          "col": 3,
          "value": 3
        }
      ],
      "first_hint": "(3,5) は 青 の0なので、周囲はすべて青以外です。",
      "formal_review_candidate": true
    },
    {
      "id": "FORMAL-REVIEW-6X6-BEGINNER-04",
      "title": "6×6 初級 正式レビュー候補 4",
      "difficulty": "初級",
      "solver_tier": "BEGINNER",
      "playtest": true,
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
          "col": 3,
          "color": "G"
        },
        {
          "row": 1,
          "col": 5,
          "color": "B"
        },
        {
          "row": 2,
          "col": 1,
          "color": "R"
        },
        {
          "row": 2,
          "col": 6,
          "color": "B"
        },
        {
          "row": 3,
          "col": 2,
          "color": "B"
        },
        {
          "row": 3,
          "col": 4,
          "color": "B"
        },
        {
          "row": 3,
          "col": 5,
          "color": "B"
        },
        {
          "row": 4,
          "col": 1,
          "color": "R"
        },
        {
          "row": 4,
          "col": 5,
          "color": "B"
        },
        {
          "row": 5,
          "col": 4,
          "color": "G"
        },
        {
          "row": 6,
          "col": 1,
          "color": "R"
        },
        {
          "row": 6,
          "col": 5,
          "color": "G"
        }
      ],
      "clues": [
        {
          "row": 1,
          "col": 2,
          "value": 2
        },
        {
          "row": 1,
          "col": 3,
          "value": 1
        },
        {
          "row": 2,
          "col": 1,
          "value": 2
        },
        {
          "row": 2,
          "col": 4,
          "value": 1
        },
        {
          "row": 2,
          "col": 5,
          "value": 3
        },
        {
          "row": 3,
          "col": 1,
          "value": 1
        },
        {
          "row": 3,
          "col": 3,
          "value": 4
        },
        {
          "row": 3,
          "col": 6,
          "value": 2
        },
        {
          "row": 4,
          "col": 4,
          "value": 5
        },
        {
          "row": 5,
          "col": 2,
          "value": 4
        },
        {
          "row": 5,
          "col": 4,
          "value": 2
        },
        {
          "row": 5,
          "col": 5,
          "value": 3
        },
        {
          "row": 5,
          "col": 6,
          "value": 0
        },
        {
          "row": 6,
          "col": 2,
          "value": 0
        }
      ],
      "first_hint": "(5,6) は0なので、周囲に確定済みの色は中心色になれません。",
      "formal_review_candidate": true
    },
    {
      "id": "FORMAL-REVIEW-6X6-BEGINNER-05",
      "title": "6×6 初級 正式レビュー候補 5",
      "difficulty": "初級",
      "solver_tier": "BEGINNER",
      "playtest": true,
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
          "color": "B"
        },
        {
          "row": 1,
          "col": 4,
          "color": "B"
        },
        {
          "row": 2,
          "col": 1,
          "color": "R"
        },
        {
          "row": 2,
          "col": 5,
          "color": "B"
        },
        {
          "row": 3,
          "col": 4,
          "color": "B"
        },
        {
          "row": 3,
          "col": 5,
          "color": "R"
        },
        {
          "row": 3,
          "col": 6,
          "color": "B"
        },
        {
          "row": 4,
          "col": 2,
          "color": "G"
        },
        {
          "row": 5,
          "col": 2,
          "color": "G"
        },
        {
          "row": 5,
          "col": 4,
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
          "col": 4,
          "value": 2
        },
        {
          "row": 1,
          "col": 6,
          "value": 0
        },
        {
          "row": 2,
          "col": 2,
          "value": 1
        },
        {
          "row": 3,
          "col": 2,
          "value": 2
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
          "col": 4,
          "value": 2
        },
        {
          "row": 4,
          "col": 5,
          "value": 1
        },
        {
          "row": 4,
          "col": 6,
          "value": 2
        },
        {
          "row": 5,
          "col": 1,
          "value": 2
        },
        {
          "row": 5,
          "col": 2,
          "value": 1
        },
        {
          "row": 6,
          "col": 1,
          "value": 2
        },
        {
          "row": 6,
          "col": 3,
          "value": 1
        },
        {
          "row": 6,
          "col": 4,
          "value": 2
        },
        {
          "row": 6,
          "col": 6,
          "value": 0
        }
      ],
      "first_hint": "(1,1) は 青 の0なので、周囲はすべて青以外です。",
      "formal_review_candidate": true
    },
    {
      "id": "FORMAL-REVIEW-6X6-INTERMEDIATE-01",
      "title": "6×6 中級 正式レビュー候補 1",
      "difficulty": "中級",
      "solver_tier": "INTERMEDIATE",
      "playtest": true,
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
          "col": 3,
          "color": "R"
        },
        {
          "row": 1,
          "col": 6,
          "color": "G"
        },
        {
          "row": 2,
          "col": 2,
          "color": "G"
        },
        {
          "row": 3,
          "col": 4,
          "color": "R"
        },
        {
          "row": 3,
          "col": 6,
          "color": "R"
        },
        {
          "row": 4,
          "col": 2,
          "color": "G"
        },
        {
          "row": 4,
          "col": 3,
          "color": "G"
        },
        {
          "row": 4,
          "col": 4,
          "color": "G"
        },
        {
          "row": 4,
          "col": 5,
          "color": "G"
        },
        {
          "row": 5,
          "col": 1,
          "color": "B"
        },
        {
          "row": 5,
          "col": 2,
          "color": "R"
        },
        {
          "row": 6,
          "col": 5,
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
          "value": 0
        },
        {
          "row": 1,
          "col": 5,
          "value": 0
        },
        {
          "row": 2,
          "col": 2,
          "value": 4
        },
        {
          "row": 2,
          "col": 5,
          "value": 2
        },
        {
          "row": 3,
          "col": 2,
          "value": 2
        },
        {
          "row": 3,
          "col": 4,
          "value": 1
        },
        {
          "row": 3,
          "col": 6,
          "value": 2
        },
        {
          "row": 5,
          "col": 2,
          "value": 2
        },
        {
          "row": 5,
          "col": 5,
          "value": 4
        },
        {
          "row": 5,
          "col": 6,
          "value": 0
        },
        {
          "row": 6,
          "col": 2,
          "value": 0
        },
        {
          "row": 6,
          "col": 4,
          "value": 4
        }
      ],
      "first_hint": "(1,2) は0なので、周囲に確定済みの色は中心色になれません。",
      "formal_review_candidate": true
    },
    {
      "id": "FORMAL-REVIEW-6X6-INTERMEDIATE-02",
      "title": "6×6 中級 正式レビュー候補 2",
      "difficulty": "中級",
      "solver_tier": "INTERMEDIATE",
      "playtest": true,
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
          "col": 3,
          "color": "B"
        },
        {
          "row": 1,
          "col": 6,
          "color": "G"
        },
        {
          "row": 2,
          "col": 2,
          "color": "B"
        },
        {
          "row": 3,
          "col": 1,
          "color": "B"
        },
        {
          "row": 3,
          "col": 3,
          "color": "G"
        },
        {
          "row": 3,
          "col": 6,
          "color": "R"
        },
        {
          "row": 4,
          "col": 4,
          "color": "G"
        },
        {
          "row": 6,
          "col": 1,
          "color": "B"
        },
        {
          "row": 6,
          "col": 5,
          "color": "B"
        },
        {
          "row": 6,
          "col": 6,
          "color": "R"
        }
      ],
      "clues": [
        {
          "row": 1,
          "col": 1,
          "value": 2
        },
        {
          "row": 1,
          "col": 2,
          "value": 3
        },
        {
          "row": 1,
          "col": 5,
          "value": 0
        },
        {
          "row": 2,
          "col": 5,
          "value": 2
        },
        {
          "row": 3,
          "col": 2,
          "value": 2
        },
        {
          "row": 3,
          "col": 4,
          "value": 1
        },
        {
          "row": 3,
          "col": 6,
          "value": 2
        },
        {
          "row": 4,
          "col": 2,
          "value": 2
        },
        {
          "row": 4,
          "col": 5,
          "value": 1
        },
        {
          "row": 5,
          "col": 3,
          "value": 4
        },
        {
          "row": 5,
          "col": 4,
          "value": 5
        },
        {
          "row": 5,
          "col": 6,
          "value": 2
        },
        {
          "row": 6,
          "col": 2,
          "value": 1
        },
        {
          "row": 6,
          "col": 4,
          "value": 0
        },
        {
          "row": 6,
          "col": 6,
          "value": 2
        }
      ],
      "first_hint": "(1,1) の 緑 を2個置ける場所がちょうど必要数しかないので、すべて確定します。",
      "formal_review_candidate": true
    },
    {
      "id": "FORMAL-REVIEW-6X6-INTERMEDIATE-03",
      "title": "6×6 中級 正式レビュー候補 3",
      "difficulty": "中級",
      "solver_tier": "INTERMEDIATE",
      "playtest": true,
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
          "col": 2,
          "color": "B"
        },
        {
          "row": 1,
          "col": 3,
          "color": "G"
        },
        {
          "row": 2,
          "col": 4,
          "color": "R"
        },
        {
          "row": 2,
          "col": 6,
          "color": "B"
        },
        {
          "row": 3,
          "col": 1,
          "color": "B"
        },
        {
          "row": 4,
          "col": 1,
          "color": "R"
        },
        {
          "row": 5,
          "col": 1,
          "color": "G"
        },
        {
          "row": 5,
          "col": 6,
          "color": "B"
        },
        {
          "row": 6,
          "col": 1,
          "color": "G"
        }
      ],
      "clues": [
        {
          "row": 1,
          "col": 3,
          "value": 1
        },
        {
          "row": 1,
          "col": 4,
          "value": 2
        },
        {
          "row": 1,
          "col": 5,
          "value": 0
        },
        {
          "row": 2,
          "col": 1,
          "value": 3
        },
        {
          "row": 2,
          "col": 6,
          "value": 3
        },
        {
          "row": 3,
          "col": 4,
          "value": 1
        },
        {
          "row": 3,
          "col": 5,
          "value": 0
        },
        {
          "row": 4,
          "col": 1,
          "value": 3
        },
        {
          "row": 4,
          "col": 2,
          "value": 3
        },
        {
          "row": 4,
          "col": 4,
          "value": 2
        },
        {
          "row": 4,
          "col": 6,
          "value": 1
        },
        {
          "row": 5,
          "col": 2,
          "value": 3
        },
        {
          "row": 5,
          "col": 4,
          "value": 2
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
        },
        {
          "row": 6,
          "col": 6,
          "value": 0
        }
      ],
      "first_hint": "(4,1) の 赤 を3個置ける場所がちょうど必要数しかないので、すべて確定します。",
      "formal_review_candidate": true
    },
    {
      "id": "FORMAL-REVIEW-6X6-INTERMEDIATE-04",
      "title": "6×6 中級 正式レビュー候補 4",
      "difficulty": "中級",
      "solver_tier": "INTERMEDIATE",
      "playtest": true,
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
          "color": "B"
        },
        {
          "row": 2,
          "col": 6,
          "color": "R"
        },
        {
          "row": 3,
          "col": 1,
          "color": "B"
        },
        {
          "row": 4,
          "col": 2,
          "color": "R"
        },
        {
          "row": 5,
          "col": 1,
          "color": "B"
        },
        {
          "row": 5,
          "col": 6,
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
          "value": 1
        },
        {
          "row": 1,
          "col": 5,
          "value": 1
        },
        {
          "row": 1,
          "col": 6,
          "value": 1
        },
        {
          "row": 2,
          "col": 2,
          "value": 2
        },
        {
          "row": 2,
          "col": 3,
          "value": 0
        },
        {
          "row": 2,
          "col": 6,
          "value": 1
        },
        {
          "row": 3,
          "col": 1,
          "value": 2
        },
        {
          "row": 3,
          "col": 3,
          "value": 3
        },
        {
          "row": 3,
          "col": 5,
          "value": 4
        },
        {
          "row": 4,
          "col": 1,
          "value": 0
        },
        {
          "row": 4,
          "col": 2,
          "value": 3
        },
        {
          "row": 4,
          "col": 4,
          "value": 0
        },
        {
          "row": 4,
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
          "col": 4,
          "value": 2
        },
        {
          "row": 6,
          "col": 6,
          "value": 0
        }
      ],
      "first_hint": "(6,1) の数字は近傍数と同じなので、中心と周囲はすべて同色です。",
      "formal_review_candidate": true
    },
    {
      "id": "FORMAL-REVIEW-6X6-INTERMEDIATE-05",
      "title": "6×6 中級 正式レビュー候補 5",
      "difficulty": "中級",
      "solver_tier": "INTERMEDIATE",
      "playtest": true,
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
          "col": 5,
          "color": "B"
        },
        {
          "row": 2,
          "col": 5,
          "color": "R"
        },
        {
          "row": 3,
          "col": 1,
          "color": "G"
        },
        {
          "row": 3,
          "col": 4,
          "color": "B"
        },
        {
          "row": 3,
          "col": 5,
          "color": "G"
        },
        {
          "row": 3,
          "col": 6,
          "color": "B"
        },
        {
          "row": 4,
          "col": 1,
          "color": "B"
        },
        {
          "row": 4,
          "col": 2,
          "color": "B"
        },
        {
          "row": 4,
          "col": 3,
          "color": "R"
        },
        {
          "row": 4,
          "col": 4,
          "color": "R"
        },
        {
          "row": 5,
          "col": 2,
          "color": "G"
        },
        {
          "row": 6,
          "col": 1,
          "color": "G"
        },
        {
          "row": 6,
          "col": 3,
          "color": "G"
        }
      ],
      "clues": [
        {
          "row": 1,
          "col": 2,
          "value": 0
        },
        {
          "row": 1,
          "col": 3,
          "value": 1
        },
        {
          "row": 2,
          "col": 2,
          "value": 2
        },
        {
          "row": 2,
          "col": 6,
          "value": 2
        },
        {
          "row": 3,
          "col": 1,
          "value": 2
        },
        {
          "row": 3,
          "col": 3,
          "value": 1
        },
        {
          "row": 3,
          "col": 4,
          "value": 3
        },
        {
          "row": 3,
          "col": 5,
          "value": 2
        },
        {
          "row": 4,
          "col": 4,
          "value": 3
        },
        {
          "row": 4,
          "col": 5,
          "value": 3
        },
        {
          "row": 5,
          "col": 6,
          "value": 0
        },
        {
          "row": 6,
          "col": 2,
          "value": 2
        },
        {
          "row": 6,
          "col": 5,
          "value": 3
        }
      ],
      "first_hint": "(3,3) の数字1を作れない候補を除きます（赤:2〜6、青:2〜6）。",
      "formal_review_candidate": true
    },
    {
      "id": "FORMAL-REVIEW-6X6-ADVANCED-01",
      "title": "6×6 上級 正式レビュー候補 1",
      "difficulty": "上級",
      "solver_tier": "ADVANCED",
      "playtest": true,
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
          "col": 2,
          "color": "B"
        },
        {
          "row": 1,
          "col": 4,
          "color": "B"
        },
        {
          "row": 2,
          "col": 3,
          "color": "B"
        },
        {
          "row": 3,
          "col": 2,
          "color": "B"
        },
        {
          "row": 4,
          "col": 2,
          "color": "G"
        },
        {
          "row": 5,
          "col": 1,
          "color": "R"
        },
        {
          "row": 5,
          "col": 4,
          "color": "B"
        },
        {
          "row": 6,
          "col": 3,
          "color": "B"
        },
        {
          "row": 6,
          "col": 5,
          "color": "B"
        },
        {
          "row": 6,
          "col": 6,
          "color": "G"
        }
      ],
      "clues": [
        {
          "row": 1,
          "col": 3,
          "value": 2
        },
        {
          "row": 2,
          "col": 1,
          "value": 3
        },
        {
          "row": 2,
          "col": 4,
          "value": 3
        },
        {
          "row": 2,
          "col": 5,
          "value": 4
        },
        {
          "row": 3,
          "col": 1,
          "value": 4
        },
        {
          "row": 4,
          "col": 1,
          "value": 3
        },
        {
          "row": 4,
          "col": 4,
          "value": 5
        },
        {
          "row": 4,
          "col": 5,
          "value": 1
        },
        {
          "row": 4,
          "col": 6,
          "value": 0
        },
        {
          "row": 5,
          "col": 3,
          "value": 4
        },
        {
          "row": 5,
          "col": 6,
          "value": 0
        },
        {
          "row": 6,
          "col": 1,
          "value": 1
        },
        {
          "row": 6,
          "col": 3,
          "value": 1
        }
      ],
      "first_hint": "(6,3) の 青 は必要な1個に達したので、残る周囲へは入りません。",
      "formal_review_candidate": true
    },
    {
      "id": "FORMAL-REVIEW-6X6-ADVANCED-02",
      "title": "6×6 上級 正式レビュー候補 2",
      "difficulty": "上級",
      "solver_tier": "ADVANCED",
      "playtest": true,
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
          "color": "R"
        },
        {
          "row": 1,
          "col": 2,
          "color": "R"
        },
        {
          "row": 1,
          "col": 3,
          "color": "R"
        },
        {
          "row": 1,
          "col": 6,
          "color": "G"
        },
        {
          "row": 2,
          "col": 1,
          "color": "B"
        },
        {
          "row": 3,
          "col": 1,
          "color": "R"
        },
        {
          "row": 5,
          "col": 5,
          "color": "R"
        },
        {
          "row": 6,
          "col": 5,
          "color": "G"
        }
      ],
      "clues": [
        {
          "row": 1,
          "col": 4,
          "value": 0
        },
        {
          "row": 2,
          "col": 6,
          "value": 4
        },
        {
          "row": 3,
          "col": 1,
          "value": 3
        },
        {
          "row": 3,
          "col": 3,
          "value": 4
        },
        {
          "row": 4,
          "col": 2,
          "value": 1
        },
        {
          "row": 4,
          "col": 4,
          "value": 1
        },
        {
          "row": 4,
          "col": 5,
          "value": 2
        },
        {
          "row": 5,
          "col": 2,
          "value": 1
        },
        {
          "row": 5,
          "col": 4,
          "value": 0
        },
        {
          "row": 5,
          "col": 6,
          "value": 3
        },
        {
          "row": 6,
          "col": 2,
          "value": 0
        },
        {
          "row": 6,
          "col": 3,
          "value": 1
        },
        {
          "row": 6,
          "col": 6,
          "value": 1
        }
      ],
      "first_hint": "(1,4) は0なので、周囲に確定済みの色は中心色になれません。",
      "formal_review_candidate": true
    },
    {
      "id": "FORMAL-REVIEW-6X6-ADVANCED-03",
      "title": "6×6 上級 正式レビュー候補 3",
      "difficulty": "上級",
      "solver_tier": "ADVANCED",
      "playtest": true,
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
          "col": 6,
          "color": "B"
        },
        {
          "row": 3,
          "col": 2,
          "color": "B"
        },
        {
          "row": 3,
          "col": 4,
          "color": "B"
        },
        {
          "row": 4,
          "col": 1,
          "color": "G"
        },
        {
          "row": 4,
          "col": 4,
          "color": "R"
        },
        {
          "row": 5,
          "col": 5,
          "color": "R"
        }
      ],
      "clues": [
        {
          "row": 1,
          "col": 5,
          "value": 1
        },
        {
          "row": 2,
          "col": 1,
          "value": 0
        },
        {
          "row": 2,
          "col": 2,
          "value": 2
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
          "col": 3,
          "value": 2
        },
        {
          "row": 3,
          "col": 4,
          "value": 3
        },
        {
          "row": 3,
          "col": 5,
          "value": 3
        },
        {
          "row": 4,
          "col": 1,
          "value": 1
        },
        {
          "row": 4,
          "col": 4,
          "value": 1
        },
        {
          "row": 4,
          "col": 5,
          "value": 3
        },
        {
          "row": 4,
          "col": 6,
          "value": 0
        },
        {
          "row": 5,
          "col": 2,
          "value": 2
        },
        {
          "row": 5,
          "col": 4,
          "value": 1
        },
        {
          "row": 5,
          "col": 5,
          "value": 1
        },
        {
          "row": 6,
          "col": 3,
          "value": 3
        },
        {
          "row": 6,
          "col": 4,
          "value": 3
        },
        {
          "row": 6,
          "col": 5,
          "value": 1
        }
      ],
      "first_hint": "(4,4) の 赤 は必要な1個に達したので、残る周囲へは入りません。",
      "formal_review_candidate": true
    },
    {
      "id": "FORMAL-REVIEW-6X6-ADVANCED-04",
      "title": "6×6 上級 正式レビュー候補 4",
      "difficulty": "上級",
      "solver_tier": "ADVANCED",
      "playtest": true,
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
          "col": 3,
          "color": "B"
        },
        {
          "row": 1,
          "col": 5,
          "color": "G"
        },
        {
          "row": 2,
          "col": 1,
          "color": "G"
        },
        {
          "row": 2,
          "col": 3,
          "color": "B"
        },
        {
          "row": 2,
          "col": 4,
          "color": "R"
        },
        {
          "row": 2,
          "col": 6,
          "color": "G"
        },
        {
          "row": 3,
          "col": 5,
          "color": "B"
        },
        {
          "row": 4,
          "col": 1,
          "color": "G"
        },
        {
          "row": 6,
          "col": 1,
          "color": "R"
        }
      ],
      "clues": [
        {
          "row": 1,
          "col": 5,
          "value": 2
        },
        {
          "row": 1,
          "col": 6,
          "value": 0
        },
        {
          "row": 2,
          "col": 2,
          "value": 5
        },
        {
          "row": 2,
          "col": 4,
          "value": 2
        },
        {
          "row": 3,
          "col": 1,
          "value": 2
        },
        {
          "row": 3,
          "col": 5,
          "value": 4
        },
        {
          "row": 4,
          "col": 3,
          "value": 1
        },
        {
          "row": 4,
          "col": 4,
          "value": 3
        },
        {
          "row": 4,
          "col": 5,
          "value": 3
        },
        {
          "row": 4,
          "col": 6,
          "value": 0
        },
        {
          "row": 5,
          "col": 2,
          "value": 1
        },
        {
          "row": 5,
          "col": 5,
          "value": 1
        },
        {
          "row": 6,
          "col": 2,
          "value": 1
        },
        {
          "row": 6,
          "col": 3,
          "value": 1
        },
        {
          "row": 6,
          "col": 4,
          "value": 0
        },
        {
          "row": 6,
          "col": 5,
          "value": 1
        }
      ],
      "first_hint": "(1,6) は0なので、周囲に確定済みの色は中心色になれません。",
      "formal_review_candidate": true
    },
    {
      "id": "FORMAL-REVIEW-6X6-ADVANCED-05",
      "title": "6×6 上級 正式レビュー候補 5",
      "difficulty": "上級",
      "solver_tier": "ADVANCED",
      "playtest": true,
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
          "col": 6,
          "color": "R"
        },
        {
          "row": 2,
          "col": 1,
          "color": "R"
        },
        {
          "row": 2,
          "col": 3,
          "color": "B"
        },
        {
          "row": 3,
          "col": 3,
          "color": "B"
        },
        {
          "row": 3,
          "col": 4,
          "color": "G"
        },
        {
          "row": 3,
          "col": 5,
          "color": "G"
        },
        {
          "row": 5,
          "col": 1,
          "color": "B"
        },
        {
          "row": 5,
          "col": 6,
          "color": "R"
        },
        {
          "row": 6,
          "col": 2,
          "color": "B"
        },
        {
          "row": 6,
          "col": 5,
          "color": "R"
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
          "value": 1
        },
        {
          "row": 2,
          "col": 2,
          "value": 2
        },
        {
          "row": 2,
          "col": 3,
          "value": 2
        },
        {
          "row": 2,
          "col": 5,
          "value": 0
        },
        {
          "row": 2,
          "col": 6,
          "value": 3
        },
        {
          "row": 3,
          "col": 1,
          "value": 2
        },
        {
          "row": 3,
          "col": 3,
          "value": 1
        },
        {
          "row": 3,
          "col": 5,
          "value": 2
        },
        {
          "row": 4,
          "col": 1,
          "value": 0
        },
        {
          "row": 4,
          "col": 3,
          "value": 4
        },
        {
          "row": 4,
          "col": 4,
          "value": 2
        },
        {
          "row": 5,
          "col": 2,
          "value": 4
        },
        {
          "row": 5,
          "col": 5,
          "value": 3
        },
        {
          "row": 5,
          "col": 6,
          "value": 1
        },
        {
          "row": 6,
          "col": 6,
          "value": 0
        }
      ],
      "first_hint": "(3,3) の 青 は必要な1個に達したので、残る周囲へは入りません。",
      "formal_review_candidate": true
    }
  ]
};

  root.COLOR_MOSAIC_PUZZLES = data;
  if (typeof module === "object" && module.exports) {
    module.exports = data;
  }
})(typeof globalThis !== "undefined" ? globalThis : this);
