import { Popup } from "./Popup.js"

export class PopupDeleteImage extends Popup {
	constructor({data, submitFormCallback }, popupSeletcor) {
		super(popupSeletcor);
		this._submitFormCallback = submitFormCallback;
		this._data = data;


		this._form = this._popupSelector.querySelector('.popup__form');
	}

	open(cardElement, id) {
		this._elememt = cardElement;
		this._element_id = id;
		super.open();
	}

	setEventListeners() {
		this._form.addEventListener('submit', (evt) => {
			evt.preventDefault();
			this._submitFormCallback(this._data, this._elememt, this._element_id);
		})
		super.setEventListeners();
	}
}