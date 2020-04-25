export declare type UserStoreType = {
  userId: string | number | null;
  isLogin: boolean;
};

class User {
  public store: UserStoreType;
  constructor() {
    this.store = {
      userId: null,
      isLogin: false,
    };
  }

  public reducer(
    state: UserStoreType,
    {
      type,
      payload,
    }: { type: Exclude<keyof User, 'store' | 'reducer'>; payload: any }
  ) {
    this[type](state, payload);
  }

  /**
   * 登录接口
   * @param state
   * @param payload
   */
  public login(state: UserStoreType, payload: any): UserStoreType {
    return { userId: 1, isLogin: true };
  }

  /**
   * 退出登录
   * @param state
   * @param payload
   */
  public logout(state: UserStoreType, payload: any): UserStoreType {
    return { userId: null, isLogin: false };
  }
}

const user = new User();
export const userStore = user.store;
export const userReducer = user.reducer;
