import React, {useState} from 'react';
import {Form, Input, Button} from 'antd';
import $style from './Login.module.scss';
/* redux */
import {useDispatch} from 'redux-react-hook';
/**
 * 登录页面
 * @return {JSX}
 */
export default function Login() {
  const dispatch = useDispatch();
  const [state, setstate] = useState({
    loading: false,
    userInfo: {userName: 'hyh', password: '310515'},
  });
  /**
   * 点击登录事件
   * @param {Array<any>} args
   */
  const onFinish = async (...args: any[]) => {
    setstate({...state, loading: true});

    try {
      setstate({...state, loading: true});
      dispatch({type: 'login', data: state.userInfo});
    } catch (error) {
    } finally {
      setstate({...state, loading: false});
    }
  };

  return (
    <div className={$style.loginBox}>
      <Form
        name="basic"
        onFinish={onFinish}
        initialValues={{username: 310515, password: 123456}}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{required: true, message: 'Please input your username!'}]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{required: true, message: 'Please input your password!'}]}
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
