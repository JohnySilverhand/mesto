export class formValidator {
  constructor (obj, form) {
    this._formSelector = obj.formSelector;
    this._inputSelector = obj.inputSelector;
    this._submitButtonSelector = obj.submitButtonSelector;
    this._inactiveButtonClass = obj.inactiveButtonClass;
    this._inputErrorClass = obj.inputErrorClass;
    this._errorClass = obj.errorClass;
    this._form = form;

    this._submitButtonSelector = obj.submitButtonSelector;
    this._input = Array.from(this._form.querySelectorAll(this._inputSelector));
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
    return this._input.some((inputElement) => {
      return !inputElement.validity.valid;
  });
}

  _turnOffButton = () => {
    this._submitButtonSelector.classList.add(this._inactiveButtonClass);
    this._submitButtonSelector.disabled = true;
  }

  _turnOnButton = () => {
    this._submitButtonSelector.classList.remove(this._inactiveButtonClass);
    this._submitButtonSelector.disabled = false;
  }

  toggleButtonState = () => {
    if (this._hasInvalidInput(this._input)){
      this._turnOffButton(this._submitButtonSelector);
    } else {
      this._turnOnButton(this._submitButtonSelector);
    }
  }

  _setInputListeners = () => {
    this._input.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this.toggleButtonState(this._input);
      });
    });
  }
  
  enableValidation = () => {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })
    this._setInputListeners();
  }
}





