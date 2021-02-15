// Формула взята на: https://learn.javascript.ru/task/random-int-min-max
// Generate random number
const getRandomNumber = function (numberMin, numberMax) {
  return numberMin + Math.random() * (numberMax - numberMin);
};

// Generate random whole number
const getRandomWholeNumber = function (min, max) {
  if(min >= max || min < 0) {
    throw new Error('getRandomWholeNumber — Неправильный диапазон! Укажите любые числа от 0, чтобы первое было меньше второго.');
  }
  return Math.round(getRandomNumber(min, max));
};

// Generate random number with floating point
const getRandomFractionalNumber = function (min, max, symbolsAfterPoint) {
  if(min >= max || min < 0) {
    throw new Error('getRandomFractionalNumber — Неправильный диапазон! Укажите любые числа от 0, чтобы первое было меньше второго и символов после запятой. Пример (1, 9, 3)');
  }

  let randomNumber = (getRandomNumber(min, max)).toFixed(symbolsAfterPoint);
  // If the number is fractional and ends in 0
  if(randomNumber.slice(-1) === '0' && randomNumber % 1 !== 0) {
    randomNumber = randomNumber.substring(0, randomNumber.length - 1) + getRandomWholeNumber(1, 9) + randomNumber.substring(1 + randomNumber.length - 1);
  }
  return +randomNumber;
};

export {getRandomWholeNumber, getRandomFractionalNumber};
