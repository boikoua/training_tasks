// Condition

// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// Доработайте функцию квадратной суммы так, чтобы она возводила в квадрат каждое переданное ей число, а затем суммировала результаты.

// Solution

function squareSum(numbers){
  return numbers.reduce((acc, num) => {
    acc += Math.pow(num, 2);
    return acc;
  }, 0);
}

// Checking

console.log(squareSum([1, 2, 2]));