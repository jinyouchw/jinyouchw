import { FC } from 'react';
import './index.less';
import { Form, Input, Button, Checkbox } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import { Location } from 'history';
import { LoginParams } from 'interface/user/login';
import Test from './test';

const initialValues: LoginParams = {
  username: 'guest',
  password: 'guest'
  // remember: true
};

const LoginForm: FC = () => {
  const navigate = useNavigate();
  const location = useLocation() as Location<{ from: string }>;
  const onFinish = () => {
    console.log(123);
    navigate('/home');
  };
  const onFinishFailed = () => {};

  return (
    <div className="login-page">
      <Form
        name="basic"
        className="login-page-form"
        initialValues={initialValues}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <h2>react ant admin</h2>
        <Form.Item name="username" rules={[{ required: true, message: '请输入用户名!' }]}>
          <Input placeholder="用户名" />
        </Form.Item>
        <Test name="啥也不是" />
        <Form.Item name="password" rules={[{ required: true, message: '请输入密码!' }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>记住用户</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-page-form_button">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
