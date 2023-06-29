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
const popupProfileEdit = document.querySelector(".popup-edit");
const profileEditButton = document.querySelector(".profile__edit-button");
const buttonPopupClose = popupProfileEdit.querySelector(".popup__close");
const popupFormEdit = document.forms["profile-form"];
const inputName = document.querySelector("#name");
const inputProfession = document.querySelector("#profession");
const profileName = document.querySelector(".profile__name");
const profileProfession = document.querySelector(".profile__profession");


/*Присвоение переменных добавления карточки*/
const popupAddCard = document.querySelector(".popup-card");
const popupAddCardOpen = document.querySelector(".profile__add-button");
const popupAddCardClose = popupAddCard.querySelector(".popup__close");

/*находим все крестики проекта по универсальному селектору*/
const closeButtons = document.querySelectorAll(".popup__close");
const popupFormAdd = document.forms["card-form"];
const cardsContainer = document.querySelector(".elements");
/*const cardTemplate = document.querySelector(".elements-template").content;*/
const cardTitle = document.querySelector("#title");
const cardLink = document.querySelector("#link");

const buttonSubmitElement = popupFormAdd.querySelector('.popup__submit');
const disableAttributeButton = (disableElement) => {
  disableElement.setAttribute('disabled', 'disabled');
};

/*Объект с необходимыми параметрами*/
const settings = {
  formSelector : '.popup__form',
  inputSelector : '.popup__input',
  popupSubmit : '.popup__submit',
  formSet : '.popup__form-set',
  inputErrorClass : 'popup__input_type_error',
  errorClass : 'popup__error_visible'
};

export {initialCards, popupProfileEdit, profileEditButton, buttonPopupClose, popupFormEdit, inputName, 
  inputProfession, profileName, profileProfession, popupAddCard, popupAddCardOpen, 
  popupAddCardClose, popupFormAdd, closeButtons, cardsContainer, cardTitle, cardLink, buttonSubmitElement,
  settings, popupViewImage, popupViewImageClose, popupViewImageLink, popupViewImageFigcaption, disableAttributeButton};