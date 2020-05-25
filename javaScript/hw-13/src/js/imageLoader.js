import api from './apiService';
import updateImagesMarckup from './updateImagesMarckup';
import refs from './refs';
import message from './messageForUser';

const options = {
  rootMargin: '20px',
};

const onEntry = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      api.pageIncrement();
      api.fetch().then(data => {
        updateImagesMarckup(data);
        api.count = refs.gallery.childElementCount;
        api.count <= api.total - 12
          ? lazyLoad()
          : setTimeout(() => message.finishList(), 2000);
      });
      observer.unobserve(entry.target);
    }
  });
};

const lazyLoad = () => {
  new IntersectionObserver(onEntry, options).observe(
    refs.gallery.lastElementChild,
  );
};

const firstLoad = value => {
  api.query = value;
  api.fetch().then(data => {
    api.total
      ? (updateImagesMarckup(data), message.success(api.total), lazyLoad())
      : message.error();
  });
};
export default firstLoad;
