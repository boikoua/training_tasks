// Condition
// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

// Ваша задача - сделать две функции (max и min, или maximum и minimum, и т. д., в зависимости от языка), которые получают на вход список целых чисел и возвращают наибольшее и наименьшее число в этом списке соответственно.

// Solution
let min = function(list){
  return Math.min(...list);
}

let max = function(list){
  return Math.max(...list);
}

// Checking

console.log(max([4, 6, 2, 1, 9, 63, -134, 566])) //566
console.log(min([42, 54, 65, 87, 0])) //0
console.log(max([5])) //5