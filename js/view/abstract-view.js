export default class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Can't instantiate AbstractView`);
    }
  }

  get template() {
    throw new Error(`Template is required`);
  }

  get element() {
    if (this._element) {
      return this._element;
    }
    this._element = this._render();
    this.bind();
    return this._element;
  }

  _render() {
    const element = document.createElement(`section`);
    element.innerHTML = this.template;
    return element.firstElementChild ? element.firstElementChild : false;
  }

  bind() {
    throw new Error(`Bind should be implemented`);
  }
}
