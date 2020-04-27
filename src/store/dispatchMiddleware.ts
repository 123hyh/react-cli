import { Dispatch, Reducer, AnyAction } from 'redux';
/**
 * dispatch 中间件，用于异步 action
 * 初始化 reducer 的 state 必须判断是否 为 function 类型
 * @param reducer
 */
export function dispatchMiddleware<StoreDataType, ActionParamsType>(
  reducer: (state: StoreDataType, payload: any) => StoreDataType
) {
  return () => {
    return (_dispatch: Dispatch<{ type: ActionParamsType }>) => {
      return function (
        state: StoreDataType,
        payload: { type: ActionParamsType }
      ): any {
        return reducer(state, { ...payload, dispatch: _dispatch });
      };
    };
  };
}
