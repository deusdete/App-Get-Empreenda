import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-getnet-plus.herokuapp.com/'
});

export default api;