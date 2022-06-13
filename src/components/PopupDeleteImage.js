import { Popup } from "./Popup.js"

export class PopupDeleteImage extends Popup {
	constructor({ submitFormCallback }, popupSelector) {
		super(popupSelector);
    this._popup = document.querySelector(popupSelector);
		this._submitFormCallback = submitFormCallback;

		this._form = this._popup.querySelector('.popup__form');
	}

	open(data) {
    this._data = data;
		super.open();
	}

	setEventListeners() {
		this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
			this._submitFormCallback(this._data);
		})
		super.setEventListeners();
	}
}