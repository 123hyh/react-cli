import React from 'react';
import { Button } from 'antd';
import { useMappedState, useDispatch } from 'redux-react-hook';
import { UserStoreType } from '@/store/reducer/user';
import { useHistory } from 'react-router-dom';

type NavProps = {
  /* 样式 */
  className?: string;
  /* 退出登录 */
};

export default function Nav({ className }: NavProps) {
  const state: UserStoreType = useMappedState<UserStoreType>(
    (state) => state.user
  );
  const history = useHistory();
  const dispatch = useDispatch();

  /**
   * 退出登录
   */
  const handlerLogout = () => {
    dispatch({ type: 'logout' });
    history.push({ pathname: '/login' });
  };
  return (
    <div className={className} onClick={() => dispatch({ type: 'ADD_ID' })}>
      <Button>nav{state.isLogin ? '已登录' : '未登录'}</Button>
      <Button onClick={() => handlerLogout()}>退出登录</Button>
    </div>
  );
}
