import {initialCards} from './cards.js'
import '../styles/index.css';

// @todo: Темплейт карточки

const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы

const cardPlace = document.querySelector(".places__list");

// @todo: Функция создания карточки
function createCard(card) {
  const cardElement = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);
  const deleteCardButton = cardElement.querySelector(".card__delete-button");

  cardElement.querySelector(".card__image").src = card.link;
  cardElement.querySelector(".card__image").alt = card.name;
  cardElement.querySelector(".card__title").textContent = card.name;

  deleteCardButton.addEventListener("click", () => {
    cardElement.remove();
  });
  return cardElement;
}
// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
initialCards.forEach((item) => {
  cardPlace.append(createCard(item));
});