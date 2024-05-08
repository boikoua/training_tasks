// Condition

// Our football team has finished the championship.
// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.
// For example: ["3:1", "2:2", "0:1", ...]
// Points are awarded for each match as follows:
// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.
// Notes:
// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

// Наша футбольная команда завершила чемпионат.
// Результаты матчей нашей команды записываются в коллекцию строк. Каждый матч представлен строкой в формате «x:y», где x - счет нашей команды, а y - счет соперника.
// Например: [«3:1», «2:2», «0:1», ...]
// Очки начисляются за каждый матч следующим образом:
// если x > y: 3 очка (победа)
// если x < y: 0 очков (поражение)
// если x = y: 1 очко (ничья)
// Нам нужно написать функцию, которая берет эту коллекцию и возвращает количество очков, набранных нашей командой (x) в чемпионате по правилам, приведенным выше.
// Примечания:
// наша команда всегда играет 10 матчей в чемпионате
// 0 <= x <= 4
// 0 <= y <= 4

// Solution

function points(games) {
  let resultPoint = 0;

  for (const game of games) {
    const gameArr = game.split(':');

    if (gameArr[0] > gameArr[1]) {
      resultPoint += 3;
    } else if (gameArr[0] === gameArr[1]) {
      resultPoint++;
    }
  }

  return resultPoint;
}

// Checking

console.log(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]));