/* hooks */
import { unloadHooks, handlerInitStoreData } from './hooks';

/* user */
import { createStore, combineReducers, Store, CombinedState } from 'redux';
import { userReducer, UserStoreType, userStore } from './reducer/user';

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
  user: UserStoreType;
  test: TestType;
};

/**
 * 合并 reducer
 * reducer 必须抛出新的 数据，而非 在原来数据上进行修改
 */
const reducers = combineReducers({
  user: userReducer,
  test: testReducer,
});

/* 合并 states */
const states: StoresType = handlerInitStoreData({
  user: userStore,
  test: testStore,
});

/**
 * store 类型
 */
export type StoreInstanceType = Store<
  CombinedState<{
    user: UserStoreType;
    test: TestType;
  }>,
  ActionParams
>;

/**
 * store 实例
 */
export const store: StoreInstanceType = createStore(reducers, states);
/**
 * 订阅store的改变
 */
store.subscribe((state = store.getState()) => {});
unloadHooks(store);
