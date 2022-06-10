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
    this._likeCounter.textContent = this._likes.length;

    if (this._isLiked()) {
      this._like.classList.add('element__like_active');
    } 

    if (this._userId === this._owner._id) {
      this._delete.classList.add('element__delete-card_visible');
    } else {
      this._delete.classList.remove('element__delete-card_visible')
    };

    this._addEventListeners();

    return this._element;
  }

  _addEventListeners() {
    this._like.addEventListener('click', () => {
      this._like = !this._like;
      if(!this._like) {
        this._likeNewCard(this._element, this._id, this._likeCounter);
      } else {
        this._dislikeCard(this._element, this._id, this._likeCounter);
      }
    })

    this._delete.addEventListener('click', () => {
      this._deleteAddedCard(this._element, this._id);
    })

    this._image.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  _isLiked() {
    for (let i = 0; i < this._likes.length; i++) {
      if(this._likes[i]._id === this._userId) {
        return true;
      }
    }
  }

}