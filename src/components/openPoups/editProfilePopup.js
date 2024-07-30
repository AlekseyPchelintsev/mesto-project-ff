import { closePopup, closePopupClickOverlay, closePopupKeydownEsc } 
from "../closePopup/closePopup";

//DOM элементы

const formTemplate = document.querySelector('.popup_type_edit');
const profileTitle = document.querySelector('.profile__title');
const typeName = document.querySelector('.popup__input_type_name');
const description = document.querySelector('.profile__description');
const typeDescription = document.querySelector('.popup__input_type_description');

// Функция открытия редактирования профайла

function openEditProfile() {  
  formTemplate.classList.add("popup_is-opened");
  typeName.value = profileTitle.textContent;
  typeDescription.value = description.textContent;
  formTemplate.addEventListener('click', closePopupClickOverlay);
  document.addEventListener('keydown', closePopupKeydownEsc);
}

// Обработчик «отправки» формы редактирования профиля

function handleFormSubmitEditProfile(evt) {
  evt.preventDefault();
  profileTitle.textContent = typeName.value;
  description.textContent = typeDescription.value;
  closePopup(evt);
}

export {openEditProfile, handleFormSubmitEditProfile}