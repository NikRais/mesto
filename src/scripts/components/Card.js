/*Создание класса Card*/
export default class Card {
    constructor({ data, handleCardClick, cardSelector, userId, setLike, removeLike, deleteIconClick }) {
      this._name = data.name;
      this._link = data.link;
      this._cardSelector = cardSelector;
      this._handleCardClick = handleCardClick;
      this._userId = userId;
      this._cardId = data._id;
      this._likes = data.likes;
      this._setLike = setLike;
      this._removeLike = removeLike;
      this._deleteIconClick = deleteIconClick;
      this._cardOwnerId = data.owner._id;
    }
  
    /*Получение шаблона для карточки*/
    _getTemplate() {
      this._card = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);
  
      return this._card;
    }
  
    /*Метод слушателя удаления*/
    handleDeleteCard() {
      this._element.remove();
      this._element = null;
    }
  
    /*Назначение слушателей*/
    _setEventListeners() {
      /*Открытие просмотра изображения кликом*/
      this._image.addEventListener('click', () => {
        this._handleCardClick(this._name, this._link);
      })
     
      /*Удаление карточки*/
      this._deleteButton.addEventListener('click', () => {
        this._deleteIconClick(this._cardId);
      })

      /*Кнопка лайка*/
      this._likeButton.addEventListener('click', () => {
        if (this._likeButton.classList.contains('element__like-button-active')) {
          this._removeLike(this._cardId);
        } else {
          this._setLike(this._cardId);
        }
      })
    }

    /*Метод создания карточки*/
    generateCard() {
      this._element = this._getTemplate();

      this._image = this._element.querySelector('.element__image');
      this._likeButton = this._element.querySelector('.element__like-button');
      this._deleteButton = this._element.querySelector('.element__delete-button');
      this._likesNumber = this._element.querySelector('.element__like-number');

      this._setEventListeners();
      
      this._image.src = this._link;
      this._image.alt = this._name;
      this._element.querySelector('.element__title').textContent = this._name;
      this._isCardLiked();
      this._removeDeleteButton();
      this._likesNumber.textContent = this._likes.length;
      this._setEventListeners();
      
      return this._element;
    }

    /*Проверяет наличие лайка*/
    _isCardLiked() {
      if (this._likes.some((user) => {
        return this._userId === user._id;
      })) {
        this._likeButton.classList.add('element__like-button-active');
      }
    }    

    /*Метод слушателя лайка. Поставить или удалить лайк*/
    handleLikeCard(data) {
      this._likes = data.likes;
      this._likesNumber.textContent = this._likes.length;
      this._likeButton.classList.toggle('element__like-button-active');
    }

  /*Проверяет является ли пользователь владельцем карточки => оставляет/убирает кнопку удаления*/
  _removeDeleteButton() {
    if (this._userId !== this._cardOwnerId) {
      this._deleteButton.remove();
    }
  }
}
  