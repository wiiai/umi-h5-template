import { getUserInfo, logout } from '@/service/account';
import { IUserInfo } from '@/types/IUserInfo';
import { observable, makeObservable, runInAction, action } from 'mobx';
import { RootStore } from '.';

export class UserInfoStore {
  constructor(root: RootStore) {
    makeObservable(this, {
      loading: observable,
      userInfo: observable,
      getUserInfo: action,
      logout: action,
    });
  }

  loading = false;
  userInfo: IUserInfo | null = null;

  async getUserInfo() {
    this.loading = true;
    let res = await getUserInfo();
    runInAction(() => {
      this.userInfo = res.data;
      this.loading = false;
    });
  }

  async logout() {
    this.loading = true;
    await logout();
    runInAction(() => {
      this.loading = false;
      this.userInfo = null;
    })
  }
}
