import refs from './refs';
import items from '../templates/gallery.hbs';
function updateImagesMarkup(images) {
  refs.gallery.insertAdjacentHTML('beforeend', items(images));
}

export default updateImagesMarkup;
