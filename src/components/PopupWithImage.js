import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = document.querySelector('.popup__image');
    this._name = document.querySelector('.popup__image-text');
  }

  open(name, link) {
    this._image.src = link;
    this._name.textContent = name;
    this._image.alt = name;
    super.open();
  }
}