import { IResData } from '@/types/IResData';
import { IUserInfo } from '@/types/IUserInfo';
import { request } from '@/utils/common/request';

export const login = () => {};
export const logout = () => {};
export const register = () => {};

export const getUserInfo = () =>
  request<IResData<IUserInfo>>({ url: '/account/get_userInfo' });
