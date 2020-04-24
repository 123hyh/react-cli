import { ActionParams } from '../index';

export declare type UserStore = {
  userId: string | number | null;
  isLogin: boolean;
};

export const userStore: UserStore = {
  userId: null,
  isLogin: false,
};

export function userReducer(
  state: UserStore = userStore,
  { type, payload }: ActionParams
) {
  switch (type) {
    case 'checkLogin':
      state.isLogin = true;
      return state;
    default:
      return state;
  }
}
