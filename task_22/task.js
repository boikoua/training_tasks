// Condition
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

// Тимми и Сара думают, что они влюблены, но в месте, где они живут, они узнают об этом, только когда сорвут по цветку. Если у одного из цветков четное количество лепестков, а у другого - нечетное, значит, они влюблены.
// Напишите функцию, которая будет брать количество лепестков каждого цветка и возвращать true, если они влюблены, и false, если нет.

// Solution
function lovefunc(flower1, flower2) {
  if (
    flower1 % 2 === 0 && flower2 % 2 !== 0
    ||
    flower2 % 2 === 0 && flower1 % 2 !== 0
  ) {
    return true;
  }

  return false;
}

// Checking

console.log(lovefunc(9, 8));