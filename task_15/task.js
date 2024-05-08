// Condition

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times
// Напишите функцию, которая принимает в качестве параметров целое число n и строку s, а возвращает строку s, повторенную ровно n раз.

// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// Solution

function repeatStr (n, s) {
  let res = '';

  for (let i = n; i > 0; i--) {
    res += s;
  }

  return res;
}

// Checking
console.log(repeatStr(3, "*"));
console.log(repeatStr(5, "#"));
console.log(repeatStr(2, "ha "));

// assert.strictEqual(repeatStr(3, "*"), "***");
//     assert.strictEqual(repeatStr(5, "#"), "#####");
//     assert.strictEqual(repeatStr(2, "ha "), "ha ha ")