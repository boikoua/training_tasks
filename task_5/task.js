// Condition

// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
// Задав целое неотрицательное число, например, 3, вернуть строку с бормотанием: «1 овца... 2 овцы... 3 овцы...». Входные данные всегда должны быть корректными, т.е. не содержать отрицательных целых чисел.

// Solution

const countSheep = function (num) {
  let result = '';

  if (num === 0) {
    return result;
  }

  for (let i = 1; i <= num; i++) {
    result += `${i} sheep...`;
  }

  return result;
};

// Checking

console.log(countSheep(0));