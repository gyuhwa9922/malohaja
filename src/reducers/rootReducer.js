import { combineReducers } from "redux";
import user from "./user";
import post from "./post";

const rootReducer = combineReducers({
  //combineReducers 를 사용해 reducer를 묶는 rootreducer
  post,
  user,
});

export default rootReducer;
