
// Функция закрытия попапа по нажатию кнопки "закрыть"

function closePopup(evt) {
  evt.target.closest('.popup').classList.remove("popup_is-opened")
}

// Закрытие попапа при клике по области и при нажатии Esc

function closePopupClickOverlay(evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt)
  }
}

function closePopupKeydownEsc (evt) {
  if (evt.key === 'Escape') {
    document.removeEventListener('keydown', closePopupKeydownEsc)
    document.querySelector('.popup_type_edit').classList.remove("popup_is-opened")
    document.querySelector('.popup_type_new-card').classList.remove("popup_is-opened")
    document.querySelector('.popup_type_image').classList.remove("popup_is-opened")
  }
}


export {closePopup, closePopupClickOverlay, closePopupKeydownEsc}