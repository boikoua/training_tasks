// Condition
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

// Напишите программу, которая находит сумму всех чисел от 1 до num. Число всегда будет положительным целым числом, большим 0. Ваша функция должна возвращать только результат, то, что показано между скобками в примере ниже - это то, как вы достигаете этого результата, и не является его частью, смотрите примеры тестов.

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// Доработайте функцию квадратной суммы так, чтобы она возводила в квадрат каждое переданное ей число, а затем суммировала результаты.

// Solution

let summation = function (num) {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum += i;
  }

  return sum;
}

// Checking

console.log(summation(2));