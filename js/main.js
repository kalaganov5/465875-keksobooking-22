'use strict';

// Формула взята на: https://learn.javascript.ru/task/random-int-min-max
// Generate random number
const getRandomNumber = function (numberMin, numberMax) {
  return Math.floor(numberMin + Math.random() * (numberMax + 1 - numberMin));
}

// Generate random integer
const getRandomInteger = function (min, max) {
  let randomNumber;
  if(min < max) {
    randomNumber = getRandomNumber(min, max);
  }

  if(min >= max || min < 0) {
    randomNumber = alert('Неправильный диапазон! Укажите любые числа от 0, чтобы первое было меньше второго.');
  }

  return randomNumber;
}

// Generate random number with floating point
const getRandomNotInteger = function (min, max, symbolsAfterPoint) {
  let randomNumber;
  if(min >= max || min < 0) {
    randomNumber = alert('Неправильный диапазон! Укажите любые числа от 0, чтобы первое было меньше второго и символов после запятой. Пример (1, 9, 3)');
  }

  if(min < max) {
    randomNumber = getRandomNumber(min, max);
    let floatingPointNumber;
    let factor = 10;
    for(let i = 1; i <= symbolsAfterPoint; i++) {
      floatingPointNumber = getRandomNumber(1, 9);
      floatingPointNumber = floatingPointNumber / factor;
      factor = factor * 10;
      randomNumber = randomNumber + floatingPointNumber;
    }
  }

  randomNumber = Number(randomNumber.toFixed(symbolsAfterPoint));
  return randomNumber;
}

getRandomInteger(1, 9);
getRandomNotInteger(1, 9, 13);
