import { addCard } from "../addCard/addCard";
import { closePopup, closePopupClickOverlay, closePopupKeydownEsc } from "../closePopup/closePopup";

// DOM элементы

const cardNameInput = document.querySelector('.popup__input_type_card-name');
const cardUrlInput = document.querySelector('.popup__input_type_url');
const addCardPopup = document.querySelector('.popup_type_new-card');

// Функция открытия попапа добавления новой карточки

function openAddNewCard() {
  addCardPopup.classList.add("popup_is-opened");
  addCardPopup.addEventListener('click', closePopupClickOverlay);
  document.addEventListener('keydown', closePopupKeydownEsc);
}

// Обработчик добавления новой карточки на страницу

 function handleFormSubmitNewCard(evt) {
  evt.preventDefault();
  addCard(cardNameInput, cardUrlInput);
  closePopup(evt);
}

export {openAddNewCard, handleFormSubmitNewCard}