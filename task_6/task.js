// Condition

// Complete the solution so that it reverses the string passed into it.
// Доработайте решение так, чтобы оно меняло местами переданные в него строки.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// Solution

function solution(str) {
  return str.split('').reverse().join('');
}

// Checking

console.log(solution('hello'));