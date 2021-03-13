import {offersArray} from './data.js';
import {createElementWithClass} from './util.js';

const similarAdsFragment = document.createDocumentFragment();

const templateAds = document.querySelector('#card').content;

const map = document.querySelector('#map-canvas');

offersArray.forEach(function (currentValue) {
  const item = templateAds.querySelector('.popup').cloneNode(true);
  item.querySelector('.popup__avatar').src = currentValue.author['avatar'];
  item.querySelector('.popup__title').textContent = currentValue.offer.title;
  item.querySelector('.popup__text--address').textContent = currentValue.offer.address;
  item.querySelector('.popup__text--price').textContent = `${currentValue.offer.price} ₽/ночь`;
  switch(currentValue.offer.type) {
    case 'flat':
      item.querySelector('.popup__type').textContent  = 'Квартира';
      break;
    case 'bungalow':
      item.querySelector('.popup__type').textContent  = 'Бунгало';
      break;
    case 'house':
      item.querySelector('.popup__type').textContent  = 'Дом';
      break;
    case 'palace':
      item.querySelector('.popup__type').textContent  = 'Дворец';
      break;
  }
  item.querySelector('.popup__text--capacity').textContent = `${currentValue.offer.rooms} комнаты для ${currentValue.offer.guests} гостей`;
  item.querySelector('.popup__text--time').textContent = `Заезд после ${currentValue.offer.checkin}, выезд до ${currentValue.offer.checkout}`;
  // clear child element before insert features
  item.querySelector('.popup__features').innerHTML = '';
  currentValue.offer.features.forEach( (value) => {
    const element = createElementWithClass('li', 'popup__feature');
    element.classList.add(`popup__feature--${value}`);
    item.querySelector('.popup__features').appendChild(element);
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
