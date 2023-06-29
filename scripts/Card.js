import {popupViewImage, popupViewImageClose, popupViewImageLink, popupViewImageFigcaption} from './cards.js';

/*Создание класса Card*/
export class Card {
    constructor(name, link, cardSelector, openPopup, closePopup) {
      this._container = document.querySelector(cardSelector);
      this._name = name;
      this._link = link;
      this._cardSelector = cardSelector;
      this._closePopup = closePopup;
      this._openPopup = openPopup;
    }
  
    _getTemplate() {
      const cardElement = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);
  
      return cardElement;
    }
  
    /*Метод слушателя удаления*/
    _handleDeleteCard() {
      this._element.remove();
      this._element = null;
    }
  
    /*Метод слушателя просмотра изображения*/
    _handleOpenPopup() {
      popupViewImageLink.src = this._link;
      popupViewImageLink.alt = this._name;
      popupViewImageFigcaption.textContent = this._name;
      this._openPopup(popupViewImage);
    }

    /*Метод слушателя лайка*/
    _handleLikeCard() {
        const likeButton = this._element.querySelector('.element__like-button');
        likeButton.classList.toggle('element__like-button-active');
    }
  
    /*Метод слушателя закрытия изображения*/
    _handleClosePopup() {
      popupViewImageLink.src = '';
      popupViewImageLink.alt = '';
      popupViewImageFigcaption.textContent = '';
      this._closePopup(popupViewImage)
    }
  
    /*Назначение слушателей*/
    _setEventListeners() {
      /*Открытие просмотра изображения кликом*/
      this._element.querySelector('.element__image').addEventListener('click', () => {
        this._handleOpenPopup();
      })
      /*Закрытие просмотра изображения кликом на крестик*/
      popupViewImageClose.addEventListener('click', () => {
        this._handleClosePopup();
      })
      /*Удаление карточки*/
      this._element.querySelector('.element__delete-button').addEventListener('click', () => {
        this._handleDeleteCard();
      })
      /*Кнопка лайка*/
      this._element.querySelector('.element__like-button').addEventListener('click', () => {
        this._handleLikeCard();
      })
    }
  
    /*Метод создания карточки*/
    generateCard() {
      this._element = this._getTemplate();
      this._setEventListeners();
  
      this._element.querySelector('.element__image').src = this._link;
      this._element.querySelector('.element__image').alt = this._name;
      this._element.querySelector('.element__title').textContent = this._name;
  
      return this._element;
    }
  }
  