// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;
// @todo: DOM узлы
const content = document.querySelector(".content");
const places = document.querySelector(".places__list");
// @todo: Функция создания карточки
function createCard() {
  initialCards.forEach((element) => {
    const cardElement = cardTemplate
      .querySelector(".places__item")
      .cloneNode(true);
    cardElement.querySelector("img").src = element.link;
    cardElement.querySelector("img").alt = element.name;
    cardElement.querySelector(".card__title").textContent = element.name;
    places.append(cardElement);
  });
  const deleteButtonCard = content.querySelector(".card__delete-button");

  deleteButtonCard.addEventListener("click", deleteCard);
}
// @todo: Функция удаления карточки

function deleteCard() {
  const removeCard = buttonDeleteCard.closest(".places__item");
  removeCard.remove();
}
// @todo: Вывести карточки на страницу

createCard();
