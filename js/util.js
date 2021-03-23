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

const createElementWithClass = (type, classes) => {
  const elementItem = document.createElement(type);
  elementItem.className = classes;
  return elementItem;
}

const getDeclension = (number, titlesArr) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titlesArr[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
};

export {getRandomWholeNumber, getRandomFractionalNumber, createElementWithClass, getDeclension};
