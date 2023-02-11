// import { useStore } from "@/model";

export const AuthProvider: React.FC = (props) => {
  const { children } = props;
  // const {userStore} = useStore();
  // console.log(userStore)
  return <>{children}</>;
};
