// @todo: Темплейт карточки

const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы

const places = document.querySelector(".places__list");

// @todo: Функция создания карточки

function createCard(data, deleteCard) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const deleteButtonCard = cardElement.querySelector(".card__delete-button");

  cardElement.querySelector(".card__image").src = data.link;
  cardElement.alt = data.name;
  cardElement.querySelector(".card__title").textContent = data.name;

  deleteButtonCard.addEventListener("click", () => {
    deleteCard(cardElement);
  });

  return cardElement;
}

// @todo: Функция удаления карточки

function removeCard(cardItem) {
  cardItem.remove();
}

// @todo: Вывести карточки на страницу

initialCards.forEach((card) => {
  const cardElement = createCard(card, removeCard);
  places.append(cardElement);
});
