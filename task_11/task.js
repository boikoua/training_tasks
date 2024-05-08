// Condition

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!
// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.

// Если даны два целых числа a и b, которые могут быть положительными или отрицательными, найдите сумму всех целых чисел между ними и включая их, и верните ее. Если эти два числа равны, верните a или b.
// Примечание: a и b не упорядочены!
// Ваша функция должна возвращать только число, а не объяснение того, как вы получили это число.

// Solution

function getSum(a, b) {
  if (a === b) { return a };

  let min = a;
  let max = b;

  if (a > b) {
    max = a;
    min = b;
  }

  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
}

// Checking
console.log(getSum(0, -1));
console.log(getSum(2, 2));