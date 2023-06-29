import {initialCards, popupProfileEdit, profileEditButton, buttonPopupClose, popupFormEdit, inputName, 
  inputProfession, profileName, profileProfession, popupViewImage, popupAddCard, popupAddCardOpen, 
  popupAddCardClose, popupFormAdd, closeButtons, cardsContainer, 
  cardTitle, cardLink, buttonSubmitElement, settings, disableAttributeButton} from './cards.js';

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

/*Overlay*/
function closePopupOverlay (evt) {
  if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close')) {
    closePopup(evt.currentTarget)
  };
};

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
const createNewCard = (name, link) => {
  const newCard = new Card(name, link, '.elements-template', openPopup, closePopup).generateCard();
  cardsContainer.prepend(newCard);
};

/*Функция добавления карточек из массива InitialCards*/
const launchInitialCards = (array) => {
  array.forEach((item) => {
    createNewCard(item.name, item.link);
  })
};

/*Функция закрытия всех крестиков*/
closeButtons.forEach((button) => {
  const popup = button.closest(".popup");

/*Обработчики кнопок*/
profileEditButton.addEventListener("click", () => {
  openPopup(popupProfileEdit);
  fillProfileInputs();
});

  /*Устанавливаем обработчик закрытия на крестик*/
  button.addEventListener("click", () => closePopup(popup));
});

/*Обработчик отправки формы редактирования профиля*/
popupFormEdit.addEventListener("submit", handleProfileFormSubmit);
popupAddCardOpen.addEventListener("click", () => {
  openPopup(popupAddCard);
});

popupFormAdd.addEventListener("submit", (evt) => {
  evt.preventDefault();

  createNewCard(cardTitle.value, cardLink.value);

  cardTitle.value = "";
  cardLink.value = "";

  closePopup(popupAddCard);
  
  disableAttributeButton(buttonSubmitElement);
});

/*Listeners for Overlay*/
popupProfileEdit.addEventListener('mousedown', closePopupOverlay);
popupAddCard.addEventListener('mousedown', closePopupOverlay);
popupViewImage.addEventListener('mousedown', closePopupOverlay);

launchInitialCards(initialCards);

/*Валидация формы для карточки*/
const formCardValidator = new FormValidator(settings, popupFormAdd);
formCardValidator.enableValidation();

/*валидация формы для профиля*/
const formProfileValidator = new FormValidator(settings, popupFormEdit);
formProfileValidator.enableValidation();