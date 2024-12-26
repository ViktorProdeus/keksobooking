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

getRandomInt(1, 10);

function getRandomFloat(min, max, decimals = 1) {
  calculateCondition(min, max);
  return +(Math.random() * (max - min) + min).toFixed(decimals);
}

getRandomFloat(1, 10, 2);
