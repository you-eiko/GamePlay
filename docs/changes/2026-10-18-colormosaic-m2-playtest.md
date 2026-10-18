# ColorMosaic M2 10盤のテストプレイ

- 状態: 実装・検証完了（2026-10-18 JST）
- 依頼: ColorMosaicで現在M2として生成されている盤面から、傾向の違う10盤をGamePlayで遊べるようにする。

## 受け入れ条件

- [x] 最新の保存監査と対応するM2を10盤収録し、出典と選定理由を追える。
- [x] 専用の入口から10盤を選択でき、難易度で絞り込める。
- [x] 着色、Undo/Redo、保存・復元、完成判定が動き、既存問題も引き続き遊べる。
- [x] 依存追加・ビルドなし。`/GamePlay/`配下のHTTP起動と相対参照を検証（file直接起動の画面確認は下記制約により未検証）。

## 前提と判断

| 区分 | 内容 | 根拠 |
| --- | --- | --- |
| ユーザー確認済み | M2から傾向の違う10盤を取り込み、テストプレイを実装する | 今回の依頼 |
| 確認した事実 | 最新のレビュー対象は7×7・4色・行列全色Extraの38盤（初級17・中級3・上級18） | ColorMosaic `docs/specs/color-mosaic-extra-tier-preserving-deletion/TODO.md` 冒頭、2026-10-17の照合 |
| AIの判断 | 初級3・中級3・上級4。固定色、色付き数字、空白、数字値の分布が異なる盤面を選ぶ | 出典selected.jsonの実測値。難易度以外の解き心地は未評価 |
| AIの判断 | テストプレイ用データを別ファイルに置き、既存問題を保つ。完成解・別解証明書は取り込まない | GamePlayの静的配布制約とレビュー用途 |

ColorMosaicの生成・正式在庫・採用基準は変更しない。初回実装ではcommit・push・公開は対象外。その後、ユーザーから今回の実装のcommit・pushを明示依頼された（2026-10-18 JST）。既存の運用移行文書とREADMEの既存変更を除き、実装・盤面データ・検証コード・本記録・READMEのM2案内だけをコミット対象とする。

## 作業開始時の状態

- GamePlay: `D:/GitHub/GamePlay`、`main`、HEAD `33168e019b00d578c4f7c178e79531fa6a86ce57`。
- 既存の未コミット変更: `README.md`。未追跡: `AGENTS.md`、`CLAUDE.md`、`docs/`。保全する。
- ColorMosaic: `main`、HEAD `5e2d79625a73abb8a16a5b9a55e553976e29fd0c`。既存変更はTier保持削除テーマのTODOとHANDOFF。読み取りのみ。

## 検証

2026-10-18 13:04 JST、Windows、Node.js v24.18.0。ブランチ・HEADは開始時のまま、ステージ済み差分なし。今回の差分は `index.html`、`colormosaic/{app.js,index.html,styles.css}`、READMEへの追記、新規 `colormosaic/{m2-puzzles.js,m2-playtest.test.js}`、`tools/import-m2-playtest.js` と本記録。開始前の未追跡文書とREADMEの既存変更を保全した。ColorMosaicは変更していない。

- `node colormosaic/model.test.js`: 成功。既存問題・モデルの回帰。
- `node colormosaic/m2-playtest.test.js`: 成功。10盤のID、ルール、配布データ、着色、Undo/Redo、保存・復元、選定分布を確認。
- `node tools/import-m2-playtest.js ../ColorMosaic --check`: 成功。10盤の原entryを保存監査のSHA256と照合し、生成した配布ファイルの完全一致と、元の完成解を使ったGamePlay完成判定10/10を確認。人間solverによるTier・M2の全監査を再実行した意味ではなく、M2認定は保存済み独立監査に基づく。
- 変更・追加JavaScriptの `node --check`: 成功。
- `git diff --check`: 成功。新規ファイルの空白・相対リンクも別途確認。
- 初回の一括検証はサーバー起動用の `D:/GitHub` から相対パスを実行して失敗。`D:/GitHub/GamePlay` で上記を再実行し成功した。
- computer-useによるブラウザ確認: ローカルHTTPの `/GamePlay/` 配下でトップの専用リンク、10盤全件の前後移動と一周、上級4盤への絞り込み、着色、Undo/Redo、リロード後の保存復元、既存9×9・4色への切り替えを確認。狭い表示幅で画面を確認。終了時は01の初期盤面に戻し、consoleのerror/warnは0件。
- file URLはブラウザツールの許可プロトコルがHTTP/HTTPSに限られるため拒否され、直接起動の画面確認は未検証。外部依存・fetchを追加せず、明示的な `index.html` 相対リンクと通常script読込を使用。GitHub Pages本番への公開確認、実機タッチの長押し、デスクトップ幅の画面確認はしていない。

## 選定した10盤

全盤 `yield-experiment/web-container/` の `web-extra-tierkeep-7x7-4c-<run>/selected.json` と同ディレクトリの `selection-audit.json` が出典。元ID、seed、元entry hash、正準盤面署名、元commitを配布データのgenerationへ記録。再取り込みは上記コマンドの `--check` を外す。

| 番号 | 難易度 | 元ID末尾 | run | 選定理由 |
| --- | --- | --- | --- | --- |
| 01 | 初級 | BF804F80C210 | beginner-20261015-t1 | 固定色9、0が10個 |
| 02 | 初級 | 3726CAFB010B | beginner-20261015-t1 | 数字17、空白25 |
| 03 | 初級 | B39E2DA99E31 | beginner-20261015-t1 | 数字2が12個、0が2個 |
| 04 | 中級 | 21819507331B | intermediate-20261015-t2 | 固定色18、空白16 |
| 05 | 中級 | 185143896363 | intermediate-20261015-t2 | 色付き数字11、数字だけ12 |
| 06 | 中級 | 8147DDB43CE7 | intermediate-20261015-t2 | 色付き数字6、数字だけ17 |
| 07 | 上級 | 508D29ACEAA2 | advanced-20261015-t3 | 数字26、空白16 |
| 08 | 上級 | ACD5B6489FC2 | advanced-20261015-t6x128 | 色付き数字13、固定色18 |
| 09 | 上級 | 8A7E6B5C2C56 | advanced-20261015-t6x128 | 数字5あり、空白23 |
| 10 | 上級 | 8B0ECFE6DE45 | advanced-20261015-t6x128 | 数字25のうち0が10個、1が12個 |

盤面の傾向は見た目の実測に基づく。人による解き心地・所要時間の評価は今後のテストプレイ対象。
