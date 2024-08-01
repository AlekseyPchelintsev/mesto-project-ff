import { initialCards, } from './cards.js';
import { createCard, removeCard, likeCard, } from './card.js';
import { openPopup, closePopup, } from './modal.js';
import '../styles/index.css';

// DOM узлы:

const cardPlace = document.querySelector('.places__list');

// Попапы:

// редактирование профиля
const editProfileButton = document.querySelector('.profile__edit-button');
const popupTypeEdit = document.querySelector('.popup_type_edit');
const editProfileTitle = document.querySelector('.profile__title');
const editProfileDescription = document.querySelector('.profile__description');
// добавление карточки
const newCardButton = document.querySelector('.profile__add-button');
const popupTypeNewCard = document.querySelector('.popup_type_new-card');
// открытие изображения карточки
const popupTypeImage = document.querySelector('.popup_type_image');
const imagePopupContent = popupTypeImage.querySelector('.popup__content_content_image');
const popupCaption = imagePopupContent.querySelector('.popup__caption');
const popupImage = imagePopupContent.querySelector('.popup__image');
// кнопки закрытия попапов (Х)
const closePopupsButtons = document.querySelectorAll('.popup__close');

// Формы:

// редактирование профиля
const editProfileForm = document.forms['edit-profile'];
const inputEditProfileName = editProfileForm.name;
const inputEditProfileDescription = editProfileForm.description;
// добавление карточки
const addNewCardForm = document.forms['new-place'];
const cardNameInput = addNewCardForm['place-name'];
const cardUrlInput = addNewCardForm.link;



// Попап "Редактирование профиля"

function editProfile () {
  openPopup(popupTypeEdit);
  inputEditProfileName.value = editProfileTitle.textContent;
  inputEditProfileDescription.value = editProfileDescription.textContent;
};

function handleFormSubmitEditProfile(evt) {
  evt.preventDefault();
  editProfileTitle.textContent = inputEditProfileName.value;
  editProfileDescription.textContent = inputEditProfileDescription.value;
  closePopup(popupTypeEdit);
};

editProfileButton.addEventListener('click', editProfile);
editProfileForm.addEventListener('submit', handleFormSubmitEditProfile);

// Попап "Добавление новой карточки"

function addCard() {
  const newObj = {};
  newObj.name = cardNameInput.value;
  newObj.link = cardUrlInput.value;
  renderCard(newObj);
};

function handleFormSubmitNewCard(evt) {
  evt.preventDefault();
  addCard();
  evt.target.reset();
  closePopup(popupTypeNewCard);
};

newCardButton.addEventListener('click', () => openPopup(popupTypeNewCard));
addNewCardForm.addEventListener('submit', handleFormSubmitNewCard);

// Открытие попапа просмотра изображения карточки.

function openImageCard(evt) {
	openPopup(popupTypeImage)
	popupCaption.textContent = evt.name;
	popupImage.src = evt.link;
	popupImage.alt = evt.name;
};

// Закрытие попапа на "крестик"

closePopupsButtons.forEach(data => {
  const popup = data.closest('.popup');
  data.addEventListener('click', () => closePopup(popup));
});

// Рендер карточек

function renderCard(item, method = 'prepend') {
  const cardElement = createCard(item, removeCard, likeCard, openImageCard);
  cardPlace[method](cardElement)
}

initialCards.forEach((item) => {
  renderCard(item, 'append');
});



