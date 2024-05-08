// Condition

// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
// Напишите функцию, которая принимает массив слов, объединяет их в предложение и возвращает это предложение. Вы можете игнорировать необходимость дезинфекции слов или добавления знаков препинания, но вы должны добавить пробелы между каждым словом. Будьте внимательны, не должно быть пробела в начале или конце предложения!

// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

// Solution

function smash(words) {
  return words.join(' ');
}

// Checking

console.log(smash(["this", "is", "a", "really", "long", "sentence"]));