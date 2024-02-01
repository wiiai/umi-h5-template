const AuthWrapper: React.FC = (props) => {
  console.log(`auth.wrapper`);
  // 在这这里判断是否登录
  // 没有登录，就跳转到登录页面
  const { children } = props;
  return <>{children}</>;
};

export default AuthWrapper;
