import { IResData } from '@/types/IResData';
import { IUserInfo } from '@/types/IUserInfo';
import { request } from '@/utils/common/request';

// 获取话题列表
export const getTopicList = () => {
  return request<IResData<IUserInfo>>({ url: '/feed/queryList' });
};

// 获取话题分类列表
export const getTopicCategoryList = () => {
  return request<IResData<IUserInfo>>({ url: '/feed/queryList' });
};
