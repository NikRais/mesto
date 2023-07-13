/*Присвоение массива готовых карточек*/
const initialCards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    },
  ];

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

export {initialCards, profileEditButton, popupFormEdit, inputName, inputProfession, popupFormAdd, 
  settings, popupViewImage, popupViewImageClose, popupViewImageLink, popupViewImageFigcaption, profileAddButton};