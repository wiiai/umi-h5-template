import { observer } from 'mobx-react';
import { useStore } from '@/model';

const IndexPage = () => {
  const { userInfoStore } = useStore();

  if (userInfoStore.loading) {
    return <div>Loading</div>;
  }

  return (
    <div className="me-page">
      <div>me</div>
    </div>
  );
};

export default observer(IndexPage);
