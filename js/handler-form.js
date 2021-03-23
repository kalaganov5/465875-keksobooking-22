import {ROOM_TYPES} from './data.js';
const form = document.querySelector('.ad-form');

const validatePriceInput = function (value) {
  form.price.min = value;
  form.price.placeholder = value;
}

const formHandler = function (evt) {
  switch (evt.target) {
    case form.timein:
    case form.timeout:
      validateTimeSelects(evt)
      break;
    case form.type: {
      validatePriceInput(ROOM_TYPES[form.type.value].minPrice);
      break;
    }
  }
}

const validateTimeSelects = function (evt) {
  if (evt.target === form.timein) {
    form.timeout.value = form.timein.value;
  }
  else {
    form.timein.value = form.timeout.value;
  }
};

form.addEventListener('change', formHandler);

export {formHandler};
