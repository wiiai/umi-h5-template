import './index.less';

export const Header = () => {
  return (
    <div className="g-header ui-bg-white">
      <div className="g-header-inner g-w">
        <div className="header-l">
          <span>首页</span>
          <span>问答</span>
          <span>会员</span>
        </div>
        <div className="header-r">
          <span>登录</span>
          <span className="ui-mr-0">注册</span>
        </div>
      </div>
    </div>
  );
};
