// Condition
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Выполните функцию, которая принимает строковый параметр и меняет местами каждое слово в строке. Все пробелы в строке должны быть сохранены.

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// Solution

function reverseWords(str) {
  return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

// Checking

console.log(reverseWords('The quick brown fox jumps over the lazy dog.')); //'ehT kciuq nworb xof spmuj revo eht yzal .god'