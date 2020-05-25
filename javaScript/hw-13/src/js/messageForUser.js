import 'pnotify/dist/PNotifyBrightTheme.css';
import 'pnotify/dist/es/PNotifyAnimate';
import PNotify from 'pnotify/dist/es/PNotify.js';

export default {
  success(findTotal) {
    PNotify.success({ text: `We found ${findTotal} items` });
  },
  error() {
    PNotify.error({ text: '...Oops, try again. Images not found ;(' });
  },
  clearAllMesssage() {
    PNotify.closeAll();
  },
  finishList() {
    PNotify.info({
      text: 'You looked at all the images. Enter new data to search',
    });
  },
};
