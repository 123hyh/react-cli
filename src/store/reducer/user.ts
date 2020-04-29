/* eslint-disable no-unused-vars */
import {Store} from 'redux';
import {reduxMiddleware} from '../reduxMiddleware';

export declare type UserStoreType = {
  userId: any;
  isLogin: boolean;
};

export const userStore: UserStoreType = {
  userId: null,
  isLogin: false,
};
type ActionsMethod = {
  login: any;
  logout: any;
  SET_USERINFO: any;
};

type UserReducerType = {
  [key in keyof ActionsMethod]: (store: Store, payload?: any) => any;
};

const actions: UserReducerType = {
  async login(store, payload) {
    try {
      debugger;
      store.dispatch({type: 'SET_USERINFO', ...payload});
    } catch (error) {
      console.log(error);
    }
  },
  SET_USERINFO(dispatch, payload: any) {
    debugger;
  },
  async logout(dispatch) {
    return Promise.resolve(1);
  },
};

export const userReducer = reduxMiddleware<
  UserStoreType,
  keyof UserReducerType
>(userStore, function userReducer(state, {type, storeInstance, ...payload}) {
  if (actions[type]) {
    actions[type](storeInstance, payload);
  }
  return state;
});
