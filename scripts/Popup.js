class Popup {
  constructor (popupSelector) {
    this._selector = popupSelector;
  }

  open() {
    this._selector.classList.add('popup_opened');

  }

  close() {
    this._selector.classList.remove('popup_opened');
  }

  _handleEscClose(evt) {
    if(evt.key === 'Escape') {
      const popupOpened = document.querySelector('.popup_opened');
      this.close(popupOpened);
    }
  }

  setEventListeners() {
    const popupCloseButton = document.querySelector('.popup__close-button');
    popupCloseButton.addEventListener('click', () => {
      this.close();
    });

    this._selector.addEventListener('mousedown', (evt) => {
      if(evt.target.classList.contains('popup_opened')) {
        this.close();
      }
    })
  }

  }
