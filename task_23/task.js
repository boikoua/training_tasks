// Condition
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.
// Все довольно просто. Ваша цель - создать функцию, которая удаляет первый и последний символы строки. Вам дан один параметр - исходная строка. Вам не нужно беспокоиться о строках, содержащих менее двух символов.

// Solution
function removeChar(str) {
  let res = str.split('');
  res.pop();
  res.shift();

  return res.join('');
};

// Checking

console.log(removeChar('hello'));
