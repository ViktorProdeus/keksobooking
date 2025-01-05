import {
  getAuthor,
  getLocation,
  getRandomFloat,
  getRandomInt,
  shuffle,
} from './utils.js';

const CARD_TEMPLATE = document
  .querySelector('#card')
  .content.querySelector('.popup');

const COUNT = 10;
const APARTMENT_TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const apartmentsMap = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const DESCRIPTION = [
  'Милая, уютная квартирка в центре Токио',
  'Уютное гнездышко для молодоженов',
  'Красивый, уютный дворец в центре',
  'Бунгало в саду',
  'Маленький отель',
  'Пентхаус с высотой крыши',
];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

function generateCardData() {
  const location = getLocation(
    getRandomFloat(35.65, 35.7, 5),
    getRandomFloat(139.7, 139.8, 5)
  );

  return {
    author: getAuthor(getRandomInt(1, COUNT)),
    offer: {
      title: 'Аренда жилья',
      address: `${location.lat}, ${location.lng}`,
      description: DESCRIPTION[getRandomInt(0, DESCRIPTION.length - 1)],
      price: getRandomInt(10000, 80000),
      type: APARTMENT_TYPES[getRandomInt(0, APARTMENT_TYPES.length - 1)],
      rooms: getRandomInt(1, 5),
      guests: getRandomInt(1, 8),
      checkin: `${getRandomInt(12, 14)}:00`,
      checkout: `${getRandomInt(12, 14)}:00`,
      features: shuffle(FEATURES).slice(0, getRandomInt(1, FEATURES.length)),
      photos: shuffle(PHOTOS).slice(0, getRandomInt(1, PHOTOS.length)),
    },
    location,
  };
}

const generateCardsData = () => Array.from({ length: COUNT }, generateCardData);

export {
  generateCardData,
  generateCardsData,
  apartmentsMap,
  COUNT,
  CARD_TEMPLATE,
};
