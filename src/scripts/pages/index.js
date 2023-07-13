import './index.css';

import {initialCards, profileEditButton, popupFormEdit, inputName, 
  inputProfession, popupFormAdd, settings, profileAddButton} from '../utils/cards.js';

import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';

/*Форма редактирования профиля*/
function fillProfileInputs({username, profession}) {
  inputName.value = username;
  inputProfession.value = profession;
};

/*Функция создания новой карточки с использованием template*/
const createCard = (data) => {
  const card = new Card({
    data: data,
    handleCardClick: (name, link) => {
      popupViewImage.open(name, link);
    }}, '.elements-template');
  const cardElement = card.generateCard();
  return cardElement;
};

/*Отрисовка(Section) карточек из массива InitialCards*/
const cardList = new Section ({
  items: initialCards,
  renderer: (item) => {
    cardList.addItem(createCard(item));
  },
}, '.elements');
cardList.renderItems();

/*User Profile*/
const userInfo = new UserInfo({
  username: '.profile__name',
  profession: '.profile__profession'
});

/*Попап формы редактирования профиля*/
const profilePopupEdit = new PopupWithForm({
  popupSelector: '.popup-edit',
  handleFormSubmit: (dataForm) => {
    userInfo.setUserInfo({
      username: dataForm.username,
      profession: dataForm.profession
    });
    profilePopupEdit.close();
  }
});

/*Слушатель для формы редактирования профиля */
profilePopupEdit.setEventListeners();

/*Обработчик для кнопки редактирования профиля*/
profileEditButton.addEventListener('click', () => {
  const info = userInfo.getUserInfo();
  fillProfileInputs({
    username: info.username,
    profession: info.profession
  });
  profilePopupEdit.open();
});

/*Card with image*/
const addCard = new PopupWithForm({
  popupSelector: '.popup-card',
  handleFormSubmit: (formData) => {
    cardList.addItem(createCard(formData));
    addCard.close();
  }
});
/*Слушатель для формы добавления новой карточки*/
addCard.setEventListeners();
/*Добавления обработчика для кнопки создания новой карточки*/
profileAddButton.addEventListener('click', () => {
  formCardValidator.toggleButtonState();
  addCard.open();
})

/*Просмотр изображения */
const popupViewImage = new PopupWithImage('.popup-image');
popupViewImage.setEventListeners();

/*Валидация формы для карточки*/
const formCardValidator = new FormValidator(settings, popupFormAdd);
formCardValidator.enableValidation();

/*Валидация формы для профиля*/
const formProfileValidator = new FormValidator(settings, popupFormEdit);
formProfileValidator.enableValidation();