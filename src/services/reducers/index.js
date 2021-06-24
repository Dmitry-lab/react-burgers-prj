import { combineReducers } from "redux";
import { constructorReducer } from './burgers-constructor';

export const rootReducer = combineReducers(
  {
    burgersConstructor: constructorReducer,
  }
)
