import {initialCards} from '../cardsArr/cards.js';
import {createCard} from '../createCards/createCards.js'

// Функция добавления новой карточки

function addCard(cardName, cardUrl) {
  const newObj = {};
  newObj.name = cardName.value
  newObj.link = cardUrl.value
  initialCards.unshift(newObj)
  cardName.value = ''
  cardUrl.value = ''
  document.querySelector('.places__list').prepend(createCard(newObj))
}

export {addCard}