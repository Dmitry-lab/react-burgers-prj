import { combineReducers } from "redux";
import { constructorReducer } from './burgers-constructor';
import { userInfoReducer } from "./user-info";

export const rootReducer = combineReducers(
  {
    burgersConstructor: constructorReducer,
    userInfo: userInfoReducer
  }
)
