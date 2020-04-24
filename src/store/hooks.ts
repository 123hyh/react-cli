import { StoreInstanceType } from '.';
export const registerHooks = (store: StoreInstanceType) => {
  window.addEventListener('load', () => {
    const state = JSON.parse(sessionStorage.getItem('state') || '""');
    state && store;
  });
  window.addEventListener('unload', () => {
    const state = JSON.stringify(store.getState());
    sessionStorage.setItem('state', state);
  });
};
