// Открытие попапа

function openPopup(popup) {
	popup.classList.add('popup_is-opened')
	document.addEventListener('keydown', handleEsc);
};

// Закрытие попапа

function closePopup(popup) {
	popup.classList.remove('popup_is-opened');
	document.removeEventListener('keydown', handleEsc);
};

// Закрытие попапа через overlay и (Х)

function handleCloseOnClick(data) {
	data.addEventListener('click', (evt) => {
		if (evt.target === evt.currentTarget || 
				evt.target.classList.contains('popup__close')) {
			closePopup(evt.currentTarget);
		}
	})
}

// Закрытие по нажатию Escape

function handleEsc(evt) {
	if (evt.key === 'Escape') {
		const openedPopup = document.querySelector('.popup_is-opened');
		closePopup(openedPopup);
	};
};

export {
	openPopup,
	closePopup,
	handleCloseOnClick,
};