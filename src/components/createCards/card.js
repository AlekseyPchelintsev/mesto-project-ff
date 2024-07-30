import { openimagePopup } from '../openPoups/openCardImagePopup.js'
import {likeCard} from '../likeCard/likeCard.js'

// Функция создания карточки

function createCard(card) {

  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate
    .querySelector('.places__item')
    .cloneNode(true);
  const deleteCardButton = cardElement.querySelector('.card__delete-button');

  cardElement.querySelector('.card__title').textContent = card.name;
  cardElement.querySelector('.card__image').src = card.link;
  cardElement.querySelector('.card__image').alt = card.name;
  cardElement.querySelector('.card__image').addEventListener('click', () => openimagePopup(card));
  cardElement.querySelector('.card__like-button').addEventListener('click', likeCard);
  deleteCardButton.addEventListener('click', () => {
    cardElement.remove();
  });

  return cardElement;
}

export {createCard}
