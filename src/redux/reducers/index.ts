import { combineReducers } from "redux";
import authReducer from "./authReduer";

export default combineReducers({
  auth: authReducer,
});
