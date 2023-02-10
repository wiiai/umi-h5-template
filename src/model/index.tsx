import React, { createContext, useContext } from 'react';
import { UserInfoStore } from './userInfo.store';

class RootStore {
  userInfoStore: UserInfoStore;
  constructor() {
    this.userInfoStore = new UserInfoStore(this);
  }
}

const rootStore = new RootStore();
const RootStoreContext = createContext<RootStore>(rootStore)

const RootStoreProvider = ({ children }: any) => {
  return (
    <RootStoreContext.Provider value={rootStore}>
      {children}
    </RootStoreContext.Provider>
  )
}

const useStore = () => {
  return useContext(RootStoreContext)
}

export {
  RootStore,
  UserInfoStore,
  RootStoreProvider,
  rootStore,
  useStore,
};
