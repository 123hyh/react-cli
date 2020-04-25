import { login } from '@/api/module/user';
import { Dispatch } from 'redux';
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
export const userReducer = dispatchMiddleware<
  UserStoreType,
  { type: keyof UserReducer; payload: any }
>(function userReducer(state = userStore, payload, initState = userStore) {
  return typeof state === 'function' ? initState : state;
});
