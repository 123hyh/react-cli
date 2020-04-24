import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Form, Input, Button } from 'antd';
import $style from './Login.module.scss';
import { login } from '@/api/module/user';
/* redux */
import { useMappedState, useDispatch } from 'redux-react-hook';

export default function Login() {
  const dispatch = useDispatch();
  const store = useMappedState((state) => state);
  const [state, setstate] = useState({ loading: false });
  const history = useHistory();
  /**
   * 点击登录事件
   * @param args
   */
  const onFinish = async (...args: any[]) => {
    setstate({ loading: true });
    try {
      const data = await login();

      dispatch({ type: 'checkLogin' });
      history.push({ pathname: '/' });
    } catch (error) {
    } finally {
      setstate({ loading: false });
    }
  };

  return (
    <div className={$style.loginBox}>
      <Form
        name="basic"
        onFinish={onFinish}
        initialValues={{ username: 310515, password: 123456 }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item className={$style.submitBtn}>
          <Button loading={state.loading} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
