import { addLikeCard, deleteLikeCard, deleteCard } from './api';
// Функция создания карточки

const createCard = (
  data,
  deleteCardItem,
  likeCardItem,
  handleImageClick,
  idData
) => {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate
    .querySelector('.places__item')
    .cloneNode(true);
  const deleteCardButton = cardElement.querySelector('.card__delete-button');
  const likeButton = cardElement.querySelector('.card__like-button');
  const likeCount = cardElement.querySelector('.card__like-counter');
  const titleCardItem = cardElement.querySelector('.card__title');
  const imageCardItem = cardElement.querySelector('.card__image');

  titleCardItem.textContent = data.name;
  imageCardItem.src = data.link;
  imageCardItem.alt = data.name;
  imageCardItem.addEventListener('click', () => {
    handleImageClick(data);
  });

  // Подключение кнопки удаления на моих карточках
  if (idData === data.owner._id) {
    deleteCardButton.classList.add('card__delete-button_visible');
  }

  // Удаление карточки
  deleteCardButton.addEventListener('click', () => {
    deleteCardItem(cardElement, data._id);
  });

  // Лайк карточки
  likeButton.addEventListener('click', () => {
    likeCardItem(likeButton, data._id, likeCount);
  });

  // Отображение лайкнутых мною карточек при загрузке страницы
  if (data.likes.some((item) => item._id === idData)) {
    likeButton.classList.add('card__like-button_is-active');
  }

  // Счетчик лайков
  likeCount.textContent = data.likes.length;

  return cardElement;
};

// Функция удаления карточки

const removeCard = (data, idData) => {
  data.remove();
  deleteCard(idData);
};

// Функция добавления/удаления лайка

const likeCard = (likeButton, idData, likeCounter) => {
  if (!likeButton.classList.contains('card__like-button_is-active')) {
    addLikeCard(idData)
      .then((data) => {
        likeCounter.textContent = data.likes.length;
        likeButton.classList.add('card__like-button_is-active');
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    deleteLikeCard(idData)
      .then((data) => {
        likeCounter.textContent = data.likes.length;
        likeButton.classList.remove('card__like-button_is-active');
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export { createCard, removeCard, likeCard };
