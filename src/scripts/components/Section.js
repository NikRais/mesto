/*Отрисовка элементов на странице*/
export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderer = renderer;
    this._renderedItems = items;
    this._container = document.querySelector(containerSelector);
  }

  /*Отвечает за отрисовку всех элементов*/
  renderItems() {
    this._renderedItems.forEach(item => 
      this._renderer(item));
  }

  /*Принимает DOM-элемент и добавляет его в контейнер*/
  addItem(element) {
    this._container.prepend(element);
  }
}
