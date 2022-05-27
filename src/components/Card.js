export class Card {
  constructor({cardData, handleCardClick}, templateSelector) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getCardTemplate() {
    const card = document
    .querySelector(this._templateSelector)
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
    this._addEventListeners();

    return this._element;
  }

  _addEventListeners() {
    this._like.addEventListener('click', () => {
      this._likeCard();
    });

    this._delete.addEventListener('click', () => {
      this._deleteCard();
    });

    this._image.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  _likeCard() {
    this._like.classList.toggle('element__like_active');
  }

  _deleteCard() {
    this._element.remove();
  }
}