import AbstractView from './abstract-view';

export default class ProductView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return (`
    <article class="products-list-item product">
      <picture class="product-pic">
        <a href="#" class="product-pic-number">10</a>
        <img src="" width="120">
      </picture>
      <div class="product-description">
        <button class="product-favorite">Добавить в избранное</button>
        <h3 class="product-title"><a href="#">Квартира на Невском</a></h3>
        <p class="product-price">8&thinsp;000&thinsp;000&nbsp;₽</p>
        <p class="product-address">м.&nbsp;Купчино, улица Лётчика Иванова, 3</p>
        <p class="product-date">три дня назад</p>
      </div>
    </article>`).repeat(4);
  }

  bind() {
    // this.element.querySelector(`.details-close`).addEventListener(`click`, () => this._onCrossClick());
  }

}
