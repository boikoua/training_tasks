// Condition

// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
// Considering these factors, write a function that tells you if it is possible to get to the pump or not.
// Function should return true if it is possible and false if not.

// Вы отправились в поход с друзьями далеко от дома, но когда пришло время возвращаться, вы поняли, что топливо на исходе, а ближайший насос находится в 50 милях! Вы знаете, что в среднем ваш автомобиль расходует около 25 миль на галлон. Осталось 2 галлона.
// Учитывая эти факторы, напишите функцию, которая скажет вам, можно ли добраться до насоса или нет.
// Функция должна возвращать true, если это возможно, и false, если нет.

// Solution

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump <= mpg * fuelLeft;
}

// Checking

console.log(zeroFuel(100, 50, 2));