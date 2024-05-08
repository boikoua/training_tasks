// Condition

// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Ваши одноклассники попросили вас скопировать для них документы. Вы знаете, что одноклассников 'n', а в документе 'm' страниц.
// Ваша задача - вычислить, сколько чистых страниц вам нужно. Если n < 0 или m < 0, верните 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0

// Solution

function paperwork(n, m) {
  if (n < 0 || m < 0) { return 0 };

  return n * m;
}

// Checking

console.log(paperwork(5,10));