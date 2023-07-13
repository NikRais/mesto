/*Создание класса FormValidator*/
export default class FormValidator {
    constructor(settings, formElement) {
      this._settings = settings;
      this._formElement = formElement;
      this._inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
      this._buttonElement = this._formElement.querySelector(this._settings.popupSubmit);
    }
    
    /*Добавление класса ошибки валидации*/
    _showInputError(inputElement, errorMessage) {
      const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
      inputElement.classList.add(this._settings.inputErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this._settings.errorClass);
    };
  
    /*Удаление класса ошибки валидации*/
    _hideInputError(inputElement) {
      const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
      inputElement.classList.remove(this._settings.inputErrorClass);
      errorElement.classList.remove(this._settings.errorClass);
      errorElement.textContent = '';
    };
  
    /*Переключение появления/удаления сообщения с ошибкой*/
    _checkInputValidity(inputElement) {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(inputElement);
      }
    };
  
    _setEventListeners() {
      this.toggleButtonState();
  
      this._inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
          this._checkInputValidity(inputElement);
          this.toggleButtonState();
        });
      });
  
      this._formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      })
    };

    /*Создание проверки поля ввода на валидность*/
    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
          return !inputElement.validity.valid;
        });
      };

    /*Переключение кнопки отправки формы*/
    toggleButtonState() {
        if (this._hasInvalidInput()) {
          this._buttonElement.setAttribute('disabled', 'disabled');
        } else {
          this._buttonElement.removeAttribute('disabled');
        }
      };
  
    enableValidation() {
      this._setEventListeners();
    };
}