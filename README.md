# GamePlay

ブラウザで遊べる、依存ゼロの静的パズルゲーム集です。

公開ページ: <https://you-eiko.github.io/GamePlay/>

## 収録ゲーム

- **StarBattle** — 行・列・領域の条件を満たすように星を置くロジックパズル
- **ColorMosaic** — 数字と周囲の色の関係から盤面を塗るロジックパズル
- **ColorRooms** — 数字の面積に合わせて同色の部屋を作るロジックパズル

`index.html` をブラウザで開けばローカルでも遊べます。GitHub Pages では `main` ブランチのルートを公開元に指定します。

このリポジトリには、ブラウザでのプレイに必要なファイルと公開用の問題データだけを収録します。

## ColorMosaic M2テストプレイ

[M2の10盤を開く](colormosaic/index.html?collection=m2)。ColorMosaicリポジトリの監査済み38盤から、固定色・数字・空白の配置が異なる初級3盤・中級3盤・上級4盤を収録しています。全盤7×7・4色で、「各行・各列に全色」の追加ルールがあります。盤面フィルターの「M2テストプレイ」からも選べます。

出典・選定理由・検証結果は [作業記録](docs/changes/2026-10-18-colormosaic-m2-playtest.md) を参照してください。完成解・生成用証明書は配布データに含めていません。

```sh
node colormosaic/m2-playtest.test.js
# 隣にColorMosaicリポジトリがある場合、保存監査との対応と完成判定も検証
node tools/import-m2-playtest.js ../ColorMosaic --check
```

<!-- pages-redeploy -->
