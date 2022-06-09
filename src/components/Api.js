export class Api {
	constructor(config) {
		this._url = config.url;
		this._headers = config._headers;
	}

	handleResponse(res) {
		if(res.ok) {
			return res.json();
		} else {
			return Promise.reject(res.status);
		}
	}

	getCards() {
		return fetch (`${this._url}/cards`, {
			headers: this._headers
		})
		.then((res) => this.handleResponse(res));
	}

	getProfileInfo() {
		return fetch(`${this._url}/users/me`, {
			headers: this._headers
		})
		.then((res) => this.handleResponse(res));
	}

	addUserInfo(data) {
		return fetch(`${this._url}/users/me`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify(data)
		})
		.then((res) => {
			this.handleResponse(res);
		})
	}

	addUserAvatar(data) {
		return fetch(`${this._url}/users/me/avatar`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify(data)
		})
		.then((res) => {
			this.handleResponse(res);
		})
	}

	addCards(card) {
		return fetch(`${this._url}/cards`, {
			method: 'POST',
			headers: this._headers,
			body: JSON.stringify(card)
		})
		.then((res) => {
			this.handleResponse(res);
		})
	}

	deleteCard(card, id) {
		const cardId = id;
		return fetch(`${this._url}/cards/${cardId}`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify(card)
		})
		.then((res) => {
			this.handleResponse(res);
		})
	}

	likeCard(card, id) {
		const cardId = id;
		return fetch(`${this._url}/cards/${cardId}/likes`, {
			method: 'PUT',
			headers: this._headers,
			body: JSON.stringify(card)
		})
		.then((res) => {
			this.handleResponse(res);
		})
	}

	dislikeCard(card, id) {
		const cardId = id;
		return fetch(`${this._url}/cards/${cardId}/likes`, {
			method: 'DELETE',
			headers: this._headers,
			body: JSON.stringify(card)
		})
		.then((res) => {
			this.handleResponse(res);
		})
	}
}