import refs from './refs';
import api from './apiService';
import message from './messageForUser';
import * as basicLightbox from 'basiclightbox';
import '../css/basicLightbox.scss';
import imageLoader from './imageLoader';

const listener = {
  submit(event) {
    event.preventDefault();
    const value = event.target.firstElementChild.value;
    this.reset();
    imageLoader(value);
  },
  reset() {
    refs.gallery.innerHTML = '';
    refs.searchForm.reset();
    api.pageReset();
    message.clearAllMesssage();
  },
  showLargeImage(event) {
    if (event.target.nodeName !== 'IMG') return;
    basicLightbox
      .create(
        `<img src="${event.target.dataset.large}" width="800" height="600">`,
      )
      .show();
  },
};

refs.searchForm.addEventListener('submit', listener.submit.bind(listener));
refs.gallery.addEventListener('click', listener.showLargeImage.bind(listener));
