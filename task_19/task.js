// Condition
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

// Простой способ: задайте строку слов и верните длину самого короткого слова (слов).
// Строка никогда не будет пустой, и вам не нужно учитывать различные типы данных.

// Solution
function findShort(s) {
  const words = s.split(' ');
  let short = words[0].length;

  for (const word of words) {
    if (word.length < short) {
      short = word.length;
    }
  }

  return short;
}

// Checking

console.log(findShort("bitcoin take over the world maybe who knows perhaps")); //3
console.log(findShort("Let's travel abroad shall we")); //2