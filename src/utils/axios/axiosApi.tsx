import axios from 'axios';
import { getToken } from '../tokenActions/getToken';

export const apiBaseUrl: string = import.meta.env.VITE_APP_BASE_URL;

export const apiGateway = axios.create({
  baseURL: apiBaseUrl,
});

apiGateway.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
