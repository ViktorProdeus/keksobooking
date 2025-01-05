import { apartmentsMap, generateCardsData, CARD_TEMPLATE } from './data.js';

function createCard(data) {
  const roomNumber = data.offer.rooms;
  let rooms = `${roomNumber} комнат`;

  if (data.offer.rooms < 5) {
    rooms = `${roomNumber} комнаты`;
  }
  if (data.offer.rooms < 2) {
    rooms = `${roomNumber} комната`;
  }

  const guests = `${data.offer.guests} ${
    data.offer.guests < 2 ? 'гостя' : 'гостей'
  }`;

  return `
  <img src=${data.author.avatar}
  class="popup__avatar" width="70" height="70" alt="Аватар пользователя">
  <h3 class="popup__title">${data.offer.title}</h3>
  <p class="popup__text popup__text--address">
  ${data.offer.address}
  </p>
  <p class="popup__text popup__text--price">
  ${data.offer.price}
  <span>₽/ночь</span>
  </p>
  <h4 class="popup__type">${apartmentsMap[data.offer.type]}</h4>
  <p class="popup__text popup__text--capacity">
    ${rooms} для ${guests}</p>
  <p class="popup__text popup__text--time">
    Заезд после ${data.offer.checkin}, выезд до ${data.offer.checkout}
  </p>
  <ul class="popup__features">${data.offer.features
    .map(
      (element) =>
        `<li class="popup__feature popup__feature--${element}">${element}</li>`
    )
    .join('')}

  </ul>
  <p class="popup__description">
    ${data.offer.description}.
  </p>
  <div class="popup__photos">
  ${data.offer.photos
    .map(
      (element) =>
        `<img src=${element} class="popup__photo" width="45" height="40" alt="Фотография жилья">`
    )
    .join('')}
  </div>
`;
}

function renderCards(container) {
  const cards = generateCardsData();

  cards.forEach((card) => {
    const cardElement = CARD_TEMPLATE.cloneNode(true);
    cardElement.innerHTML = '';
    cardElement.innerHTML = createCard(card);
    container.appendChild(cardElement);
  });
}

export { renderCards };
