import { Dispatch } from "redux";
type initReducerFn<T, U> = (
  state: T,
  payload: { type: U; dispatch: Dispatch; [prop: string]: any }
) => T;

/**
 * reducer dispatch 中间件，用于异步 action 后 调用另一个
 * 初始化 reducer 的 state 必须判断是否 为 function 类型
 * @param reducer
 * @param initValue 初始化store值
 */
export function dispatchMiddleware<StateDataType, ActionParamsType>(
  initializeValue: StateDataType,
  reducer: initReducerFn<StateDataType, ActionParamsType>
) {
  type TransformActionParams = Exclude<
    ActionParamsType,
    | "@@redux/INITx.l.9.n.z.l"
    | "@@redux/PROBE_UNKNOWN_ACTIONk.f.q.8.k.n"
    | "@@redux/REPLACEc.o.4.5.a.o"
  >;
  return () => {
    return (_dispatch: Dispatch<{ type: ActionParamsType }>) => {
      return function (
        state: StateDataType = initializeValue,
        payload: {
          type: TransformActionParams;
          [prop: string]: any;
        }
      ) {
        const isInit =
          <any>payload.type === "@@redux/INITx.l.9.n.z.l" ||
          <any>payload.type === "@@redux/PROBE_UNKNOWN_ACTIONk.f.q.8.k.n" ||
          <any>payload.type === "@@redux/REPLACEc.o.4.5.a.o";
        debugger;
        return reducer(state, { ...payload, dispatch: _dispatch });
      };
    };
  };
}
