/* eslint-disable no-unused-vars */
import { Store } from 'redux';
type initReducerFn<T, U> = (
  state: T,
  payload: { type: U; storeInstance: Store; [prop: string]: any },
) => T;

/**
 * reducer 中间件，解决异步 action 时需要 store 实例
 * 初始化 reducer 的 state 必须判断是否 为 function 类型
 *
 * @param {any} initializeValue 初始化state值
 * @param {function} reducer reducer方法
 * @param {boolean} isBootstrapTrigger 初始化程序时是否触发 reducer,否则直接 返回 sate
 * @return { reducer }
 */
export function reduxMiddleware<StateDataType, ActionParamsType>(
  initializeValue: StateDataType,
  reducer: initReducerFn<StateDataType, ActionParamsType>,
  isBootstrapTrigger = false,
) {
  return () => {
    return (_storeInstance: Store) => {
      return function (
        state: StateDataType = initializeValue,
        payload: {
          type: ActionParamsType;
          [prop: string]: any;
        },
      ) {
        /**
         * 初始化程序时 是否 调用reducer
         */
        const INIT_REDUX = /^@@redux/.test(<any>payload.type);
        return INIT_REDUX && isBootstrapTrigger
          ? state
          : reducer(state, { ...payload, storeInstance: _storeInstance });
      };
    };
  };
}
