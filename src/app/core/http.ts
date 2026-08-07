import axios from '../../../node_modules/axios/index';

export const http = axios.create({
  baseURL: 'http://localhost:3000',
  headers: { 'Content-Type': 'application/json' },
});
