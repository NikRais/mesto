import './index.css';

import {profileEditButton, popupFormEdit, inputName, 
  inputProfession, popupFormAdd, settings, profileAddButton, avatar,
  popupFormAvatar, avatarEditButton} from '../utils/cards.js';

import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import Api from '../components/Api.js';

let userId = null;

/*Создание экземпляра класса Api*/
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-71',
  headers: {
    authorization: '1194c4e9-67a4-4aaf-99b3-5175245ee53d',
    'Content-Type': 'application/json'
  }
});

/*Загрузка с сервера карточек и информации о пользователе*/
Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([initialCards, userData]) => {
    userInfo.setUserInfo(userData);
    userId = userData._id;
    cardList.renderItems(initialCards);
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  });

/*Форма редактирования профиля*/
function fillProfileInputs({username, profession}) {
  inputName.value = username;
  inputProfession.value = profession;
};

/*Функция создания новой карточки с использованием template*/
const createCard = (data) => {
  const card = new Card({
    data: data,
    cardSelector: '.elements-template',
    userId: userId,
    handleCardClick: (name, link) => {
      popupViewImage.open(name, link);
    },
    deleteIconClick: (cardId) => {
      deleteCardConfirm.open();
      deleteCardConfirm.callback(() => {
        api.deleteCard(cardId)
          .then(() => {
            deleteCardConfirm.close();
            card.handleDeleteCard();
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`);
          });
      });
    },
    setLike: (cardId) => {
      api.likePut(cardId)
        .then((data) => {
          card.handleLikeCard(data);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    },
    removeLike: (cardId) => {
      api.likeDel(cardId)
        .then((data) => {
          card.handleLikeCard(data);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    }
  });
  const cardElement = card.generateCard();
  return cardElement;
};

/*Отрисовка(Section) карточек из массива InitialCards*/
const cardList = new Section ({
  renderer: (card) => {
    cardList.addItem(createCard(card));
  },
}, '.elements');

/*Создание экземпляра класса UserInfo*/
const userInfo = new UserInfo({
  username: '.profile__name',
  profession: '.profile__profession',
  avatar: '.profile__avatar'
});

/*Попап формы редактирования профиля*/
const profilePopupEdit = new PopupWithForm({
  popupSelector: '.popup-edit',
  handleFormSubmit: (dataForm) => {
    profilePopupEdit.loadSubmit(true);
    api.editUserInfo(dataForm)
      .then((dataForm) => {
        userInfo.setUserInfo(dataForm);
        profilePopupEdit.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        profilePopupEdit.loadSubmit(false);
      });
  }
});

/*Слушатель для формы редактирования профиля*/
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

/*Попапа редактирования аватара*/
const avatarPopupEdit = new PopupWithForm({
  popupSelector: '.popup-avatar',
  handleFormSubmit: (data) => {
    avatarPopupEdit.loadSubmit(true);
    api.editAvatar(data)
      .then((data) => {
        userInfo.setUserInfo(data);
        avatarPopupEdit.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        avatarPopupEdit.loadSubmit(false);
      });
  }
});

/*Слушатель для формы редактирования аватара*/
avatarPopupEdit.setEventListeners();

/*Обработчик для кнопки редактирования аватара*/
avatarEditButton.addEventListener('click', () => {
  formAvatarValidator.toggleButtonState();
  avatarPopupEdit.open();
});

/*Создаем попап с подтверждением удаления карточки*/
const deleteCardConfirm = new PopupWithConfirmation({
  popupSelector: '.popup-delete'
});

/*Слушатель для формы подтверждения удаления*/
deleteCardConfirm.setEventListeners();

/*Card with image*/
const addCard = new PopupWithForm({
  popupSelector: '.popup-card',
  handleFormSubmit: (formData) => {
    addCard.loadSubmit(true);
    api.addCard(formData)
      .then((formData) => {
        cardList.addItem(createCard(formData));
        addCard.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        addCard.loadSubmit(false);
      });
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

/*Валидация формы для аватара*/
const formAvatarValidator = new FormValidator(settings, popupFormAvatar);
formAvatarValidator.enableValidation();