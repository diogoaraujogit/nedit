import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

api.interceptors.request.use(async config => {
  const token = localStorage.getItem('@nedit/token');
  const newConfig = config;
  let bearerToken = '';

  if (token) {
    try {
      const parsed = JSON.parse(token);
      if (parsed) {
        bearerToken = parsed;
      }
    } catch (e) {
      bearerToken = '';
    }
  }

  if (token) {
    newConfig.headers.Authorization = `Bearer ${bearerToken}`;
  }
  return newConfig;
});

export default api;
