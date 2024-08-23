// Открытие попапа

const openPopup = (popup) => {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', handleEsc);
};

// Закрытие попапа

const closePopup = (popup) => {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', handleEsc);
};

// Закрытие попапа через overlay и (Х)

const handleCloseOnClick = (data) => {
  data.addEventListener('click', (evt) => {
    if (
      evt.target === evt.currentTarget ||
      evt.target.classList.contains('popup__close')
    ) {
      closePopup(evt.currentTarget);
    }
  });
};

// Закрытие по нажатию Escape

const handleEsc = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    closePopup(openedPopup);
  }
};

// Изменение текста кнопки сабмита при отправке формы

const changeSubmitTextOnLoad = (checkStatus, itemButton) => {
  if (checkStatus) {
    itemButton.textContent = 'Сохранение...';
  } else {
    itemButton.textContent = 'Сохранить';
  }
};

export { openPopup, closePopup, handleCloseOnClick, changeSubmitTextOnLoad };
