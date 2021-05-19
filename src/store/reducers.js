import { combineReducers } from "redux";
import { general, user } from "./modules";

export const reducers = combineReducers({
  general: general.reducer,
  user: user.reducer,
});
