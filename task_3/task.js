// Condition

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// Note: input will never be an empty string

// В строке цифр необходимо заменить любую цифру ниже 5 на '0', а любую цифру 5 и выше на '1'. Верните полученную строку.
// Примечание: входные данные никогда не будут пустой строкой


// Solution

function fakeBin(x) {
  let nums = x.split('');

  for (let i = 0; i < nums.length; i++) {
    if (+nums[i] < 5) {
      nums[i] = '0';
    } else {
      nums[i] = '1';
    }
  }

  return nums.join('');
}

// Checking

console.log(fakeBin('5454437'));