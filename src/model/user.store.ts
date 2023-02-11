import { getUserInfo, login, logout } from '@/service/account';
import { IUserInfo } from '@/types/IUserInfo';
import { setToken, setUserInfo } from '@/utils/common/auth';
import { observable, makeObservable, runInAction, action } from 'mobx';
import { RootStore } from '.';

export class UserStore {
  constructor(root: RootStore) {
    makeObservable(this, {
      loading: observable,
      userInfo: observable,
      getUserInfo: action,
      logout: action,
    });
  }

  loading = false;
  isLogin = false;
  userInfo: IUserInfo | null = null;

  async login(parma: Parameters<typeof login>[0]) {
    this.loading = true;
    let res = await login(parma);
    runInAction(() => {
      this.userInfo = res.data;
      this.loading = false;
      this.isLogin = true;
      setToken(res.data.token!);
      setUserInfo(res.data);
    });
  }

  async getUserInfo() {
    this.loading = true;
    let res = await getUserInfo();
    runInAction(() => {
      this.userInfo = res.data;
      this.loading = Boolean(res.data);
    });
  }

  async logout() {
    this.loading = true;
    await logout();
    runInAction(() => {
      this.loading = false;
      this.userInfo = null;
    });
  }
}
