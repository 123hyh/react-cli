import { login } from "@/api/module/user";
import { Dispatch } from "redux";
import { dispatchMiddleware } from "../dispatchMiddleware";

export declare type UserStoreType = {
  userId: any;
  isLogin: boolean;
};

export const userStore: UserStoreType = {
  userId: null,
  isLogin: false,
};
type UserReducer = {
  login: (dispatch: Dispatch) => Promise<any>;
  logout: (dispatch: Dispatch) => Promise<any>;
};

const actions: UserReducer = {
  async login(dispatch) {
    try {
      debugger;
    } catch (error) {
      console.log(error);
    }
  },
  async logout(dispatch) {
    return Promise.resolve(1);
  },
};

const mutation = {
  login(state: UserStoreType, data: any) {
    return state;
  },
};

export const userReducer = dispatchMiddleware<UserStoreType, keyof UserReducer>(
  userStore,
  function userReducer(state, { type, payload, dispatch }) {
    debugger;
    // actions[type] && actions[type](dispatch);
    return state;
  }
);
