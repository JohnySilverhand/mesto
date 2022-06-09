export class Card {
  constructor({cardData, handleCardClick, deleteAddedCard, likeNewCard, dislikeCard}, userId, templateSelector) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._userId = userId;
    this._deleteAddedCard = deleteAddedCard;
    this._likeNewCard = likeNewCard;
    this._dislikeCard = dislikeCard;
    this._likes = cardData.likes;
    this._id = cardData._id;
    this._owner = cardData.owner;
  }

  _isLiked() {
    return this._likes.some((like) => like._id === this._userId);
  }

  _addLike() {
    this._likeCounter = this._element.querySelector('element__counter');

    this._likeCounter.textContent = this._likes.length;
    if(this.isLiked()) {
      this._like.classList.add('element__like_active');
    } else {
      this._like.classList.remove('element__like_active');
    }
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

    if (this._userId === this._owner) {
      this._delete.classList.add('element__delete-card_visible');
    } else {
      this._delete.classList.remove('element__delete-card_visible');
    }

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