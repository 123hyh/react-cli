import React from 'react';
import { Button } from 'antd';
import { useMappedState, useDispatch } from 'redux-react-hook';
import { StoresType } from '@/store';
import { UserStoreType } from '@/store/reducer/user';
type NavProps = {
  /* 样式 */
  className?: string;
  /* 退出登录 */
  handlerLogout: () => void;
};

export default function Nav({ className, handlerLogout }: NavProps) {
  const state: UserStoreType = useMappedState<UserStoreType>(
    (state) => state.user
  );
  const diapatch = useDispatch();
  return (
    <div className={className} onClick={() => diapatch({ type: 'ADD_ID' })}>
      <Button>nav{state.isLogin ? '已登录' : '未登录'}</Button>
      <Button onClick={() => handlerLogout()}>退出登录</Button>
    </div>
  );
}
