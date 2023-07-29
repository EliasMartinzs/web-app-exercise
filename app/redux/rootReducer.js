import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./features/user-slice";

export const rootReducer = combineReducers({
  user: userReducer,
});
