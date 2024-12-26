function calculateCondition(min, max) {
  if (min < 0 || max < 0) {
    throw new Error('min и max должны быть неотрицательными');
  }
  if (min > max) {
    [min, max] = [max, min];
  }
}

function getRandomInt(min, max) {
  calculateCondition(min, max);
  return min + Math.floor(Math.random() * (max - min + 1));
}

function getRandomFloat(min, max, decimals = 1) {
  calculateCondition(min, max);
  return +(Math.random() * (max - min) + min).toFixed(decimals);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function getAuthor(count) {
  if (count < 10) {
    count = `0${count}`;
  }
  return {
    avatar: `img/avatars/user${count}.png`,
  };
}

const COUNT = 10;
const APARTMENT_TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
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
function getLocation(lat, lng) {
  return {
    lat,
    lng,
  };
}

function createRentalAdd() {
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

Array.from({ length: COUNT }, createRentalAdd);
