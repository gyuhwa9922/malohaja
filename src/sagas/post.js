import axios from "axios";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import {
  KEY_WORD_SEARCH_FAILURE,
  KEY_WORD_SEARCH_REQUEST,
  KEY_WORD_SEARCH_SUCCESS,
  LOAD_POST_FAILURE,
  LOAD_POST_REQUEST,
  LOAD_POST_SUCCESS,
  WRITE_POST_FAILURE,
  WRITE_POST_REQUEST,
  WRITE_POST_SUCCESS,
} from "../reducers/post";

function loadPostAPI(data) {
  console.log(data);
  return axios.get(`http://172.20.10.3:8080/api/v1/member/nickname/check`);
}

function* loadPost(action) {
  try {
    console.log("action.data", action.data);
    // const result = yield call(loadPostAPI, action.data);
    yield put({
      type: LOAD_POST_SUCCESS,
      // data: result.data,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: LOAD_POST_FAILURE,
      error: error.response.data,
    });
  }
}

function WritePostAPI(data) {
  console.log(data);
  return axios.get(`http://172.20.10.3:8080/api/v1/question`);
}

function* WritePost(action) {
  try {
    console.log("action.data", action.data);
    // const result = yield call(WritePostAPI, action.data);
    yield put({
      type: WRITE_POST_SUCCESS,
      // data: result.data,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: WRITE_POST_FAILURE,
      error: error.response.data,
    });
  }
}

function KeywordSearchAPI(data) {
  console.log(data);
  return axios.post(
    `http://172.20.10.3:8080/api/v1/member/nickname/check`,
    data
  );
}

function* KeywordSearch(action) {
  try {
    console.log("action.data", action.data);
    // const result = yield call(KeywordSearchAPI, action.data);
    yield put({
      type: KEY_WORD_SEARCH_SUCCESS,
      // data: result.data,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: KEY_WORD_SEARCH_FAILURE,
      error: error.response.data,
    });
  }
}

function* watchWritePost() {
  yield takeLatest(WRITE_POST_REQUEST, WritePost);
}

function* watchloadPost() {
  yield takeLatest(LOAD_POST_REQUEST, loadPost);
}

function* watchCheckKeywordSearch() {
  yield takeLatest(KEY_WORD_SEARCH_REQUEST, KeywordSearch);
}

export default function* postSaga() {
  yield all([
    fork(watchCheckKeywordSearch),
    fork(watchloadPost),
    fork(watchWritePost),
  ]);
}
