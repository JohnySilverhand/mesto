import {Popup} from './Popup.js';

export class PopupWithForm extends Popup {
  constructor({submitFormCallback}, popupSelector) {
    super(popupSelector);
    this._submitFormCallback = submitFormCallback;
    this._form = this._popupSelector.querySelector('.popup__form');
    this._inputs = this._form.querySelectorAll('.popup__input');
  }

  _getInputValues() {
    this._inputsValues = {}
    this._inputs.forEach((input) => {
      this._inputsValues[input.name] = input.value;
    });

    return this._inputsValues;
  }

  setEventListeners() {
    this._form.addEventListener('submit', () => {
      this._submitFormCallback(this._getInputValues());
    });

    super.setEventListeners();
  }

  setInputValues(data) {
    this._inputs.forEach((input) => {
      input.value = data[input.name];
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}