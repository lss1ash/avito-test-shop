import AbstractView from './abstract-view';

export default class DetailsView extends AbstractView {
  constructor(details) {
    super();
    this.details = details;
  }

  get template() {
    return `
    <div class="overlay">
      <article class="details">
        <button class="details-close">Закрыть</button>

        <h2 class="details-title">Квартира на Невском</h2>

        <section class="details-main">
          <p class="details-date">три дня назад</p>
          <p class="details-price">8&thinsp;000&thinsp;000&nbsp;₽</p>

          <section class="details-gallery">
            <img src="" alt="" class="details-gallery-preview">
            <div class="details-gallery-thumbnails">
              <img src="" alt="" class="details-gallery-item">
              <img src="" alt="" class="details-gallery-item">
              <img src="" alt="" class="details-gallery-item">
              <img src="" alt="" class="details-gallery-item">
            </div>
          </section>

          <p class="details-description">Просторная трехкомнатная квартира. Окна на восток. 15 минут пешком до метро.</p>
        </section>

        <aside class="details-aside">
          <section class="details-address">
            <p class="details-address-text">м.&nbsp;Купчино, улица Лётчика Иванова, 3</p>
            <div class="details-address-map"></div>
          </section>

          <section class="details-seller">
            <a href="#" class="details-seller-link">
              <h3 class="details-seller-name">Агентство недвижимости «Купчино»</h3>
            </a>

            <p class="details-seller-rating details-seller-rating-good">
              рейтинг <span class="details-seller-rating-val">4.3</span>
              <a href="#">Отзывы</a>
            </p>
          </section>
        </aside>
      </article>
    </div>`;
  }

  bind() {
    this.element.querySelector(`.details-close`).addEventListener(`click`, () => this._onCrossClick());
    document.addEventListener(`keydown`, (e) => this._onKeyDown(e));
  }

  _onKeyDown(e) {
    if (e.keyCode === 27) {
      this._remove();
    }
  }

  _onCrossClick() {
    this._remove();
  }

  _remove() {
    this.element.parentElement.removeChild(this.element);
  }
}
