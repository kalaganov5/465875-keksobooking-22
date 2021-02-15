import {getRandomWholeNumber, getRandomFractionalNumber} from './util.js';

const HOUSE_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const CHECKIN_TIMES = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT_TIMES = [
  '12:00',
  '13:00',
  '14:00',
];

const ROOM_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const HOUSE_DESCRIPTIONS = [
  'What is Lorem Ipsum?',
  'Why do we use it?',
  'Where can I get some?',
  'Where does it come from?',
];

const HOUSE_IMAGES = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

// get array of random length
const getArrayRandomLength = (array) => {
  return array.slice(getRandomWholeNumber(0, array.length - 1));
};

// get random element from array
const getRandomArrayElement = (element) => {
  return element[getRandomWholeNumber(0, element.length - 1)];
};

const createOffersArray = () => {
  return {
    author: {
      avatar: `img/avatars/user0${getRandomWholeNumber(1, 8)}.png`,
    },
    offer: {
      title: getRandomArrayElement(HOUSE_DESCRIPTIONS),
      address: `${getRandomFractionalNumber(35.65, 35.7, 5)}, ${getRandomFractionalNumber(139.7, 139.8, 5)}`,
      price: getRandomWholeNumber(1000, 10000),
      type: getRandomArrayElement(HOUSE_TYPES),
      rooms: getRandomWholeNumber(1, 10),
      guests: getRandomWholeNumber(1, 30),
      checkin: getRandomArrayElement(CHECKIN_TIMES),
      checkout: getRandomArrayElement(CHECKOUT_TIMES),
      features: getArrayRandomLength(ROOM_FEATURES),
      description: getRandomArrayElement(HOUSE_DESCRIPTIONS),
      photos: getArrayRandomLength(HOUSE_IMAGES),
    },
    location: {
      x: getRandomFractionalNumber(35.65, 35.7, 5),
      y: getRandomFractionalNumber(139.7, 139.8, 5),
    },
  };
};

const offersArray = new Array(10).fill(null).map(() => createOffersArray());

export {offersArray};
