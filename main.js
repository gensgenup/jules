/**
 * 2つの数値を受け取り、その合計を返します。
 * @param {number} num1 数値1
 * @param {number} num2 数値2
 * @returns {number} 合計値
 */
function addNumbers(num1, num2) {
  return num1 + num2;
}

/**
 * 文字列を受け取り、コンソールに出力します。
 * @param {string} str 文字列
 */
function logString(str) {
  console.log(str);
}

// Example usage for addNumbers
const sum = addNumbers(5, 10);
console.log("合計は:", sum);

// Example usage for logString
logString("これはテスト文字列です。");

console.log("Hello, world!");
