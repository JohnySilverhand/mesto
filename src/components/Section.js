export class Section {
  constructor ({items, renderer}, selector) {
    this._selector = document.querySelector(selector);
    this._renderer = renderer;
    this._renderedItems = items; 
  }

  renderItems() {
    this._renderedItems.forEach((item) => {
      this._renderer(item);
    });
  }
  
  addItem(element) {
    this._selector.append(element);
  }
}