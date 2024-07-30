import { closePopup, closePopupClickOverlay, closePopupKeydownEsc } 
from "../closePopup/closePopup";

// Функция открытия редактирования профайла

function openEditProfile() {
  const formTemplate = document.querySelector('.popup_type_edit');
  formTemplate.classList.add("popup_is-opened");

  document.querySelector('.popup__input_type_name')
  .value = document.querySelector('.profile__title').textContent;

  document.querySelector('.popup__input_type_description')
  .value = document.querySelector('.profile__description').textContent;

  formTemplate.addEventListener('click', closePopupClickOverlay);
  document.addEventListener('keydown', closePopupKeydownEsc);
}

// Обработчик «отправки» формы редактирования профиля

function handleFormSubmitEditProfile(evt) {

  evt.preventDefault();

  document.querySelector('.profile__title')
  .textContent = document.querySelector('.popup__input_type_name').value;

  document.querySelector('.profile__description')
  .textContent = document.querySelector('.popup__input_type_description').value;

  closePopup(evt);
}

export {openEditProfile, handleFormSubmitEditProfile}