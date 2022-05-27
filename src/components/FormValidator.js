export class FormValidator {
  constructor (object, form) {
    this._formSelector = object.formSelector;
    this._inputSelector = object.inputSelector;
    this._submitButton = object.submitButton;
    this._inactiveButtonClass = object.inactiveButtonClass;
    this._inputErrorClass = object.inputErrorClass;
    this._errorClass = object.errorClass;
    this._form = form;
    this._submitButton = this._form.querySelector(this._submitButton);
  }

  _showError = (inputElement, errorMessage) => {
    const popupError = this._form.querySelector(`.${inputElement.id}-error`); 
    inputElement.classList.add(this._inputErrorClass);
    popupError.textContent = errorMessage;
    popupError.classList.add(this._errorClass);
  }

  _removeError = (inputElement) => {
    const popupError = this._form.querySelector(`.${inputElement.id}-error`); 
    inputElement.classList.remove(this._inputErrorClass);
    popupError.classList.remove(this._errorClass);
    popupError.textContent =" ";
  }

  _isValid = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showError(inputElement, inputElement.validationMessage);
    } else {
      this._removeError(inputElement);
    }
  }

  _hasInvalidInput = () => {
    return this._inputs.some((inputElement) => {
      return !inputElement.validity.valid;
  });
}

  _disableButton = () => {
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.disabled = true;
  }

  _enableButton = () => {
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.disabled = false;
  }

  _toggleButtonState = () => {
    if (this._hasInvalidInput(this._inputs)){
      this._disableButton();
    } else {
      this._enableButton();
    }
  }

  _setInputListeners = () => {
    this._inputs = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._inputs.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      });
    });
  }

  resetValidation = () => {
    this._toggleButtonState();

    this._inputs.forEach((inputElement) => {
      this._removeError(inputElement);
    });
  }
  
  enableValidation = () => {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })
    this._setInputListeners();
  }
}





