import { login } from '@/api/module/user';

export declare type UserStoreType = {
  userId: any;
  isLogin: boolean;
};

export const userStore: UserStoreType = {
  userId: null,
  isLogin: false,
};

export const userReducer = function (
  state: UserStoreType = userStore,
  action: any
) {
  state = { ...state };
  switch (action.type) {
    case 'login':
      login().then((res) => {
        action.dispatch({ type: 'setUserData', data: res });
      });
      break;
    case 'logout':
      state.isLogin = false;
      break;
    case 'setUserData':
      state.isLogin = true;
      state.userId = action.data.id;
      break;
  }
  return state;
};
// class User {
//   public store: UserStoreType;
//   constructor() {
//     this.store = store;
//   }

//   public reducer(
//     state: UserStoreType = store,
//     {
//       type,
//       payload,
//     }: { type: Exclude<keyof User, 'store' | 'reducer'>; payload: any }
//   ) {
//     return state;
//   }

//   /**
//    * 登录接口
//    * @param state
//    * @param payload
//    */
//   public login(state: UserStoreType, payload: any): UserStoreType {
//     return { userId: 1, isLogin: true };
//   }

//   /**
//    * 退出登录
//    * @param state
//    * @param payload
//    */
//   public logout(state: UserStoreType, payload: any): UserStoreType {
//     return { userId: null, isLogin: false };
//   }
// }

// const user = new User();
/* export const userStore = user.store;
export const userReducer = function (state: UserStoreType) {
  return state;
}; */
