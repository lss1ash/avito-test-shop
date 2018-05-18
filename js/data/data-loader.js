export default class DataLoader {
  constructor() {
    this.links = {
      products: `https://avito.dump.academy/products`,
      product: `https://avito.dump.academy/products/:product_id`,
      sellers: `https://avito.dump.academy/sellers`,
      seller: `https://avito.dump.academy/sellers/:seller_id`
    };
    this.params = {
      headers: {
        'Content-Type': `application/json`
      },
      mode: `cors`,
      cache: `no-store`
    };
  }

  get(url) {
    return fetch(new Request(url, this.params))
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error(`Неизвестный статус: ${response.status} ${response.statusText}`);
        });
  }

  loadProducts(onSuccess = () => {}, onError = () => {}) {
    this.get(this.links.products)
      .then((products) => {
        this.products = products;
        onSuccess();
      })
      .catch((error) => onError(error));
  }
}
