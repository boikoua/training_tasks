// Condition
// Given an array of integers, return a new array with each value doubled.
// Если задан массив целых чисел, верните новый массив, в котором каждое значение удвоено.

// Solution
function maps(x){
  return x.map(item => item * 2);
}

// Checking
console.log(maps([4, 1, 1, 1, 4]));
