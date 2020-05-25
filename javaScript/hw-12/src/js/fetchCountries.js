export default {
  searchQuery: '',
  url: 'https://restcountries.eu/rest/v2/name/',
  filds: '?fields=name;capital;population;languages;flag',
  fetchCountries() {
    return fetch(this.url + this.searchQuery + this.filds).then(res =>
      res.json(),
    );
  },

  set query(value) {
    this.searchQuery = value;
  },
};
