import axios from 'axios';
export default {
  baseUrl: 'https://pixabay.com/api/',
  key: '&key=16188386-9c486355758a5fe84f7a70228',
  page: 1,
  totalQuery: null,
  countQuery: null,
  set query(search) {
    this.searchQuery = search;
  },
  get total() {
    return this.totalQuery;
  },
  set count(count) {
    this.countQuery = count;
  },
  get count() {
    return this.countQuery;
  },
  pageReset() {
    this.page = 1;
  },
  pageIncrement() {
    this.page += 1;
  },
  parameters() {
    return `?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12`;
  },
  fullUrl() {
    return this.baseUrl + this.parameters() + this.key;
  },
  async fetch() {
    return await axios
      .get(this.fullUrl())
      .then(response => response.data)
      .then(data => {
        this.totalQuery = data.total;
        return data.hits;
      });
  },
};
