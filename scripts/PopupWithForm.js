import {Popup} from './Popup.js';

export class PopupWithForm extends Popup {
  constructor({submitFormCallback}, popupSelector) {
    super(popupSelector);
    this._submitFormCallback = submitFormCallback;
  }

  _getInputValues() {
    this._inputs = this._form.querySelectorAll('.popup__input');
    this._inputsValues = {}
    this._inputs.forEach((input) => {
      this._inputsValues[input.name] = input.value;
    });

    return this._inputsValues;
  }

  setEventListeners() {
    this._form = this._selector.querySelector('.popup__form');
    this._form.addEventListener('submit', () => {
      this._submitFormCallback(this._getInputValues());
    });

    super.setEventListeners();
  }

  close() {
    super.close();
    this._form.reset();
  }
}