import { initialCards } from './cardsArr/cards.js';
import { closePopup } from './closePopup/closePopup.js'
import { createCard } from './createCards/card.js';
import { openEditProfile, handleFormSubmitEditProfile } from './openPoups/editProfilePopup.js'
import { openAddNewCard, handleFormSubmitNewCard } from './openPoups/addNewCardPopup.js'
import '../styles/index.css';

// DOM узлы

const cardPlace = document.querySelector('.places__list');

// DOM узел кнопки закрытия попапов

const closePopupButton = document.querySelectorAll('.popup__close');

// Попап "Редактировать профиль" DOM

const formElement = document.querySelector('.popup_type_edit');
const editProfileButton = document.querySelector('.profile__edit-button');

// Попап "Новое место" DOM

const newCardElement = document.querySelector('.popup_type_new-card');
const addCardButton = document.querySelector('.profile__add-button');

// Вывести карточки на страницу

initialCards.forEach((item) => {
  cardPlace.append(createCard(item));
});

// Открытие попапа "Редактирование профиля"

editProfileButton.addEventListener('click', openEditProfile);

// Открытие попапа "Добавление новой карточки"

addCardButton.addEventListener('click', openAddNewCard);

// Закрытие попапа

closePopupButton.forEach(data => {data.addEventListener('click', closePopup)});

// Отправка формы попапов

formElement.addEventListener('submit', handleFormSubmitEditProfile);
newCardElement.addEventListener('submit', handleFormSubmitNewCard);
