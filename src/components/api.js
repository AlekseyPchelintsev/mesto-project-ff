// Идентификатор группы: wff-cohort-21
// Токен: a6acebed-47e0-4efe-86f9-e8ec0f075c36
// https://mesto.nomoreparties.co./v1/wff-cohort-21/cards

const url = 'https://nomoreparties.co/v1/wff-cohort-21';
const token = 'a6acebed-47e0-4efe-86f9-e8ec0f075c36';

const checkResponseError = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

const getUserInfo = () => {
  return fetch(`${url}/users/me`, {
    headers: {
      authorization: token,
    },
  }).then(checkResponseError);
};

const getCards = () => {
  return fetch(`${url}/cards`, {
    headers: {
      authorization: token,
    },
  }).then(checkResponseError);
};

const updateUserInfo = (name, about) => {
  return fetch(`${url}/users/me`, {
    method: 'PATCH',
    headers: {
      authorization: token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      about: about,
    }),
  });
};

const createNewCard = (name, link) => {
  return fetch(`${url}/cards`, {
    method: 'POST',
    headers: {
      authorization: token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      link: link,
    }),
  });
};

const addLikeCard = (cardId) => {
  return fetch(`${url}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: {
      authorization: token,
    },
  }).then(checkResponseError);
};

const deleteLikeCard = (cardId) => {
  return fetch(`${url}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: token,
    },
  }).then((res) => {
    return checkResponseError(res);
  });
};

const deleteCard = (cardId) => {
  return fetch(`${url}/cards/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: token,
    },
  }).then((res) => {
    return checkResponseError(res);
  });
};

const changeUserAvatar = (imageUrl) => {
  return fetch(`${url}/users/me/avatar`, {
    method: 'PATCH',
    headers: {
      authorization: token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      avatar: imageUrl,
    }),
  });
};

export {
  getUserInfo,
  getCards,
  updateUserInfo,
  createNewCard,
  addLikeCard,
  deleteLikeCard,
  deleteCard,
  changeUserAvatar,
};
