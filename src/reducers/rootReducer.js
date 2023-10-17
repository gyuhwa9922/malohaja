import { combineReducers } from "redux";

const rootReducer = (state, action) => {
  const combineReducer = combineReducers({
    //reducer를 묶는 rootreducer
  });
  return combineReducer(state, action);
};

export default rootReducer;
