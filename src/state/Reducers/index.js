import { combineReducers } from "redux";
import taskReducer from "./taskReducer";

const reducer = combineReducers({
  tasks: taskReducer,
  // Add List of Reducers
});

export default reducer;
