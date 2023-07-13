/*Отвечает за управление отображением информации о пользователе на странице*/
export default class UserInfo {
  constructor({username, profession}) {
    this._username = document.querySelector(username);
    this._profession = document.querySelector(profession);
  }

  /*Возвращает объект с данными пользователя*/
  getUserInfo() {
    const userInfo = {
      username: this._username.textContent,
      profession: this._profession.textContent,
    };

    return userInfo;
  }

  /*Принимает новые данные пользователя и добавляет их на страницу*/
  setUserInfo({ username, profession }) {
    this._username.textContent = username;
    this._profession.textContent = profession;
  }
}
