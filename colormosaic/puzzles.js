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

  const balanceDifficulty = {
    BEGINNER: "初級",
    INTERMEDIATE: "中級",
    ADVANCED: "上級",
  };
  const balancePuzzles = [
    ["BALANCE-8X8-BEGINNER-01","BEGINNER",8,8,1,820260764,"frontier_beginner","sound-branch-free-completion","d5dea1be3c4b659f1dfa5ecc281c7bd3f03c0b0a3aabfb23cd7da9fee6208228",[[1,1,"B"],[1,3,"R"],[1,4,"G"],[1,6,"R"],[1,8,"B"],[2,1,"R"],[3,3,"R"],[3,4,"B"],[4,7,"R"],[6,1,"G"],[6,8,"B"],[7,1,"B"],[7,4,"G"],[7,7,"R"],[8,5,"R"]],[[1,5,3],[1,7,2],[1,8,0],[2,1,4],[2,4,4],[2,8,4],[3,3,6],[3,5,0],[4,1,1],[4,2,2],[4,3,4],[4,5,2],[4,6,2],[4,7,2],[4,8,0],[5,3,2],[5,4,0],[5,8,3],[6,2,1],[6,3,1],[6,4,2],[6,6,0],[6,7,3],[7,2,3],[7,5,2],[7,6,3],[7,7,2],[8,2,1],[8,3,2],[8,6,0],[8,7,2]]],
    ["BALANCE-8X8-BEGINNER-02","BEGINNER",8,8,2,820260760,"frontier_beginner","sound-branch-free-completion","5fce6daf8b9e4834f2bf644f2741a1fa3c8afdf202c03a4db0e0b20f71895c8b",[[1,1,"B"],[1,2,"G"],[1,6,"G"],[1,8,"G"],[2,1,"R"],[3,8,"R"],[4,4,"G"],[4,7,"B"],[4,8,"G"],[5,1,"G"],[5,5,"B"],[7,3,"G"],[8,5,"B"],[8,6,"B"],[8,8,"B"]],[[1,2,2],[1,4,1],[1,5,3],[1,7,1],[2,1,1],[2,3,2],[2,6,0],[2,7,4],[2,8,0],[3,2,1],[3,6,3],[4,4,5],[4,5,3],[4,7,1],[4,8,1],[5,1,0],[5,2,2],[5,4,5],[5,6,3],[5,7,0],[6,1,3],[6,3,2],[6,4,2],[6,7,1],[7,1,3],[7,5,2],[7,6,1],[7,7,1],[7,8,3],[8,2,0],[8,3,2],[8,6,3]]],
    ["BALANCE-8X8-INTERMEDIATE-01","INTERMEDIATE",8,8,1,820260761,"frontier_intermediate","sound-branch-free-completion","062fac6740cc3b88bc7e9f95b89ab085c4670bdbdb385b7a48cac9bbd4d77043",[[1,1,"G"],[1,5,"R"],[1,6,"R"],[3,2,"R"],[4,1,"R"],[4,2,"G"],[4,8,"B"],[5,3,"G"],[6,1,"B"],[6,3,"R"],[7,8,"R"],[8,2,"G"],[8,3,"R"],[8,4,"R"]],[[1,2,4],[1,5,1],[2,3,4],[2,5,1],[2,6,4],[2,7,4],[3,1,0],[3,2,4],[3,3,1],[3,4,4],[3,7,3],[4,2,4],[4,3,1],[4,6,2],[4,7,0],[5,5,0],[5,6,3],[6,2,2],[6,4,1],[6,5,1],[6,7,1],[6,8,0],[7,1,0],[7,2,2],[7,4,4],[7,6,0],[7,7,1],[7,8,2]]],
    ["BALANCE-8X8-INTERMEDIATE-02","INTERMEDIATE",8,8,2,820260729,"frontier_intermediate","sound-branch-free-completion","92e32429a8dfce06eb90165f692aca723397b98922129e596c0df4064640c4ee",[[1,5,"G"],[2,1,"G"],[2,3,"R"],[2,8,"B"],[3,3,"G"],[3,6,"R"],[3,7,"G"],[4,8,"G"],[6,1,"G"],[6,4,"R"],[7,5,"R"],[7,8,"R"]],[[2,2,6],[2,3,7],[2,6,7],[2,7,5],[3,2,6],[3,3,0],[3,4,4],[3,5,4],[3,8,1],[4,5,3],[4,7,3],[5,2,5],[5,4,3],[6,6,7],[6,7,7],[7,2,7],[7,3,1],[7,5,1],[7,6,7],[7,7,7],[8,3,4]]],
    ["BALANCE-8X8-ADVANCED-01","ADVANCED",8,8,1,820260729,"frontier_advanced","sound-branch-free-completion","c24a51c9b83bd9fe2707d7288a1d1a8f26b4b370e15c45997e2a48f0c3e7a54f",[[1,5,"G"],[2,1,"G"],[2,3,"R"],[2,8,"B"],[3,3,"G"],[3,6,"R"],[3,7,"G"],[4,8,"G"],[6,4,"R"],[7,5,"R"],[7,8,"R"]],[[2,2,6],[2,3,7],[2,6,7],[2,7,5],[3,2,6],[3,3,0],[3,4,4],[3,5,4],[3,8,1],[4,5,3],[4,7,3],[5,2,5],[5,4,3],[6,6,7],[6,7,7],[7,2,7],[7,3,1],[7,5,1],[7,6,7],[7,7,7],[8,3,4]]],
    ["BALANCE-8X8-ADVANCED-02","ADVANCED",8,8,2,820260757,"minimal_unique","construct-minimal-unique","3b85782cf5e7f09347e4fda31a6a306cc63fe8aa58a6221c9044e27c9de056e7",[[1,3,"G"],[1,4,"G"],[1,8,"R"],[2,1,"G"],[3,2,"R"],[4,1,"G"],[4,5,"R"],[8,6,"B"]],[[2,1,4],[2,6,8],[3,4,6],[3,7,8],[4,2,0],[4,4,4],[5,3,5],[5,4,2],[5,7,8],[6,2,8],[6,4,2],[6,5,2],[6,6,6],[7,2,8],[7,3,7],[7,5,4],[7,8,5],[8,6,0]]],
    ["BALANCE-10X10-BEGINNER-01","BEGINNER",10,10,1,1021260730,"frontier_beginner","sound-branch-free-completion","398a12fa8282268dd55dc9da041b959e3c1037ffc5ceb03250dd57606ee542c1",[[1,9,"G"],[2,8,"B"],[3,4,"B"],[3,5,"R"],[3,6,"R"],[5,2,"B"],[5,5,"G"],[5,6,"G"],[5,9,"R"],[7,7,"R"],[8,2,"R"],[8,3,"G"],[8,10,"G"],[9,5,"R"],[9,6,"R"],[9,7,"G"],[10,5,"G"],[10,6,"R"],[10,8,"G"],[10,9,"B"]],[[1,2,0],[1,3,3],[1,5,2],[1,7,2],[1,9,3],[1,10,3],[2,1,2],[2,2,2],[2,4,3],[2,5,3],[2,8,1],[3,1,3],[3,2,4],[3,7,3],[3,10,3],[4,1,3],[4,3,4],[4,6,3],[4,8,3],[4,10,3],[5,1,3],[5,3,3],[5,5,3],[5,6,4],[5,9,3],[5,10,3],[6,2,3],[6,3,4],[6,6,3],[6,8,3],[6,10,3],[7,1,3],[7,2,4],[7,3,3],[7,6,4],[7,9,3],[8,2,4],[8,3,5],[8,4,4],[8,5,3],[8,8,3],[8,9,4],[8,10,3],[9,4,3],[9,5,2],[9,6,3],[10,1,3],[10,4,1],[10,7,3],[10,10,3]]],
    ["BALANCE-10X10-BEGINNER-02","BEGINNER",10,10,2,1021260731,"frontier_beginner","sound-branch-free-completion","8b3cb8230203acaf51f12db3ba933493a7df3b11aed0d27e80256b1af0cbfb3f",[[1,5,"G"],[1,10,"R"],[2,3,"G"],[3,3,"B"],[3,9,"B"],[5,5,"G"],[6,3,"R"],[6,4,"R"],[6,5,"G"],[6,6,"G"],[7,1,"R"],[7,6,"B"],[7,8,"R"],[8,8,"R"],[9,8,"R"],[9,9,"B"],[10,5,"R"]],[[1,1,2],[1,3,3],[2,1,0],[2,2,2],[2,5,3],[2,6,3],[2,7,3],[2,8,2],[2,9,3],[3,1,3],[3,3,3],[3,4,4],[3,6,3],[3,10,2],[4,2,3],[4,4,3],[4,5,3],[4,6,4],[4,8,3],[4,10,0],[5,2,4],[5,6,5],[5,9,3],[6,1,3],[6,3,3],[6,5,4],[6,7,4],[6,9,4],[7,1,2],[7,3,4],[7,6,5],[7,9,1],[7,10,2],[8,3,5],[8,5,4],[8,8,3],[8,9,2],[9,5,3],[9,8,1],[9,9,2],[9,10,0],[10,1,3],[10,4,3],[10,6,3],[10,7,2],[10,8,2],[10,10,2]]],
    ["BALANCE-10X10-INTERMEDIATE-01","INTERMEDIATE",10,10,1,1021260730,"frontier_intermediate","sound-branch-free-completion","14a68c561a264d7a7f9037e558d14fa8201fa9f47a0f8eb903c7a3b05396c6de",[[1,9,"G"],[2,8,"B"],[3,4,"B"],[3,5,"R"],[3,6,"R"],[5,2,"B"],[5,5,"G"],[5,6,"G"],[5,9,"R"],[7,7,"R"],[8,2,"R"],[8,3,"G"],[8,10,"G"],[9,5,"R"],[9,6,"R"],[9,7,"G"],[10,5,"G"],[10,6,"R"],[10,8,"G"],[10,9,"B"]],[[1,2,0],[1,3,3],[1,5,2],[1,7,2],[1,9,3],[1,10,3],[2,1,2],[2,2,2],[2,4,3],[2,5,3],[2,8,1],[3,1,3],[3,7,3],[3,10,3],[4,1,3],[4,3,4],[4,6,3],[4,8,3],[4,10,3],[5,1,3],[5,3,3],[5,6,4],[5,9,3],[6,2,3],[6,3,4],[6,6,3],[6,8,3],[6,10,3],[7,1,3],[7,2,4],[7,3,3],[7,6,4],[7,9,3],[8,2,4],[8,3,5],[8,4,4],[8,5,3],[8,8,3],[8,9,4],[8,10,3],[9,4,3],[9,5,2],[9,6,3],[10,1,3],[10,4,1],[10,7,3],[10,10,3]]],
    ["BALANCE-10X10-INTERMEDIATE-02","INTERMEDIATE",10,10,2,1021260731,"frontier_intermediate","sound-branch-free-completion","b0f990570acf9f1be045691c0cdf8cdf0cba7071a778fa3f6616a8547b39bef9",[[1,5,"G"],[1,10,"R"],[2,3,"G"],[3,3,"B"],[3,9,"B"],[5,5,"G"],[6,3,"R"],[6,4,"R"],[6,5,"G"],[6,6,"G"],[7,1,"R"],[7,6,"B"],[7,8,"R"],[8,8,"R"],[9,8,"R"],[9,9,"B"],[10,5,"R"]],[[1,1,2],[1,3,3],[2,1,0],[2,2,2],[2,5,3],[2,6,3],[2,7,3],[2,8,2],[2,9,3],[3,1,3],[3,3,3],[3,4,4],[3,6,3],[3,10,2],[4,2,3],[4,4,3],[4,5,3],[4,6,4],[4,8,3],[4,10,0],[5,2,4],[5,6,5],[5,9,3],[6,1,3],[6,3,3],[6,7,4],[6,9,4],[7,1,2],[7,3,4],[7,6,5],[7,9,1],[7,10,2],[8,3,5],[8,5,4],[8,8,3],[8,9,2],[9,5,3],[9,8,1],[9,9,2],[9,10,0],[10,1,3],[10,4,3],[10,6,3],[10,7,2],[10,8,2],[10,10,2]]],
    ["BALANCE-10X10-ADVANCED-01","ADVANCED",10,10,1,1021260730,"frontier_advanced","sound-branch-free-completion","19a2ade3b31c80ef4c61c1b6af6f4b71e4a0bf44c06531ebfc5dcad0686083ec",[[1,9,"G"],[2,8,"B"],[3,4,"B"],[3,5,"R"],[3,6,"R"],[5,2,"B"],[5,5,"G"],[5,6,"G"],[5,9,"R"],[7,7,"R"],[8,2,"R"],[8,10,"G"],[9,5,"R"],[9,6,"R"],[9,7,"G"],[10,5,"G"],[10,6,"R"],[10,8,"G"],[10,9,"B"]],[[1,2,0],[1,3,3],[1,5,2],[1,7,2],[1,9,3],[1,10,3],[2,1,2],[2,2,2],[2,4,3],[2,5,3],[2,8,1],[3,1,3],[3,7,3],[3,10,3],[4,1,3],[4,3,4],[4,6,3],[4,8,3],[4,10,3],[5,1,3],[5,3,3],[5,6,4],[5,9,3],[6,2,3],[6,3,4],[6,6,3],[6,8,3],[6,10,3],[7,1,3],[7,2,4],[7,3,3],[7,6,4],[7,9,3],[8,2,4],[8,3,5],[8,4,4],[8,5,3],[8,8,3],[8,9,4],[8,10,3],[9,4,3],[9,5,2],[9,6,3],[10,1,3],[10,4,1],[10,7,3],[10,10,3]]],
    ["BALANCE-10X10-ADVANCED-02","ADVANCED",10,10,2,1020260734,"frontier_advanced","sound-branch-free-completion","b37a6c88ea554650b99854e7e664d959ac16009617c15dd737cb314d5b1c5a56",[[1,1,"B"],[1,9,"R"],[3,2,"R"],[3,8,"G"],[3,10,"R"],[4,1,"G"],[4,10,"G"],[5,5,"R"],[6,7,"B"],[7,7,"B"],[7,9,"R"],[9,10,"G"],[10,3,"B"]],[[1,1,1],[1,5,0],[2,3,8],[2,7,8],[2,9,6],[3,1,2],[3,4,8],[4,2,2],[4,3,4],[4,7,8],[4,8,8],[4,9,6],[5,2,0],[6,1,3],[6,4,7],[6,8,4],[6,10,2],[7,6,5],[7,10,4],[8,2,8],[8,5,5],[8,6,4],[8,9,6],[9,6,0],[9,7,7],[9,10,0],[10,2,4],[10,4,1],[10,9,0]]],
  ];
  for (const [
    id,
    solverTier,
    rows,
    cols,
    number,
    seed,
    stage,
    uniquenessBasis,
    signature,
    fixed,
    clues,
  ] of balancePuzzles) {
    const difficulty = balanceDifficulty[solverTier];
    data.puzzles.push({
      id,
      title: `${rows}×${cols} ${difficulty} ${number}（歩留まり実験）`,
      difficulty,
      solver_tier: solverTier,
      playtest: true,
      rows,
      cols,
      colors: ["R", "G", "B"],
      fixed: fixed.map(([row, col, color]) => ({ row, col, color })),
      clues: clues.map(([row, col, value]) => ({ row, col, value })),
      generation: {
        seed,
        stage,
        uniqueness_basis: uniquenessBasis,
        canonical_signature_sha256: signature,
      },
    });
  }

  root.COLOR_MOSAIC_PUZZLES = data;
  if (typeof module === "object" && module.exports) {
    module.exports = data;
  }
})(typeof globalThis !== "undefined" ? globalThis : this);
