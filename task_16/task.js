// Condition
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// Завершите метод, который принимает булево значение и возвращает строку «Да» для true или строку «Нет» для false.

// Solution

function boolToWord( bool ){
  if (bool) { return 'Yes' };
  return 'No';
}

// Checking

console.log(boolToWord(true));
console.log(boolToWord(false));