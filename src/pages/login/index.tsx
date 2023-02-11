import React from 'react';
import { useStore } from '@/model';
import { observer } from 'mobx-react';
import { Button } from 'antd';
import { Checkbox, Form, Input } from 'antd';
import { useHistory } from 'umi';

import styles from './index.less';

const LoginScreen: React.FC = () => {
  const { userStore } = useStore();
  const history = useHistory();

  const initData = {
    remember: true,
    account: 'admin',
    password: '123456',
  };

  const onFinish = (values: any) => {
    userStore
      .login({
        ...values,
        loginType: 'password',
      })
      .then(() => {
        if (userStore.isLogin) {
          history.push('/');
        }
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles['login-screen']}>
      <Form
        size="large"
        className={styles['form']}
        name="basic"
        initialValues={initData}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="account"
          rules={[{ required: true, message: '输入账户' }]}
        >
          <Input placeholder="输入密码" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: '输入密码' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item className={styles['submit-btn']}>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>

        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>记住密码</Checkbox>
          </Form.Item>
          <a className="login-form-forgot" href="" style={{ float: 'right' }}>
            忘记密码?
          </a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default observer(LoginScreen);
