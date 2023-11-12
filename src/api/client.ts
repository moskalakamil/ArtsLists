import axios from 'axios';

const url = 'https://api.artic.edu';
export const api = axios.create({
  baseURL: url + '/api/v1/',
});
