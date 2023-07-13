/*Создание класса Card*/
export default class Card {
    constructor({ data, handleCardClick }, cardSelector) {
      this._name = data.name;
      this._link = data.link;
      this._cardSelector = cardSelector;
      this._handleCardClick = handleCardClick;
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
  
    /*Назначение слушателей*/
    _setEventListeners() {
      /*Открытие просмотра изображения кликом*/
      this._image.addEventListener('click', () => {
        this._handleCardClick(this._name, this._link);
      })
     
      /*Удаление карточки*/
      this._element.querySelector('.element__delete-button').addEventListener('click', () => {
        this._handleDeleteCard();
      })

      /*Кнопка лайка*/
      this._element.querySelector('.element__like-button').addEventListener('click', (evt) => {
        this._handleLikeCard(evt);
      })
    }
  
    /*Метод слушателя лайка*/
    _handleLikeCard(evt) {
      evt.target.classList.toggle('element__like-button-active');
    }

    /*Метод создания карточки*/
    generateCard() {
      this._element = this._getTemplate();

      this._image = this._element.querySelector('.element__image');

      this._setEventListeners();
      
      this._image.src = this._link;
      this._image.alt = this._name;
      this._element.querySelector('.element__title').textContent = this._name;
      
      return this._element;
    }
}
  