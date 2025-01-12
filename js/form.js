const adForm = document.querySelector('.ad-form');
const mapFiltersForm = document.querySelector('.map__filters');
const formElements = [...adForm.children, ...mapFiltersForm.children];

// Переключение в неактивное состояние страницы
function deactivatePage() {
  adForm.classList.add('ad-form--disabled');
  mapFiltersForm.classList.add('map__filters--disabled');
  formElements.forEach((element) => {
    element.disabled = true;
  });
}

// Переключение в активное состояние страницы
function activatePage() {
  adForm.classList.remove('ad-form--disabled');
  mapFiltersForm.classList.remove('map__filters--disabled');
  formElements.forEach((element) => {
    element.disabled = false;
  });
}

deactivatePage();

export { deactivatePage, activatePage };
