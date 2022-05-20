class UserInfo {
  constructor({name, about}) {
    this._name = document.querySelector(name);
    this._about = document.querySelector(about);
  }

  getUserInfo() {
    const userInfo = {};
    userInfo.userName = this._name.textContent;
    userInfo.userAbout = this._about.textContent;
    return userInfo;
  }

  setUserInfo() {
    this._name.textContent = userInfo.userName;
    this._about.textContent = userInfo.userAbout;
  }
}