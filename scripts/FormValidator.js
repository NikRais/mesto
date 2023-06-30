/*Создание класса FormValidator*/
export class FormValidator {
    constructor(settings, formElement) {
      this._settings = settings;
      this._formElement = formElement;
      this._inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
      this._buttonElement = this._formElement.querySelector(this._settings.popupSubmit);
    }
    /*Добавление класса ошибки валидации*/
    _showInputError(formElement, inputElement, errorMessage) {
      const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
      inputElement.classList.add(this._settings.inputErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this._settings.errorClass);
    };
  
    /*Удаление класса ошибки валидации*/
    _hideInputError(formElement, inputElement) {
      const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
      inputElement.classList.remove(this._settings.inputErrorClass);
      errorElement.classList.remove(this._settings.errorClass);
      errorElement.textContent = '';
    };
  
    /*Переключение появления/удаления сообщения с ошибкой*/
    _checkInputValidity(formElement, inputElement) {
      if (!inputElement.validity.valid) {
        this._showInputError(this._formElement, inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(this._formElement, inputElement);
      }
    };
  
    _setEventListeners() {
      this.toggleButtonState(this._inputList, this._buttonElement);
  
      this._inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
          this._checkInputValidity(this._formElement, inputElement);
          this.toggleButtonState(this._inputList, this._buttonElement);
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

      resetValidation() {
        this.toggleButtonState();
  
        this._inputList.forEach((inputElement) => {
          this._hideInputError(inputElement);
        });
  
      };

    /*Переключение кнопки отправки формы*/
    toggleButtonState() {
        if (this._hasInvalidInput(this._inputList)) {
          this._buttonElement.setAttribute('disabled', 'disabled');
        } else {
          this._buttonElement.removeAttribute('disabled');
        }
      };
  
    enableValidation() {
      this._setEventListeners();
    };
  }