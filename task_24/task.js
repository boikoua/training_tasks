// Condition
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
// Use conditionals to return the proper message:

// Создайте функцию, которая выдает персональное приветствие. Эта функция принимает два параметра: имя и владелец.
// Используйте условные обозначения, чтобы вернуть нужное сообщение:

// Solution
function greet(name, owner) {
  if (name === owner) {
    return 'Hello boss';
  }
  return 'Hello guest';
}

// Checking

console.log(greet('Daniel', 'Daniel')) //'Hello boss'
console.log(greet('Greg', 'Daniel')) //'Hello guest'