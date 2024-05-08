// Condition

// Write a function to split a string and convert it into an array of words.
// Напишите функцию для разбиения строки и преобразования ее в массив слов.
// "Robin Singh" ==> ["Robin", "Singh"]

// Solution

function stringToArray(string) {
  return string.split(' ');
}

// Checking

console.log(stringToArray("I love arrays they are my favorite"));