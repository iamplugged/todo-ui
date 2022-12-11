import axios from 'axios';

const client = axios.create({
  baseURL: '/api/',
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

client.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

client.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem('token');
      window.location = '/login';
    } else {
      return Promise.reject(error);
    }
});

export const getErrorMessage = (error) => {
  const DEFAULT_ERROR_MESSAGE = 'There was problem with your request. Please try again later';

  const message =  (error.response &&
    error.response.data &&
    error.response.data.message) || DEFAULT_ERROR_MESSAGE;
  
  return {
    message
  };
};

export default client;
