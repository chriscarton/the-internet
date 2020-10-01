import { combineReducers } from "redux";
import catReducer from "./catReducer";
import todosReducer from "./todosReducer";
import loginReducer from "./loginReducer";

export default combineReducers({
  cats: catReducer,
  todos: todosReducer,
  logins: loginReducer
});
