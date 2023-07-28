/*Переменные*/
/*Присвоение переменных увеличенного изображения*/
const popupViewImage = document.querySelector(".popup-image");
const popupViewImageClose = popupViewImage.querySelector(".popup__close");
const popupViewImageLink = popupViewImage.querySelector(".popup__img");
const popupViewImageFigcaption = popupViewImage.querySelector(".popup__figcaption");

/*Присвоение переменных редактирования профиля*/
const profileEditButton = document.querySelector(".profile__edit-button");
const popupFormEdit = document.forms["profile-form"];
const inputName = document.querySelector("#username");
const inputProfession = document.querySelector("#profession");

/*Присовение переменных редактирования аватара*/
const avatar = document.querySelector('.profile__avatar');
const popupEditAvatar = document.querySelector('.popup-avatar');
const popupFormAvatar = popupEditAvatar.querySelector('.popup__form');
const avatarEditButton = document.querySelector('.profile__avatar-button');

/*Присвоение переменных для создания новой карточки*/
const profileAddButton = document.querySelector(".profile__add-button");

/*находим все крестики проекта по универсальному селектору*/
const popupFormAdd = document.forms["card-form"];

/*Объект с необходимыми параметрами*/
const settings = {
  formSelector : '.popup__form',
  inputSelector : '.popup__input',
  popupSubmit : '.popup__submit',
  formSet : '.popup__form-set',
  inputErrorClass : 'popup__input_type_error',
  errorClass : 'popup__error_visible'
};

export {profileEditButton, popupFormEdit, inputName, inputProfession, popupFormAdd, 
  settings, popupViewImage, popupViewImageClose, popupViewImageLink, popupViewImageFigcaption, profileAddButton, avatar, popupFormAvatar, avatarEditButton};