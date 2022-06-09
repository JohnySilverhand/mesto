export class Api {
	constructor(config) {
		this._url = config.url;
		this._headers = config._headers;
	}

	getCards() {
		return fetch(`${this._url}/cards`, {
			headers: this._headers
		})
		.then((res) => {
			if(res.ok) {
				return res.json();
			}
			return Promise.reject(res.status);
		})
	}

	getProfileInfo() {
		return fetch(`${this._url}/users/me`, {
			headers: this._headers
		})
		.then((res) => {
			if(res.ok) {
				return res.json();
			}
			return Promise.reject(res.status);
		})
	}

	addUserInfo(data) {
		return fetch(`${this._url}/users/me`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify(data)
		})
		.then((res) => {
			if(res.ok) {
				return res.json();
			}
			return Promise.reject(res.status);
		})
	}

	addUserAvatar(data) {
		return fetch(`${this._url}/users/me/avatar`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify(data)
		})
		.then((res) => {
			if(res.ok) {
				return res.json();
			}
			return Promise.reject(res.status);
		})
	}

	addCards(card) {
		return fetch(`${this._url}/cards`, {
			method: 'POST',
			headers: this._headers,
			body: JSON.stringify(card)
		})
		.then((res) => {
			if(res.ok) {
				return res.json();
			}
			return Promise.reject(res.status);
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
			if(res.ok) {
				return res.json();
			}
			return Promise.reject(res.status);
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
			if(res.ok) {
				return res.json();
			}
			return Promise.reject(res.status);
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
			if(res.ok) {
				return res.json();
			}
			return Promise.reject(res.status);
		})
	}
}