import styles from './index.less';
import { observer } from 'mobx-react';
import { useStore } from '@/model';

const IndexPage = () => {
  const { userStore } = useStore();

  if (userStore.loading) {
    return <div>Loading</div>;
  }

  return (
    <div className="home-page">
      <div>Home</div>
      <div>{userStore.userInfo?.nickname}</div>
      <div>{userStore.userInfo?.id}</div>
      <button onClick={() => userStore.getUserInfo()}>getUserInfo</button>
      <button onClick={() => userStore.logout()}>logout</button>
    </div>
  );
};

export default observer(IndexPage);
