import {initialCards, popupProfileEdit, profileEditButton, popupFormEdit, inputName, 
  inputProfession, profileName, profileProfession, popupAddCard, popupAddCardOpen,
  popupFormAdd, cardsContainer, cardTitle, cardLink, settings, popups} from './cards.js';

import { Card } from './Card.js';

import { FormValidator } from './FormValidator.js';

/*Открытие попапа*/
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keyup', closePopupEsc);
};

/*Закрытие попапа*/
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keyup', closePopupEsc);
};

/*Overlay и крестик*/
/*function handlePopupClose (evt) {
  if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close')) {
    closePopup(evt.currentTarget)
  };
};*/

/*Escape*/
const closePopupEsc = (event) => {
  event.preventDefault();
  if (event.key === 'Escape') {
    const popupOpenedEscape = document.querySelector('.popup_opened');
    closePopup(popupOpenedEscape);
  };
};

/*Форма редактирования профиля*/
function fillProfileInputs() {
  inputName.value = profileName.textContent;
  inputProfession.value = profileProfession.textContent;
};

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileProfession.textContent = inputProfession.value;

  closePopup(popupProfileEdit);
};

/*Функция создания новой карточки с использованием template*/
function createCard(name, link) {
  // тут создаете карточку и возвращаете ее
  const cardElement = new Card(name, link, '.elements-template', openPopup, closePopup).generateCard();
  return cardElement
}

const createNewCard = (name, link) => {
  const newCard = createCard(name, link)
  cardsContainer.prepend(newCard);
};

/*Функция добавления карточек из массива InitialCards*/
const launchInitialCards = (array) => {
  array.forEach((item) => {
    createNewCard(item.name, item.link);
  })
};

/*Обработчики кнопок*/
profileEditButton.addEventListener("click", () => {
  openPopup(popupProfileEdit);
  fillProfileInputs();
});

/*Обработчик отправки формы редактирования профиля*/
popupFormEdit.addEventListener("submit", handleProfileFormSubmit);
popupAddCardOpen.addEventListener("click", () => {
  openPopup(popupAddCard);
});

popupFormAdd.addEventListener("submit", (evt) => {
  evt.preventDefault();

  createNewCard(cardTitle.value, cardLink.value);

  evt.target.reset();

  closePopup(popupAddCard);
  
  formCardValidator.toggleButtonState()
});

/*Listeners for Overlay and CloseButton*/
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
        closePopup(popup)
    }
    if (evt.target.classList.contains('popup__close')) {
        closePopup(popup)
    }
  })
})

launchInitialCards(initialCards);

/*Валидация формы для карточки*/
const formCardValidator = new FormValidator(settings, popupFormAdd);
formCardValidator.enableValidation();

/*валидация формы для профиля*/
const formProfileValidator = new FormValidator(settings, popupFormEdit);
formProfileValidator.enableValidation();