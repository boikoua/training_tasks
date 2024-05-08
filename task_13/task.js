// Condition

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// Возьмите 2 строки s1 и s2, содержащие только буквы от a до z. Верните новую отсортированную строку, максимально длинную, содержащую отдельные буквы - каждая из которых взята только один раз - из s1 или s2.

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// Solution

function longest(s1, s2) {
  let res = [];
  let str = s1.concat(s2).split('');

  for (const char of str) {
    if (!res.includes(char)) {
      res.push(char);
    }
  }

  return res.sort().join('');
}

// Checking

console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));