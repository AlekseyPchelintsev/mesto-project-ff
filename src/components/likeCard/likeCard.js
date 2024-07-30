
// Функция лайка карточки

function likeCard (evt) {
  evt.target.classList.toggle('card__like-button_is-active');
}

export {likeCard}