import DetailsView from './views/details-view';
import ProductView from './views/product-view';

const onContentLoaded = () => {
  const testProduct1 = new ProductView();
  document.querySelector(`.products-list`).appendChild(testProduct1.element);

  const testProduct2 = new ProductView();
  document.querySelector(`.products-list`).appendChild(testProduct2.element);


  const testDetails = new DetailsView();
  document.querySelector(`body`).appendChild(testDetails.element);
};
document.addEventListener(`DOMContentLoaded`, onContentLoaded);
