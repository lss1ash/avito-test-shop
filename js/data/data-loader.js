export default class DataLoader {
  constructor() {
    this.URL = `https://avito.dump.academy/`;
    this.params = {
      headers: {
        'Content-Type': `application/json`
      },
      mode: `cors`,
      cache: `no-store`
    };
  }

  get(URL, onSuccess = () => {}, onError = () => {}) {
    fetch(new Request(URL, this.params))
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error(`Неизвестный статус: ${response.status} ${response.statusText}`);
        })
        .then((data) => onSuccess(data))
        .catch((err) => onError(err));
  }
}
