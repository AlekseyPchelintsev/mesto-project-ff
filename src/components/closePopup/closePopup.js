
// DOM элементы

const typeEdit = document.querySelector('.popup_type_edit');
const typeNewCard = document.querySelector('.popup_type_new-card');
const typeImage = document.querySelector('.popup_type_image');

// Функция закрытия попапа по нажатию кнопки "закрыть"

function closePopup(evt) {
  evt.target.closest('.popup').classList.remove("popup_is-opened");
};

// Функция закрытия попапа при клике по области

function closePopupClickOverlay(evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt);
  };
};

// Функция закрытия попапа при нажатии Esc

function closePopupKeydownEsc (evt) {
  if (evt.key === 'Escape') {
    document.removeEventListener('keydown', closePopupKeydownEsc);
    typeEdit.classList.remove("popup_is-opened");
    typeNewCard.classList.remove("popup_is-opened");
    typeImage.classList.remove("popup_is-opened");
  };
};


export {closePopup, closePopupClickOverlay, closePopupKeydownEsc}