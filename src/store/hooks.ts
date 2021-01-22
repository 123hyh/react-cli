// eslint-disable-next-line no-unused-vars
import { StoreInstanceType } from '.';
export const unloadHooks = (store: StoreInstanceType) => {
  window.addEventListener('unload', () => {
    const state = JSON.stringify(store.getState());
    sessionStorage.setItem('state', state);
  });
};

/**
 * 初始化store 数据
 * @param { object} initData  store的值
 * @return {object | null}
 */
export const handlerInitStoreData = <T>(initData: T): T => {
  const stateJSON = sessionStorage.getItem('state');
  const data: T = stateJSON ? JSON.parse(stateJSON) : initData;
  stateJSON && sessionStorage.removeItem('state');
  return data;
};
