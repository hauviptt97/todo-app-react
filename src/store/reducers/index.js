import { combineReducers } from "redux";
import color from "./themeReducer";
import todos from "./todoReducer";
export default combineReducers({
  color,
  todos,
});
