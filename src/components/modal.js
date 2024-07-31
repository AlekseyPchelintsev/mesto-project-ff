// Открытие попапа

function openPopup(popup) {
	popup.classList.add('popup_is-opened')
	document.addEventListener('mousedown', closePopupClickOverlayOrEsc)
	document.addEventListener('keydown', closePopupClickOverlayOrEsc);
};

// Закрытие попапа

function closePopup(popup) {
	popup.classList.remove('popup_is-opened');
	document.removeEventListener('keydown', closePopupClickOverlayOrEsc);
};

// Закрытие по клику на оверлее или по нажатию Escape

function closePopupClickOverlayOrEsc(evt) {
	if (evt.target.classList.contains('popup') || evt.key === 'Escape') {
		const openedPopup = document.querySelector('.popup_is-opened');
		closePopup(openedPopup);
	};
};

export {
	openPopup,
	closePopup,
};