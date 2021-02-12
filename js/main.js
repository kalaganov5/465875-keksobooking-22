'use strict';

// Формула взята на: https://learn.javascript.ru/task/random-int-min-max
// Generate random number
const getRandomNumber = function (numberMin, numberMax) {
  return numberMin + Math.random() * (numberMax - numberMin);
}

// Generate random whole number
const getRandomWholeNumber = function (min, max) {
  if(min >= max || min < 0) {
    throw new Error('getRandomWholeNumber — Неправильный диапазон! Укажите любые числа от 0, чтобы первое было меньше второго.');
  }
  return Math.floor(getRandomNumber(min, max));
}

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
}

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const TIMES = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTIONS = [
  'What is Lorem Ipsum?',
  'Why do we use it?',
  'Where can I get some?',
  'Where does it come from?',
];

const IMAGES = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const featuresUsed = [];
for (let i = 0; i <= getRandomWholeNumber(0, FEATURES.length); i++) {
  featuresUsed[i] = FEATURES[i];
}

const photosUsed = [];
for (let i = 0; i <= getRandomWholeNumber(0, IMAGES.length); i++) {
  photosUsed[i] = IMAGES[i];
}

const createDataKeksobooking = () => {
  let author = {
    avatar: `img/avatars/user0${getRandomWholeNumber(1, 8)}.png`,
  };
  let offer = {
    title: DESCRIPTIONS[getRandomWholeNumber(0, DESCRIPTIONS.length - 1)],
    address: `${getRandomFractionalNumber(35.65, 35.7, 5)}, ${getRandomFractionalNumber(139.7, 139.8, 5)}`,
    price: getRandomWholeNumber(1000, 10000),
    type: TYPES[getRandomWholeNumber(0, TYPES.length - 1)],
    rooms: getRandomWholeNumber(1, 10),
    guests: getRandomWholeNumber(1, 30),
    checkin: TIMES[getRandomWholeNumber(0, TIMES.length - 1)],
    checkout: TIMES[getRandomWholeNumber(0, TIMES.length - 1)],
    features: featuresUsed,
    description: DESCRIPTIONS[getRandomWholeNumber(0, DESCRIPTIONS.length - 1)],
    photos: photosUsed,
  };

  let location = {
    x: getRandomFractionalNumber(35.65, 35.7, 5),
    y: getRandomFractionalNumber(139.7, 139.8, 5),
  };

  return {
    author,
    offer,
    location,
  }
};

const createArrayKeksobooking = new Array(10).fill(null).map(() => createDataKeksobooking());

createArrayKeksobooking;
