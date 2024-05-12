// Condition
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// Допишите решение так, чтобы оно возвращало true, если первый переданный аргумент (строка) заканчивается на 2-й аргумент (тоже строка).

// Solution

function solution(str, ending){
  if (str.slice(str.length - ending.length) === ending) {
    return true;
  }

  return false;
}

// Checking

console.log(solution('abcde', 'cde')) //true
console.log(solution('abcde', 'abc')) //false