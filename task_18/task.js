// Condition
// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Джейден Смит, сын Уилла Смита, - звезда таких фильмов, как «Каратэ-пацан» (2010) и «После Земли» (2013). Джейден также известен своей философией, которую он излагает в Twitter. Когда он пишет в Twitter, он известен тем, что почти всегда пишет каждое слово с большой буквы. Для простоты вам придется писать каждое слово с заглавной буквы, посмотрите, как должны выглядеть сокращения в примере ниже.
// Ваша задача - преобразовать строки в то, как они были бы написаны Джейденом Смитом. Строки - это настоящие цитаты Джейдена Смита, но они не набраны заглавными буквами так, как он набрал их в оригинале.

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

// Solution

String.prototype.toJadenCase = function () {
  let res = this.split(' ');
  let result = [];

  for (const word of res) {
    result.push(word[0].toUpperCase() + word.slice(1));
  }

  return result.join(' ');
};

// Checking

let str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());
