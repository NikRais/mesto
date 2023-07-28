/*Отрисовка элементов на странице*/
export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  /*Отвечает за отрисовку всех элементов*/
  renderItems(data) {
    data.forEach(item => this._renderer(item));
  }

  /*Принимает DOM-элемент и добавляет его в контейнер*/
  addItem(element) {
    this._container.prepend(element);
  }
}
