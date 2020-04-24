/* hooks */
import { registerHooks } from './hooks';
/* user */
import { createStore, combineReducers, Store, CombinedState } from 'redux';
import { userReducer, userStore, UserStore } from './reducer/user';
/* test */
import { testReducer, testStore, TestType } from './reducer/test';

export declare type ActionParams = {
  type: string;
  payload?: any;
};
/**
 * stores 类型
 */
export declare type StoresType = {
  user: UserStore;
  test: TestType;
};

/* 合并 reducer */
export const reducers = combineReducers({
  user: userReducer,
  test: testReducer,
});

/* 合并 states */
const states: StoresType = {
  user: userStore,
  test: testStore,
};

/**
 * store 类型
 */
export type StoreInstanceType = Store<
  CombinedState<{
    user: UserStore;
    test: TestType;
  }>,
  ActionParams
>;

/**
 * store 实例
 */
export const store: StoreInstanceType = createStore(reducers, states);

registerHooks(store);
