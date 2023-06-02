/*Присвоение массива готовых карточек*/
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

/*Присвоение переменных редактирования профиля*/
const popupProfileEdit = document.querySelector('.popup-edit');
const profileEditButton = document.querySelector('.profile__edit-button');
const buttonPopupClose = popupProfileEdit.querySelector('.popup__close');
const popupFormEdit = popupProfileEdit.querySelector('.popup__form');
const inputName = document.getElementById('name');
const inputProfession = document.getElementById('profession');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');

/*Присвоение переменных добавления карточки*/
const popupAddCard = document.querySelector('.popup-card');
const popupAddCardOpen = document.querySelector('.profile__add-button');
const popupAddCardClose = popupAddCard.querySelector('.popup__close');
const popupFormAdd = popupAddCard.querySelector('.popup__form');
const cardsContainer = document.querySelector('.elements');
const cardTemplate = document.querySelector('.elements-template').content;
const cardTitle = document.getElementById('title');
const cardLink = document.getElementById('link');
/*Присвоение переменных увеличенного изображения*/
const popupViewImage = document.querySelector('.popup-image');
const popupViewImageClose = popupViewImage.querySelector('.popup__close');
const popupViewImageLink = popupViewImage.querySelector('.popup__img');
const popupViewImageFigcaption = popupViewImage.querySelector('.popup__figcaption');

/*Функция открытия попапа при помощи toogle*/
const togglePopup = (popup) => {
  popup.classList.toggle('popup_opened');
};
/*Форма редактирования профиля*/
function ProfileEditFormInput() {
  inputName.value = profileName.textContent;
  inputProfession.value = profileProfession.textContent;
};

function ProfileEditSubmit (evt) {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileProfession.textContent = inputProfession.value;

  togglePopup(popupProfileEdit);
};

/*Функция создания новой карточки с использованием template*/
const createNewCard = (nameValue, imgValue) => {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const cardImage = cardElement.querySelector('.element__image');
  const cardTitle = cardElement.querySelector('.element__title');
  const cardLikeButton = cardElement.querySelector('.element__like-button');
  const cardDeleteButton = cardElement.querySelector('.element__delete-button');

  cardTitle.textContent = nameValue;
  cardImage.src = imgValue;
  cardImage.alt = nameValue;

/*Обработчики кнопок и функций*/
cardLikeButton.addEventListener('click', (evt) => {
  evt.target.classList.toggle('element__like-button-active');
});
cardDeleteButton.addEventListener('click', (event) => {
  event.target.closest('.element').remove();
});
cardImage.addEventListener('click', openPopupImage);
return cardElement;
};

/*Функция добавления в DOM*/
const addCardToDOM = (name, link) => {
cardsContainer.prepend(createNewCard(name, link));
};
/*Функция просмотра изображения*/
const openPopupImage = (event) => {
  togglePopup(popupViewImage);

  eventTargetImg = event.target
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

/*Обработчики кнопок*/
profileEditButton.addEventListener('click', () => {
  togglePopup(popupProfileEdit);
  ProfileEditFormInput();
});
buttonPopupClose.addEventListener('click', () => {
togglePopup(popupProfileEdit);
});
popupFormEdit.addEventListener('submit', ProfileEditSubmit);
popupAddCardOpen.addEventListener('click', () => {
  togglePopup(popupAddCard);
});
popupAddCardClose.addEventListener('click', () => {
  togglePopup(popupAddCard);
});
popupFormAdd.addEventListener('submit', (evt) => {
evt.preventDefault();

addCardToDOM(cardTitle.value, cardLink.value);

cardTitle.value = "";
cardLink.value = "";

togglePopup(popupAddCard);
});

popupViewImageClose.onclick = () => togglePopup(popupViewImage);

launchInitialCards(initialCards);