import { Popup } from "./Popup.js"

export class PopupDeleteImage extends Popup {
	constructor({data, submitFormCallback}, popupSeletcor) {
		this._submitFormCallback = submitFormCallback;
		this._data = data;
		this._form = this._popupSelector.querySelector('.popup__form');
		super(popupSeletcor);
	}

	open(element, id) {
		this._elememt = element;
		this._id = id;
		super.open();
	}

	setEventListeners() {
		this._form.addEventListener('submit', (evt) => {
			evt.preventDefault();
			this._submitFormCallback(this._data, this._elememt, this._id);
		})
	}
}