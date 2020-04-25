import { Dispatch, Reducer } from 'redux';
export function dispatchMiddleware<T>(reducer: Reducer<T>) {
  return () => {
    return (dispatch: Dispatch) => {
      return reducer;
    };
  };
}
