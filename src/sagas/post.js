import axios from "axios";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import {
  KEY_WORD_SEARCH_FAILURE,
  KEY_WORD_SEARCH_REQUEST,
  KEY_WORD_SEARCH_SUCCESS,
  LOAD_ANSWER_FAILURE,
  LOAD_ANSWER_REQUEST,
  LOAD_ANSWER_SUCCESS,
  LOAD_QUESTION_FAILURE,
  LOAD_QUESTION_REQUEST,
  LOAD_QUESTION_SUCCESS,
  WRITE_ANSWER_FAILURE,
  WRITE_ANSWER_REQUEST,
  WRITE_ANSWER_SUCCESS,
  WRITE_QUESTION_FAILURE,
  WRITE_QUESTION_REQUEST,
  WRITE_QUESTION_SUCCESS,
} from "../reducers/post";

function loadQuestionAPI(data) {
  console.log(data);
  return axios.get(`http://172.20.10.3:8080/api/v1/member/nickname/check`);
}

function* loadQuestion(action) {
  try {
    console.log("action.data", action.data);
    // const result = yield call(loadQuestionAPI, action.data);
    yield put({
      type: LOAD_QUESTION_SUCCESS,
      // data: result.data,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: LOAD_QUESTION_FAILURE,
      error: error.response.data,
    });
  }
}

function loadAnswerAPI(data) {
  console.log(data);
  return axios.get(`http://172.20.10.3:8080/api/v1/member/nickname/check`);
}

function* loadAnswer(action) {
  try {
    console.log("action.data", action.data);
    // const result = yield call(loadAnswerAPI, action.data);
    yield put({
      type: LOAD_ANSWER_SUCCESS,
      // data: result.data,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: LOAD_ANSWER_FAILURE,
      error: error.response.data,
    });
  }
}

function WriteQuestionAPI(data) {
  console.log(data);
  return axios.post(`http://172.20.10.3:8080/api/v1/question`, data);
}

function* WriteQuestion(action) {
  try {
    console.log("action.data", action.data);
    // const result = yield call(WriteQuestionAPI, action.data);
    yield put({
      type: WRITE_QUESTION_SUCCESS,
      // data: result.data,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: WRITE_QUESTION_FAILURE,
      error: error.response.data,
    });
  }
}
function WriteAnswerAPI(data) {
  console.log(data);
  return axios.post(`http://172.20.10.3:8080/api/v1/question`, data);
}

function* WriteAnswer(action) {
  try {
    console.log("action.data", action.data);
    // const result = yield call(WriteAnswerAPI, action.data);
    yield put({
      type: WRITE_ANSWER_SUCCESS,
      // data: result.data,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: WRITE_ANSWER_FAILURE,
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

function* watchWriteAnswer() {
  yield takeLatest(WRITE_ANSWER_REQUEST, WriteAnswer);
}

function* watchWriteQuestion() {
  yield takeLatest(WRITE_QUESTION_REQUEST, WriteQuestion);
}

function* watchLoadAnswer() {
  yield takeLatest(LOAD_ANSWER_REQUEST, loadAnswer);
}

function* watchLoadQuestion() {
  yield takeLatest(LOAD_QUESTION_REQUEST, loadQuestion);
}

function* watchCheckKeywordSearch() {
  yield takeLatest(KEY_WORD_SEARCH_REQUEST, KeywordSearch);
}

export default function* postSaga() {
  yield all([
    fork(watchCheckKeywordSearch),
    fork(watchLoadQuestion),
    fork(watchLoadAnswer),
    fork(watchWriteAnswer),
    fork(watchWriteQuestion),
  ]);
}
