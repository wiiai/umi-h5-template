import { Loading } from '@/components/loading';
import { useStore } from '@/model';
import { useEffect, useState } from 'react';
import { IRouteComponentProps } from 'umi';

export default function Layout({
  children,
  location,
  route,
  history,
  match,
}: IRouteComponentProps) {
  location;
  route;
  history;
  match;

  const { userStore } = useStore();
  const [loading, setLoading] = useState(true);
  console.log(`current path: ${history.location.pathname}`);

  useEffect(() => {
    if (history.location.pathname.indexOf('/login') === 0) {
      setLoading(false);
    } else {
      if (userStore.isLogin) {
        setLoading(false);
      } else {
        userStore.getUserInfo().then(() => {
          console.log(userStore.isLogin, 333);
          if (userStore.isLogin) {
            setLoading(false);
          } else {
            history.push('/login');
            setLoading(false);
          }
        });
      }
    }
  }, []);

  return children;
  // return loading ? <Loading /> : children;
}
