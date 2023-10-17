import { all } from "redux-saga/effects";
import axios from "axios";

axios.defaults.withCredentials = true;

export default function* rootSage() {
  yield all([]);
}
