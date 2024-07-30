import { closePopupClickOverlay, closePopupKeydownEsc } from "../closePopup/closePopup";

// Функция открытия попапа развернутого изображение карточки

function openimagePopup(card) {

    const imagePopup = document.querySelector('.popup_type_image');
    const imagePopupContent = imagePopup.querySelector('.popup__content_content_image')
    imagePopup.classList.add("popup_is-opened");

    imagePopupContent.querySelector('.popup__caption').textContent = card.name;
    imagePopupContent.querySelector('.popup__image').src = card.link;
    imagePopupContent.querySelector('.popup__image').alt = card.name;

    imagePopup.addEventListener('click', closePopupClickOverlay)
    document.addEventListener('keydown', closePopupKeydownEsc)
  }

export {openimagePopup}