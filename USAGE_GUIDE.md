# 使用ガイド

このガイドでは、`main.js` 内の関数の使用方法とファイルの実行方法について説明します。

## `addNumbers` 関数

**目的:** `addNumbers` 関数は、2つの数値を入力として受け取り、それらを合計して結果を返します。

**例:**

```javascript
const result = addNumbers(5, 10);
console.log(result); // 出力: 15
```

## `logString` 関数

**目的:** `logString` 関数は、文字列を入力として受け取り、それをコンソールに出力します。

**例:**

```javascript
logString("Hello, world!"); // 出力: Hello, world!
```

## `main.js` の実行

`main.js` ファイルを実行するには、システムに Node.js がインストールされている必要があります。

1.  **ターミナルまたはコマンドプロンプトを開きます。**
2.  **`main.js` があるディレクトリに移動します。**
3.  **次のコマンドを実行します。**

    ```bash
    node main.js
    ```

これにより `main.js` ファイルが実行され、`logString` 関数や他の `console.log` ステートメントからの出力がターミナルに表示されます。
