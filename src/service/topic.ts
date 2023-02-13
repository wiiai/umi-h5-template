import { IResData } from '@/types/IResData';
import { IUserInfo } from '@/types/IUserInfo';
import { request } from '@/utils/common/request';

// 获取话题列表
export interface IFeedItem {
  title: string;
  content: string;
}
export const getTopicList = (params: {
  pageSize: number;
  pageIndex: number;
}) => {
  return request<
    IResData<{
      list: IFeedItem[];
      total: number;
    }>
  >({ url: '/feed/queryList', data: params });
};

// 获取话题分类列表
export const getTopicCategoryList = () => {
  return request<IResData<IUserInfo>>({ url: '/feed/queryList' });
};
