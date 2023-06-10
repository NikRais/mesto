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
// находим все крестики проекта по универсальному селектору
const closeButtons = document.querySelectorAll(".popup__close");
const popupFormAdd = document.forms["card-form"];
const cardsContainer = document.querySelector(".elements");
const cardTemplate = document.querySelector(".elements-template").content;
const cardTitle = document.querySelector("#title");
const cardLink = document.querySelector("#link");
/*Присвоение переменных увеличенного изображения*/
const popupViewImage = document.querySelector(".popup-image");
const popupViewImageClose = popupViewImage.querySelector(".popup__close");
const popupViewImageLink = popupViewImage.querySelector(".popup__img");
const popupViewImageFigcaption =
  popupViewImage.querySelector(".popup__figcaption");

const buttonSubmitElement = popupFormAdd.querySelector('.popup__submit');

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keyup', closePopupEsc);
};

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keyup', closePopupEsc);
};

/*overlay*/
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
const createNewCard = (nameValue, imgValue) => {
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
  const cardImage = cardElement.querySelector(".element__image");
  const cardTitle = cardElement.querySelector(".element__title");
  const cardLikeButton = cardElement.querySelector(".element__like-button");
  const cardDeleteButton = cardElement.querySelector(".element__delete-button");

  cardTitle.textContent = nameValue;
  cardImage.src = imgValue;
  cardImage.alt = nameValue;

  /*Обработчики кнопок и функций*/
  cardLikeButton.addEventListener("click", (evt) => {
    evt.target.classList.toggle("element__like-button-active");
  });
  cardDeleteButton.addEventListener("click", (event) => {
    event.target.closest(".element").remove();
  });
  cardImage.addEventListener("click", openPopupImage);
  return cardElement;
};

/*Функция добавления в DOM*/
const addCardToDOM = (name, link) => {
  cardsContainer.prepend(createNewCard(name, link));
};
/*Функция просмотра изображения*/
const openPopupImage = (event) => {
  openPopup(popupViewImage);

  const eventTargetImg = event.target;
  popupViewImageLink.src = eventTargetImg.src;
  popupViewImageFigcaption.textContent = eventTargetImg.alt;
  popupViewImageLink.alt = eventTargetImg.alt;
};
/*Функция добавления карточек из массива InitialCards*/
const launchInitialCards = (cards) => {
  cards.map((el) => {
    return addCardToDOM(el.name, el.link);
  });
};

/*Функция закрытия всех крестиков*/
closeButtons.forEach((button) => {
  const popup = button.closest(".popup");

/*Обработчики кнопок*/
profileEditButton.addEventListener("click", () => {
  openPopup(popupProfileEdit);
  fillProfileInputs();
});

  /* устанавливаем обработчик закрытия на крестик*/
  button.addEventListener("click", () => closePopup(popup));
});

popupFormEdit.addEventListener("submit", handleProfileFormSubmit);
popupAddCardOpen.addEventListener("click", () => {
  openPopup(popupAddCard);
});

popupFormAdd.addEventListener("submit", (evt) => {
  evt.preventDefault();

  addCardToDOM(cardTitle.value, cardLink.value);

  cardTitle.value = "";
  cardLink.value = "";

  closePopup(popupAddCard);
  
  disableAttributeButton(buttonSubmitElement);
});

/* Listeners for Overlay*/
popupProfileEdit.addEventListener('mousedown', closePopupOverlay);
popupAddCard.addEventListener('mousedown', closePopupOverlay);
popupViewImage.addEventListener('mousedown', closePopupOverlay);

launchInitialCards(initialCards);