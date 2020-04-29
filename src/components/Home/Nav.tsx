import React, {forwardRef, useState, useRef} from 'react';
import {Button} from 'antd';
import {useMappedState, useDispatch} from 'redux-react-hook';
import {UserStoreType} from '@/store/reducer/user';
import {useHistory} from 'react-router-dom';

type NavProps = {
  /* 样式 */
  className?: string;
  /* 退出登录 */
};

forwardRef(function Children(props: { count: number }, ref: any) {
  return (
    <input style={{display: 'none'}} ref={ref} defaultValue={props.count} />
  );
});
/**
 * 头部组件
 * @param {string} className
 * @return {any}
 */
export default function Nav({className}: NavProps) {
  const store: UserStoreType = useMappedState<UserStoreType>(
      (state) => state.user,
  );
  const [state, setstate] = useState({data: {}, loading: false});
  const childRef = useRef<any>();
  const history = useHistory();
  const dispatch = useDispatch();

  /**
   * 退出登录
   */
  // eslint-disable-next-line no-unused-vars
  const handlerLogout = () => {
    dispatch({type: 'logout'});
    history.push({pathname: '/login'});
  };
  return (
    <div className={className} onClick={() => dispatch({type: 'ADD_ID'})}>
      {/* <Children ref={childRef} count={1} /> */}
      <Button>nav{store.isLogin ? '已登录' : '未登录'}</Button>
      <Button
        loading={state.loading}
        onClick={async () => {
          setstate({...state, loading: false});
          try {
            const data = await Promise.resolve({name: Math.random()});
            childRef.current = data;
          } catch (error) {
          } finally {
            setstate({data: childRef.current, loading: false});
          }
          /* handlerLogout() */
        }}
      >
        退出登录
      </Button>
    </div>
  );
}
