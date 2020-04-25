import { login } from '@/api/module/user';
import { Dispatch, Action } from 'redux';
import { dispatchMiddleware } from '../dispatchMiddleware';

export declare type UserStoreType = {
  userId: any;
  isLogin: boolean;
};

export const userStore: UserStoreType = {
  userId: null,
  isLogin: false,
};
type UserReducer = {
  login: (dispatch?: Dispatch) => Promise<any>;
  logout: (dispatch?: Dispatch) => Promise<any>;
};

const actions: UserReducer = {
  async login(dispatch) {
    console.log(dispatch);
    // dispatch && dispatch({ type: 'login', isLogin: true, sync: true });
  },
  async logout(dispatch) {
    return Promise.resolve(1);
  },
};

const mutation = {
  login(state: UserStoreType, data: any) {
    return state;
  },
};
export const userReducer = dispatchMiddleware<UserStoreType>(
  function userReducer(
    state = userStore,
    { type, ...data }: any // { type: keyof UserReducer; data: any }
  ) {
    console.log(arguments);
    return typeof state === 'function' ? userStore : state;
  }
);
