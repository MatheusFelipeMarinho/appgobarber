import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.3:3333',
  //'https://api-cdo.helpertecnologia.com.br',
});

export default api;
