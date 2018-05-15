export default class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Can't instantiate AbstractView, only concrete one`);
    }
  }

  get template() {
    throw new Error(`Template is required`);
  }

  get element() {
    if (this._element) {
      return this._element;
    }
    this._element = this.render();
    this.bind(this._element);
    return this._element;
  }

  _getElementFromString(str) {
    const element = document.createElement(`section`);
    element.innerHTML = str;
    return element.firstElementChild ? element.firstElementChild : false;
  }

  render() {
    return this._getElementFromString(this.template);
  }

  bind() {
  }
}
