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

function getLocation(lat, lng) {
  return {
    lat,
    lng,
  };
}

export {
  calculateCondition,
  getRandomInt,
  getRandomFloat,
  shuffle,
  getAuthor,
  getLocation,
};
