import  {openPopup} from "./index.js";
import {imagePopup} from "./index.js";

export class Cards {
  constructor(name, link, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  _getCardTemplate() {
    const card = document
    .querySelector('#new-card')
    .content
    .querySelector('.element')
    .cloneNode(true);

    return card;
  }

  createCard() {
    this._element = this._getCardTemplate();

    this._image = this._element.querySelector('.element__image');
    this._image.src = this._link;
    this._image.alt = this._name;
    this._cardName = this._element.querySelector('.element__text');
    this._cardName.textContent = this._name;
    this._like = this._element.querySelector('.element__like');
    this._delete = this._element.querySelector('.element__delete-card');
    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._like.addEventListener('click', () => {
      this._likeCard();
    });

    this._delete.addEventListener('click', () => {
      this._deleteCard();
    });

    this._image.addEventListener('click', () => {
      this._openImage();
    });
  }

  _likeCard() {
    this._like.classList.toggle('element__like_active');
  }

  _deleteCard() {
    this._delete.addEventListener('click', () => {
      this._element.remove();
    });
  }

  _openImage() {
    this._imagePopup = document.querySelector('.popup__image');
    this._imagePopupName = document.querySelector('.popup__image-text');
    this._imagePopup.src = this._link;
    this._imagePopupName.textContent = this._name;
    this._imagePopup.alt = this._name;
    openPopup(imagePopup);
  }
}