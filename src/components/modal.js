// Открытие попапа

function openPopup(popup) {
	popup.classList.add('popup_is-opened')
	document.addEventListener('click', handleOverlay)
	document.addEventListener('keydown', handleEsc);
};

// Закрытие попапа

function closePopup(popup) {
	popup.classList.remove('popup_is-opened');
	document.removeEventListener('keydown', handleEsc);
};

// Закрытие по клику на оверлее или по нажатию Escape


function handleOverlay(evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  }
}

function handleEsc(evt) {
	if (evt.key === 'Escape') {
		const openedPopup = document.querySelector('.popup_is-opened');
		closePopup(openedPopup);
	};
};

export {
	openPopup,
	closePopup,
};