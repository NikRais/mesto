import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor({ popupSelector }) {
    super(popupSelector);
    this._popupform = this._popup.querySelector('.popup__form');
  }

  /*Kоллбэк удаления карточек*/
  callback(removing) {
    this._submit = removing;
  }

  /*Удалить карточку по подтверждению*/
  setEventListeners() {
    super.setEventListeners();
    this._popupform.addEventListener('click', (evt) => {
      evt.preventDefault();
      this._submit();
    });
  }
}