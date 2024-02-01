// import { useStore } from "@/model";

export const AuthProvider: React.FC = (props) => {
  console.log(`auth.provider`);
  const { children } = props;

  // 获取当前 URL
  // 判断该 URL
  // 如果需要登录就跳转到 登录页面

  // const {userStore} = useStore();
  // console.log(userStore)
  return <>{children}</>;
};

export default AuthProvider;
