const adForm = document.querySelector('.ad-form');
const adHouseType = adForm.querySelector('#type');
const adPrice = adForm.querySelector('#price');
const adTimes = adForm.querySelectorAll('.ad-form__element--time select');

const ROOM_PRICE = {
  palace: 10000,
  flat: 1000,
  house: 5000,
  bungalow: 0,
};
let currentMinPriceHouse = ROOM_PRICE[adHouseType.value];

const setMinPriceHouse = function (value) {
  adPrice.setAttribute('min-value', value);
  adPrice.placeholder = value;
}

setMinPriceHouse(currentMinPriceHouse);

const adFormHandler = function (evt) {
  if (evt.target && evt.target.matches('select[id="type"]')) {
    // Решение взято с https://up.htmlacademy.ru/javascript/22/demos/4889#7,
    // но не пойму, зачем условие "evt.target", без него на втором примере работает
    currentMinPriceHouse = ROOM_PRICE[adHouseType.value];
    setMinPriceHouse(currentMinPriceHouse);
  }
  if (evt.target.matches('select[id="timein"]') || evt.target.matches('select[id="timeout"]')) {
    for (let optionElement of evt.target.children) {
      if (optionElement.selected) {
        let optionValue = optionElement.value;
        for (let i = 0; i < adTimes.length; i++) {
          adTimes[i].value = optionValue;
        }
      }
    }
  }
}

adForm.addEventListener('change', adFormHandler);

export {adFormHandler};
