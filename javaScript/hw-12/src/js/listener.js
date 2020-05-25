import refs from './refs';
import updateCountry from './updateCountryMarkup';
import fetch from './fetchCountries';
import debounce from 'lodash.debounce';
import 'pnotify/dist/PNotifyBrightTheme.css';
import 'pnotify/dist/es/PNotifyAnimate';
import PNotify from 'pnotify/dist/es/PNotify.js';

refs.countrySearch.addEventListener('input', debounce(onInput, 500));

function onInput(event) {
  refs.content.innerHTML = '';
  const value = event.target.value;
  if (value) {
    fetch.query = value;
    fetch.fetchCountries().then(data => {
      if (data.length >= 1 && data.length <= 10) {
        PNotify.closeAll();
        updateCountry(data);
      } else {
        data.status === 404
          ? errorMessage('Сountry not found, try again!')
          : errorMessage(
              'Too many matches found, Please enter a more specific query!',
            );
      }
    });
  }
}

function errorMessage(message) {
  PNotify.error({
    text: message,
  });
}
