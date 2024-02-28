import axios from 'axios';
import { urlByEnvVar } from '../constantsUrl';
import { getToken } from '../tokenActions/getToken';

export const apiBaseUrl: string = urlByEnvVar.development;

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
