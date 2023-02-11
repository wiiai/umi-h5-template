import { observer } from 'mobx-react';
import { useStore } from '@/model';

const IndexPage = () => {
  const { userStore } = useStore();

  if (userStore.loading) {
    return <div>Loading</div>;
  }

  return (
    <div className="me-page">
      <div>me</div>
    </div>
  );
};

export default observer(IndexPage);
