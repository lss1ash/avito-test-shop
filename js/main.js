import DetailsView from './views/details-view';
import ProductView from './views/product-view';
import DataLoader from './data/data-loader';

const onContentLoaded = () => {
  const testProduct1 = new ProductView();
  document.querySelector(`.products-list`).appendChild(testProduct1.element);

  const testProduct2 = new ProductView();
  document.querySelector(`.products-list`).appendChild(testProduct2.element);

  const testData = new DataLoader();
  testData.loadProducts(() => console.log(testData.products));

  const testDetails = new DetailsView();
  document.querySelector(`body`).appendChild(testDetails.element);
};
document.addEventListener(`DOMContentLoaded`, onContentLoaded);
