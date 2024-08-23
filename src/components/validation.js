//Проверка валидности всех полей
const hasInvalidInput = (inputList) => {
  return inputList.some((item) => {
    return !item.validity.valid;
  });
};
// Выводим ошибку
const showErrorMessage = (
  formElement,
  inputElement,
  errorMessage,
  inputErrorClass,
  errorClass
) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
};
// Убираем ошибку
const hideErrorMessage = (
  formElement,
  inputElement,
  inputErrorClass,
  errorClass
) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(errorClass);
};
// Проверка валидности конкретного поля
const isValid = (formElement, inputElement, inputErrorClass, errorClass) => {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity('');
  }

  if (!inputElement.validity.valid) {
    showErrorMessage(
      formElement,
      inputElement,
      inputElement.validationMessage,
      inputErrorClass,
      errorClass
    );
  } else {
    hideErrorMessage(formElement, inputElement, inputErrorClass, errorClass);
  }
};
//Кнопка submit
const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(inactiveButtonClass);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(inactiveButtonClass);
  }
};
// Запуск валидации
const enableValidation = (validationData) => {
  const formList = Array.from(
    document.querySelectorAll(validationData.formSelector)
  );
  formList.forEach((item) => {
    const inputList = Array.from(
      item.querySelectorAll(validationData.inputSelector)
    );
    const buttonElement = item.querySelector(
      validationData.submitButtonSelector
    );
    const setEventListeners = (formElement) => {
      toggleButtonState(
        inputList,
        buttonElement,
        validationData.inactiveButtonClass
      );
      inputList.forEach((item) => {
        item.addEventListener('input', () => {
          toggleButtonState(
            inputList,
            buttonElement,
            validationData.inactiveButtonClass
          );
          isValid(
            formElement,
            item,
            validationData.inputErrorClass,
            validationData.errorClass
          );
        });
      });
    };
    setEventListeners(item);
  });
};
// Очистка полей ввода
const clearFormInput = (formElement, input, validationData) => {
  input.forEach((item) => {
    hideErrorMessage(
      formElement,
      item,
      validationData.inputErrorClass,
      validationData.errorClass
    );
  });
};
// Очистка форм при закрытии попапа
const clearValidation = (formElement, validationData) => {
  const inputList = Array.from(
    formElement.querySelectorAll(validationData.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    validationData.submitButtonSelector
  );
  clearFormInput(formElement, inputList, validationData);
  toggleButtonState(
    inputList,
    buttonElement,
    validationData.inactiveButtonClass
  );
};

export { enableValidation, clearValidation };
