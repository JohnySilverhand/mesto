export class Popup {
  constructor (popupSelector) {
    this._selector = document.querySelector(popupSelector);
  }

  open() {
    this._selector.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._selector.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if(evt.key === 'Escape') {
      const popupModifier = document.querySelector('.popup_opened');
      this.close(popupModifier);
    }
  }

  setEventListeners() {
    const popupCloseButton = this._selector.querySelector('.popup__close-button');
    popupCloseButton.addEventListener('click', () => {
      this.close();
    });

    this._selector.addEventListener('mousedown', (evt) => {
      if(evt.target.classList.contains('popup_opened')) {
        this.close(evt.target);
      }
    });
  }

}
