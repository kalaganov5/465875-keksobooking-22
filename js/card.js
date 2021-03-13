import {offersArray} from './data.js';
import {createElementWithClass, getDeclension} from './util.js';

const similarAdsFragment = document.createDocumentFragment();

const templateAds = document.querySelector('#card').content;

const map = document.querySelector('#map-canvas');

const ROOM_TYPES = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
};

offersArray.forEach(function (currentValue) {
  const item = templateAds.querySelector('.popup').cloneNode(true);
  item.querySelector('.popup__avatar').src = currentValue.author.avatar;
  item.querySelector('.popup__title').textContent = currentValue.offer.title;
  item.querySelector('.popup__text--address').textContent = currentValue.offer.address;
  item.querySelector('.popup__text--price').textContent = `${currentValue.offer.price} ₽/ночь`;
  for(let room in ROOM_TYPES) {
    if(Object.prototype.hasOwnProperty.call(ROOM_TYPES, room) && room === currentValue.offer.type) {
      item.querySelector('.popup__type').textContent  = ROOM_TYPES[room];
    }
  }
  item.querySelector('.popup__text--capacity').textContent = `${currentValue.offer.rooms} ${getDeclension(currentValue.offer.rooms, ['комната', 'комнаты', 'комнат'])} для ${currentValue.offer.guests} ${getDeclension(currentValue.offer.guests, ['гость', 'гостя', 'гостей'])}`;
  item.querySelector('.popup__text--time').textContent = `Заезд после ${currentValue.offer.checkin}, выезд до ${currentValue.offer.checkout}`;
  // clear child element before insert features
  item.querySelector('.popup__features').innerHTML = '';
  currentValue.offer.features.forEach( (value) => {
    item.querySelector('.popup__features').appendChild(createElementWithClass('li', `popup__feature popup__feature--${value}`));
  });

  item.querySelector('.popup__description').textContent = currentValue.offer.description;
  // Remove empty element before insert item
  item.querySelector('.popup__photo').remove();
  currentValue.offer.photos.forEach( (value) => {
    const itemPhotos = templateAds.querySelector('.popup__photo').cloneNode(false);
    itemPhotos.src = value;
    item.querySelector('.popup__photos').append(itemPhotos);
  });

  return similarAdsFragment.append(item);
});

export {map, similarAdsFragment};
