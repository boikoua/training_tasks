// Condition

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
// The middle character(s) of the word represented as a string.
// Вам будет дано слово. Ваша задача - вернуть средний символ этого слова. Если длина слова нечетная, верните средний символ. Если длина слова четная, верните 2 средних символа.
// Средний символ(ы) слова, представленный в виде строки.

// Kata.getMiddle(«test») должна вернуть «es».

// Kata.getMiddle(«testing») должна вернуть «t»

// Kata.getMiddle(«middle») должна вернуть «dd»

// Kata.getMiddle(«A») должно вернуть «A»

// Solution

function getMiddle(s) {
  let middle = Math.floor(s.length / 2);

  if (s.length % 2 === 0) {
    return s[middle-1] + s[middle];
  } else {
    return s[middle];
  }
}

// Checking
console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));