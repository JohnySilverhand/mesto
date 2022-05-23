export class UserInfo {
  constructor({name, about}) {
    this._name = document.querySelector(name);
    this._about = document.querySelector(about);
  }

  getUserInfo() {
    const userInfo = {};
    userInfo.name = this._name.textContent;
    userInfo.about = this._about.textContent;
    return userInfo;
  }

  setUserInfo(userInfo) {
    this._name.textContent = userInfo.title;
    this._about.textContent = userInfo.about;
  }
}