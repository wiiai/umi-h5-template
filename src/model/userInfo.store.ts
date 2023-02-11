import { observable, makeObservable, runInAction, action } from 'mobx';
import { RootStore } from '.';

const getUserInfo = (): Promise<{
  name: string;
  user_id: number;
}> => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          name: 'tony',
          user_id: 1,
        }),
      1000,
    );
  });
};

const logout = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(null), 1000);
  });
};

export interface UserInfo {
  name: string;
  user_id: number;
}

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
  userInfo: UserInfo | null = null;

  async getUserInfo() {
    this.loading = true;
    let data = await getUserInfo();
    runInAction(() => {
      this.userInfo = data;
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
