import { Dispatch, Reducer, Action } from 'redux';
/**
 * dispatch 中间件，用于异步 action
 * 初始化 reducer 的 state 必须判断是否 为 function 类型
 * @param reducer
 */
export function dispatchMiddleware<StoreDataType, ActionParamsType = any>(
  reducer: Reducer<StoreDataType, Action<ActionParamsType>>
) {
  return () => {
    return (_dispatch: Dispatch) => {
      return reducer;
    };
  };
}
