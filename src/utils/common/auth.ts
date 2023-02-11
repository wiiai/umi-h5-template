import type { IUserInfo } from '@/types/IUserInfo';
import * as store from 'store';

export const getToken = (): string => {
  return store.get('token') || '';
};

export const setToken = (token: string) => {
  store.set('token', token);
};

export const getUserInfo = (): IUserInfo | null => {
  return store.get('userInfo') || null;
};

export const setUserInfo = (data: IUserInfo | null) => {
  store.set('userInfo', data);
};

export const getUserId = () => {
  return getUserInfo()?.id || null;
};
