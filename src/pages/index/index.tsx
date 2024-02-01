import styles from './index.less';
import { observer } from 'mobx-react';
import { useStore } from '@/model';
import { Loading } from '@/components/loading';

const IndexPage = () => {
  const { userStore } = useStore();

  if (userStore.loading) {
    return <Loading />;
  }

  return (
    <div className="home-page g-w ui-mt-12 ui-bg-white">
      <div className="ui-p-12">
        <div>Home</div>
        <div>{userStore.userInfo?.nickname}</div>
        <div>{userStore.userInfo?.id}</div>
        <button onClick={() => userStore.getUserInfo()}>getUserInfo</button>
        <button onClick={() => userStore.logout()}>logout</button>
      </div>
    </div>
  );
};

IndexPage.wrappers = ['@/wrappers/auth.wrapper'];

export default IndexPage;
