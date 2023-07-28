/*Отвечает за управление отображением информации о пользователе на странице*/
export default class UserInfo {
  constructor({ username, profession, avatar}) {
    this._username = document.querySelector(username);
    this._profession = document.querySelector(profession);
    this._avatar = document.querySelector(avatar);
  }

  /*Возвращает объект с данными пользователя*/
  getUserInfo() {
    const userInfo = {
      username: this._username.textContent,
      profession: this._profession.textContent,
      avatar: this._avatar.src
    };

    return userInfo;
  }

  /*Принимает новые данные пользователя и добавляет их на страницу*/
  setUserInfo(data) {
    this._username.textContent = data.name;
    this._profession.textContent = data.about;
    this._avatar.src = data.avatar;
  }
}
