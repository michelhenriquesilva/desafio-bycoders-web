import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:9000',
  timeout: 3000,
  timeoutErrorMessage: 'Servidor indisponível',
});

export default api;
