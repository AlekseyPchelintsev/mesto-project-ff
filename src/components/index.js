import { createCard, removeCard, likeCard } from './card.js';
import {
  openPopup,
  closePopup,
  handleCloseOnClick,
  changeSubmitTextOnLoad,
} from './modal.js';
import { enableValidation, clearValidation } from './validation.js';
import {
  getUserInfo,
  getCards,
  updateUserInfo,
  createNewCard,
  changeUserAvatar,
} from './api.js';
import '../styles/index.css';

// DOM узлы:

// Карточки
const cardPlace = document.querySelector('.places__list');
// Попапы:
const popups = document.querySelectorAll('.popup');
// редактирование профиля
const profile = document.querySelector('.profile');
const profileImage = profile.querySelector('.profile__image');
const userName = profile.querySelector('.profile__title');
const userDescription = profile.querySelector('.profile__description');
const editProfileButton = document.querySelector('.profile__edit-button');
const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupTypeEditProfileImage = document.querySelector(
  '.popup_type_change-profile-image'
);
// добавление карточки
const newCardButton = document.querySelector('.profile__add-button');
const popupTypeNewCard = document.querySelector('.popup_type_new-card');
// открытие изображения карточки
const popupTypeImage = document.querySelector('.popup_type_image');
const imagePopupContent = popupTypeImage.querySelector(
  '.popup__content_content_image'
);
const popupCaption = imagePopupContent.querySelector('.popup__caption');
const popupImage = imagePopupContent.querySelector('.popup__image');

// Формы:

// редактирование профиля
const editProfileForm = document.forms['edit-profile'];
const inputEditProfileName = editProfileForm.name;
const inputEditProfileDescription = editProfileForm.description;
// редактирование аватара
const editProfileImageForm = document.forms['profile-image'];
const inputEditProfileImage = editProfileImageForm.link;
// добавление карточки
const addNewCardForm = document.forms['new-place'];
const cardNameInput = addNewCardForm['place-name'];
const cardUrlInput = addNewCardForm.link;

// Валидация форм
const validationData = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};

enableValidation(validationData);

// Попап "Редактирование профиля"

const editProfile = () => {
  openPopup(popupTypeEdit);
  inputEditProfileName.value = userName.textContent;
  inputEditProfileDescription.value = userDescription.textContent;
  // дополнительно вызвал валидацию при открытии окна редактирования профиля
  // чтобы кнопка сабмита была в активном состоянии т.к. данные подгруженные
  // в поля автоматически являются валидными
  enableValidation(validationData);
  clearValidation(popupTypeEdit, validationData);
};

const handleFormSubmitEditProfile = (evt) => {
  evt.preventDefault();
  const submitButton = editProfileForm.querySelector('.popup__button');
  changeSubmitTextOnLoad(true, submitButton);
  const title = (userName.textContent = inputEditProfileName.value);
  const description = (userDescription.textContent =
    inputEditProfileDescription.value);
  updateUserInfo(title, description).finally(() => {
    changeSubmitTextOnLoad(false, submitButton);
  });
  closePopup(popupTypeEdit);
};

editProfileButton.addEventListener('click', editProfile);
editProfileForm.addEventListener('submit', handleFormSubmitEditProfile);

// Попап изменения аватара

const editProfileImage = () => {
  openPopup(popupTypeEditProfileImage);
  inputEditProfileImage.textContent;
};

const handleFormSubmitEditProfileImage = (evt) => {
  evt.preventDefault();
  const submitButton = editProfileImageForm.querySelector('.popup__button');
  changeSubmitTextOnLoad(true, submitButton);
  const link = inputEditProfileImage.value;
  changeUserAvatar(link)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      profileImage.style.backgroundImage = `url(${link})`;
      data.avatar = link;
    })
    .finally(() => {
      changeSubmitTextOnLoad(false, submitButton);
    });
  evt.target.reset();
  closePopup(popupTypeEditProfileImage);
};

profileImage.addEventListener('click', editProfileImage);
editProfileImageForm.addEventListener(
  'submit',
  handleFormSubmitEditProfileImage
);

// Попап "Добавление новой карточки"

const handleFormSubmitNewCard = (evt) => {
  evt.preventDefault();
  const submitButton = addNewCardForm.querySelector('.popup__button');
  changeSubmitTextOnLoad(true, submitButton);
  const name = cardNameInput.value;
  const link = cardUrlInput.value;
  createNewCard(name, link)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    })
    .then((data) => {
      cardPlace.prepend(
        createCard(data, removeCard, likeCard, openImageCard, data.owner._id)
      );
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      changeSubmitTextOnLoad(false, submitButton);
    });
  evt.target.reset();
  closePopup(popupTypeNewCard);
};

newCardButton.addEventListener('click', () => {
  clearValidation(popupTypeNewCard, validationData);
  openPopup(popupTypeNewCard);
});
addNewCardForm.addEventListener('submit', handleFormSubmitNewCard);

// Открытие попапа просмотра изображения карточки.

const openImageCard = (evt) => {
  openPopup(popupTypeImage);
  popupCaption.textContent = evt.name;
  popupImage.src = evt.link;
  popupImage.alt = evt.name;
};

// Закрытие попапа через overlay и (Х)

popups.forEach((item) => handleCloseOnClick(item));

// Рендер карточек

const renderCard = (item, userId) => {
  const cardElement = createCard(
    item,
    removeCard,
    likeCard,
    openImageCard,
    userId
  );
  cardPlace.append(cardElement);
};

//======================== API ============================

Promise.all([getUserInfo(), getCards()])
  .then(([dataUser, dataCards]) => {
    let userId = dataUser._id;
    userName.textContent = dataUser.name;
    profileImage.style.backgroundImage = `url(${dataUser.avatar})`;
    userDescription.textContent = dataUser.about;

    dataCards.forEach((item) => {
      renderCard(item, userId);
    });
  })
  .catch((err) => {
    console.log(err);
  });
