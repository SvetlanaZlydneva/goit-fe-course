import countryTpl from '../templates/country.hbs';
import countriesListTpl from '../templates/countries.hbs';
import refs from './refs';

function updateCountryMarkup(name) {
  name.length > 1
    ? refs.content.insertAdjacentHTML('beforeend', countriesListTpl(name))
    : refs.content.insertAdjacentHTML('beforeend', countryTpl(name));
}

export default updateCountryMarkup;
