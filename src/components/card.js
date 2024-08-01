
// Функция создания карточки

function createCard(
	data,
	deleteCardItem,
	likeCardItem,
	handleImageClick,
) 
{
	const cardTemplate = document.querySelector('#card-template').content;
	const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
	const deleteCardButton = cardElement.querySelector('.card__delete-button');
	const likeButton = cardElement.querySelector('.card__like-button');
	const titleCardItem = cardElement.querySelector('.card__title');
	const imageCardItem = cardElement.querySelector('.card__image');

	titleCardItem.textContent = data.name;
	imageCardItem.src = data.link;
	imageCardItem.alt = data.name;
	imageCardItem.addEventListener('click', () => {
		handleImageClick(data);
	});
	deleteCardButton.addEventListener('click', deleteCardItem);
	likeButton.addEventListener('click', likeCardItem);

	return cardElement;
};

// Удаление карточки

function removeCard(evt) {
	evt.target.closest('.places__item').remove();
};

// Реакция like

function likeCard(evt) {
	evt.target.classList.toggle('card__like-button_is-active');
};

export {
	createCard,
	removeCard,
	likeCard,
};