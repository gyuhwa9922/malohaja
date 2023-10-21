import { all, fork } from "redux-saga/effects";
import axios from "axios";
import userSaga from "./user";

axios.defaults.withCredentials = true;

export default function* rootSage() {
  yield all([fork(userSaga)]);
}
