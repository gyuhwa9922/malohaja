import { applyMiddleware, compose, createStore } from "redux";
import { createSagaMiddleware } from "redux-saga";
import { composeWithDevTools } from "@redux-devtools/extension";
import reducer from "../reducers";
import rootSage from "../sagas";

// log 추척하기 편하게
const loggerMiddleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    return next(action);
  };

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, loggerMiddleware];
  const enhancer =
    process.env.NODE_ENV === "production" // 배포시
      ? compose(applyMiddleware(...middlewares)) //배포 코드
      : composeWithDevTools(applyMiddleware(...middlewares)); //개발 시 사용되는 코드
  const store = createStore(reducer, enhancer);
  store.sagaMiddleware.run(rootSage);

  // return RunStore;
};

export default configureStore;
