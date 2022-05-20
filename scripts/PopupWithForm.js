import {Popup} from './Popup.js';

export class PopupWithForm extends Popup {
  constructor({submitFormCallback}, popupSelector) {
    super(popupSelector);
    this._submitFormCallback = submitFormCallback;
  }

  _getInputValues() {
    this._inputs = document.querySelectorAll('.popup__input');
    this._inputsValues = {}
    this._inputs.forEach((input) => {
      this._inputsValues[input.name] = input.value;
    });

    return this._inputsValues;
  }

  setEventListeners() {
    this._form = document.querySelector('.popup__form');
    this._form.addEventListener('submit', () => {
      this._submitFormCallback(this._getInputValues());
    });

    super.setEventListeners();
  }

  close() {
    this._selector.classList.remove('popup_opened');
    this._form.reset();
  }
}