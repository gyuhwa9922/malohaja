import { all, fork } from "redux-saga/effects";
import axios from "axios";
import userSaga from "./user";
import postSaga from "./post";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://172.30.1.58:8080";

export default function* rootSage() {
  yield all([fork(userSaga), fork(postSaga)]);
}
