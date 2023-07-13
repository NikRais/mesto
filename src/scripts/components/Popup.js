/*Открытие и закрытие попапа*/
export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeButton = this._popup.querySelector('.popup__close');
    this._escapeClose = this._handleEscClose.bind(this);
  }

  /*Открытие попапа*/
  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._escapeClose);
  }

  /*Закрытие попапа*/
  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._escapeClose);
  }

  /*Логику закрытия попапа клавишей Esc*/
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  /*Добавление слушателя клика иконке закрытия попапа*/
  setEventListeners() {
    this._closeButton.addEventListener("click", () => {
      this.close();
    });
    this._popup.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup")) {
        this.close();
      }
    });
  }
}
