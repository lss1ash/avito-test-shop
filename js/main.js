import DetailsView from './views/details-view';

const onContentLoaded = () => {
  // console.log(`do smthng!`);
  const testDetails = new DetailsView();
  const element = document.querySelector(`body`).appendChild(testDetails.element);
};
document.addEventListener(`DOMContentLoaded`, onContentLoaded);
