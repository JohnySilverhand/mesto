import {Popup} from './Popup.js';

const imageCardPopup = document.querySelector('.popup__image');
const imagePopupName = document.querySelector('.popup__image-text');

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = imageCardPopup;
    this._name = imagePopupName;
  }

  open(name, link) {
    this._image.src = link;
    this._name.textContent = name;
    this._image.alt = name;
    super.open();
  }
}