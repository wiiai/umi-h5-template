import styles from './index.less';
import { observer } from 'mobx-react';
import { useStore } from '@/model';

const IndexPage = () => {
  const { userInfoStore } = useStore();

  if (userInfoStore.loading) {
    return <div>Loading</div>;
  }

  return (
    <div className="home-page">
      <div>Home</div>
      <div>{userInfoStore.userInfo?.name}</div>
      <div>{userInfoStore.userInfo?.user_id}</div>
      <button onClick={() => userInfoStore.getUserInfo()}>getUserInfo</button>
      <button onClick={() => userInfoStore.logout()}>logout</button>
    </div>
  );
};

export default observer(IndexPage);
