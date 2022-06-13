export class Card {
  constructor({cardData, handleCardClick, deleteAddedCard, handleLikeCard, userId}, templateSelector) {
    this._cardData = cardData;
    this._name = cardData.name;
    this._link = cardData.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._userId = userId;
    this._deleteAddedCard = deleteAddedCard;
    this._handleLikeCard = handleLikeCard;
    this._likes = cardData.likes;
    this._id = cardData._id;
    this._owner = cardData.owner;
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
    this._likeCounter = this._element.querySelector('.element__counter');

    if (this._userId === this._owner._id) {
      this._delete.classList.add('element__delete-card_visible');
    } else {
      this._delete.classList.remove('element__delete-card_visible')
    };

    this.setLikes(this._cardData);
    this._addEventListeners();

    return this._element;
  }

  _addEventListeners() {
    this._like.addEventListener('click', () => {
      this._handleLikeCard(this._cardData);
    });

    this._delete.addEventListener('click', () => {
      this._deleteAddedCard();
    });

    this._image.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  isLiked = () => this._likes.likes.some((owner) => owner._id === this._userId);
  
  addLikeClass() {
    this._like.classList.add('element__like_active');
  }

  removeLikeClass() {
    this._like.classList.remove('element__like_active');
  }

  checkLike() {
    if(this.isLiked()) {
      this.addLikeClass()
    } else {
      this.removeLikeClass();
    }
  }

  setLikes(data) {
    this._likes = data;
    this.checkLike(data);
    this._likeCounter.textContent = data.likes.length;
  }

  removeCard() {
    this._element.remove();
    this._element = null;
  }
}