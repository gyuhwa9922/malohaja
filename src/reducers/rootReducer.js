import { combineReducers } from "redux";
import user from "./user";

const rootReducer = combineReducers({
  //combineReducers 를 사용해 reducer를 묶는 rootreducer
  user,
});

export default rootReducer;
