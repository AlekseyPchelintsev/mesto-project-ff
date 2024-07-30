import { initialCards } from './cardsArr/cards.js';
import { closePopup } from './closePopup/closePopup.js'
import { createCard } from './createCards/createCards.js';
import { openEditProfile, handleFormSubmitEditProfile } from './openPoups/editProfilePopup.js'
import { openAddNewCard, handleFormSubmitNewCard } from './openPoups/addNewCardPopup.js'
import '../styles/index.css';

// @todo: DOM узлы

const cardPlace = document.querySelector('.places__list');

// @todo: Общие DOM узлы попапов

const closePopupButton = document.querySelectorAll('.popup__close')

// @todo: Попап "Редактировать профиль" DOM

const formElement = document.querySelector('.popup_type_edit')
const editProfileButton = document.querySelector('.profile__edit-button')

// @todo: Попап "Новое место" DOM

const newCardElement = document.querySelector('.popup_type_new-card')
const addCardButton = document.querySelector('.profile__add-button')

// @todo: Вывести карточки на страницу

initialCards.forEach((item) => {
  cardPlace.append(createCard(item));
});

// @todo: Открытие попапа "Редактирование профиля"

editProfileButton.addEventListener('click', openEditProfile)

// @todo: Открытие попапа "Добавление новой карточки"

addCardButton.addEventListener('click', openAddNewCard)

// @todo: Открытие попапа изображения карточки



// @todo: Закрытие попапа

closePopupButton.forEach(data => {data.addEventListener('click', closePopup)})

// @todo: Отправка формы попапов

formElement.addEventListener('submit', handleFormSubmitEditProfile)
newCardElement.addEventListener('submit', handleFormSubmitNewCard)
