import { IResData } from '@/types/IResData';
import { IUserInfo } from '@/types/IUserInfo';
import { request } from '@/utils/common/request';

// 登录
export interface ILoginParams {
  password: string;
  account: string;
}
export const login = (params: ILoginParams) =>
  request<IResData<IUserInfo>>({ url: '/account/login', data: params });

// 用户用户信息
export const getUserInfo = () =>
  request<IResData<IUserInfo>>({ url: '/account/getUserInfo' });

export const logout = () => {};
export const register = () => {};
