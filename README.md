# Jules コーディングテスト サンプル

このリポジトリは、簡単なコーディングテストで使用するサンプルコードをまとめたものです。`main.js` には基本的な関数の実装例が含まれ、動作確認用のテストも用意しています。

## ファイル構成
- `main.js` - `addNumbers` と `logString` のサンプル実装
- `main.test.js` - 関数を検証するテストコード
- `USAGE_GUIDE.md` - スクリプトの実行方法や各関数の使い方を解説
- `ISMS_GUIDE.md` - 情報セキュリティマネジメントに関する詳細ガイド

## 動作環境
- Node.js v18 以上
- 追加の npm パッケージは不要

## 実行方法
メインスクリプトの実行例:

```bash
node main.js
```

詳細なサンプルは **USAGE_GUIDE.md** を参照してください。

## テスト実行
`main.test.js` は Jest を想定して記述されています。Jest をインストール済みであれば次のコマンドで実行できます。

```bash
jest main.test.js
```

単純に Node.js で実行することもできますが、Jest の機能がない環境では `describe` が未定義となり失敗します。

```bash
node main.test.js
```

## コントリビューション
不具合報告や改善案があれば Issues や Pull Request を歓迎します。
