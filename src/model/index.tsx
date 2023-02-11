import React, { createContext, useContext } from 'react';
import { UserStore } from './user.store';

class RootStore {
  userStore: UserStore;
  isFinished: boolean;

  constructor() {
    this.isFinished = false;
    this.userStore = new UserStore(this);
  }
}

const rootStore = new RootStore();
const RootStoreContext = createContext<RootStore>(rootStore);

const RootStoreProvider: React.FC = ({ children }) => {
  return (
    <RootStoreContext.Provider value={rootStore}>
      {children}
    </RootStoreContext.Provider>
  );
};

const useStore = () => {
  return useContext(RootStoreContext);
};

export { RootStore, UserStore, RootStoreProvider, rootStore, useStore };
