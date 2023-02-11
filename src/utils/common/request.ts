import { getToken } from '@/utils/common/auth';
import axios, {
  AxiosHeaders,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from 'axios';
// import Url from 'url-parse';

export const isProd = process.env.NODE_ENV === 'production';
export const host = isProd
  ? 'https://wow-im.airtlab.com'
  : 'http://localhost:3000';

export const _instance = axios.create({
  timeout: 20 * 1000,
});

_instance.interceptors.request.use(
  function (config: InternalAxiosRequestConfig) {
    const headers = new AxiosHeaders(config.headers);
    headers.set('token', getToken());
    return {
      ...config,
      url: `${host}${config.url}`,
      method: 'POST',
      headers,
    };
  },
  function (error) {
    return Promise.reject(error);
  },
);

_instance.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (+res.errCode === 0) {
      res.success = true;
    } else {
      res.success = false;
    }
    return res;
  },
  (error) => {
    if (error.message.includes('401')) {
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);

export const request = <T>(options: AxiosRequestConfig) => {
  return _instance(options) as Promise<T>;
};
