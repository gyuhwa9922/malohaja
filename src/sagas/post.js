import axios from "axios";
import { all, call, fork, put, takeLatest, throttle } from "redux-saga/effects";
import {
  DETAIL_QUESTION_FAILURE,
  DETAIL_QUESTION_REQUEST,
  DETAIL_QUESTION_SUCCESS,
  KEY_WORD_SEARCH_FAILURE,
  KEY_WORD_SEARCH_REQUEST,
  KEY_WORD_SEARCH_SUCCESS,
  LIKE_ANSWER_FAILURE,
  LIKE_ANSWER_REQUEST,
  LIKE_ANSWER_SUCCESS,
  LIKE_QUESTION_FAILURE,
  LIKE_QUESTION_REQUEST,
  LIKE_QUESTION_SUCCESS,
  LOAD_ANSWER_FAILURE,
  LOAD_ANSWER_REQUEST,
  LOAD_ANSWER_SUCCESS,
  LOAD_QUESTION_FAILURE,
  LOAD_QUESTION_REQUEST,
  LOAD_QUESTION_SUCCESS,
  UNLIKE_ANSWER_FAILURE,
  UNLIKE_ANSWER_REQUEST,
  UNLIKE_ANSWER_SUCCESS,
  UNLIKE_QUESTION_FAILURE,
  UNLIKE_QUESTION_REQUEST,
  UNLIKE_QUESTION_SUCCESS,
  WRITE_ANSWER_FAILURE,
  WRITE_ANSWER_REQUEST,
  WRITE_ANSWER_SUCCESS,
  WRITE_QUESTION_FAILURE,
  WRITE_QUESTION_REQUEST,
  WRITE_QUESTION_SUCCESS,
} from "../reducers/postAction";

function loadDetailQuestionAPI(id) {
  console.log(id);
  return axios.get(`/api/v1/question/${id}`);
}

function* loadDetailQuestion(action) {
  try {
    console.log("action.data", action.data);
    // const result = yield call(loadDetailQuestionAPI, action.data);
    yield put({
      type: DETAIL_QUESTION_SUCCESS,
      // data: result.data,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: DETAIL_QUESTION_FAILURE,
      error: error.response.data,
    });
  }
}

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

function writeQuestionAPI(data) {
  console.log(data);
  return axios.post(`http://172.20.10.3:8080/api/v1/question`, data);
}

function* writeQuestion(action) {
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
function writeAnswerAPI(data) {
  console.log(data);
  return axios.post(`http://172.20.10.3:8080/api/v1/question`, data);
}

function* writeAnswer(action) {
  try {
    console.log("action.data", action.data);
    // const result = yield call(writeAnswerAPI, action.data);
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

function likeQuestionAPI(data) {
  // axios의 patch는 데이터의 일부분을 수정할때 사용된다.
  return axios.patch(``);
}

function* likeQuestion(action) {
  try {
    const result = yield call(likeQuestionAPI, action.data);
    yield put({
      type: LIKE_QUESTION_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LIKE_QUESTION_FAILURE,
      error: err.response.data,
    });
  }
}

function unLikeQuestionAPI(data) {
  return axios.delete(``);
}

function* unLikeQuestion(action) {
  try {
    const result = yield call(unLikeQuestionAPI, action.data);
    yield put({
      type: UNLIKE_QUESTION_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: UNLIKE_QUESTION_FAILURE,
      error: err.response.data,
    });
  }
}
function likeAnswerAPI(data) {
  // axios의 patch는 데이터의 일부분을 수정할때 사용된다.
  return axios.patch(``);
}

function* likeAnswer(action) {
  try {
    const result = yield call(likeAnswerAPI, action.data);
    yield put({
      type: LIKE_ANSWER_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LIKE_ANSWER_FAILURE,
      error: err.response.data,
    });
  }
}
function unLikeAnswerAPI(data) {
  return axios.delete(``);
}

function* unLikeAnswer(action) {
  try {
    const result = yield call(unLikeAnswerAPI, action.data);
    yield put({
      type: UNLIKE_ANSWER_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: UNLIKE_ANSWER_FAILURE,
      error: err.response.data,
    });
  }
}

function keywordSearchAPI(data) {
  console.log(data);
  return axios.post(
    `http://172.20.10.3:8080/api/v1/member/nickname/check`,
    data
  );
}

function* keywordSearch(action) {
  try {
    console.log("action.data", action.data);
    // const result = yield call(keywordSearchAPI, action.data);
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

function* watchLoadDetailQuestion() {
  // 1초
  yield throttle(1000, DETAIL_QUESTION_REQUEST, loadDetailQuestion);
}

function* watchLikeQuestion() {
  yield takeLatest(LIKE_QUESTION_REQUEST, likeQuestion);
}
function* watchLikeAnswer() {
  yield takeLatest(LIKE_ANSWER_REQUEST, likeAnswer);
}
function* watchUnLikeQuestion() {
  yield takeLatest(UNLIKE_QUESTION_REQUEST, unLikeQuestion);
}
function* watchUnLikeAnswer() {
  yield takeLatest(UNLIKE_ANSWER_REQUEST, unLikeAnswer);
}
function* watchWriteAnswer() {
  yield takeLatest(WRITE_ANSWER_REQUEST, writeAnswer);
}

function* watchWriteQuestion() {
  yield takeLatest(WRITE_QUESTION_REQUEST, writeQuestion);
}

function* watchLoadAnswer() {
  // 4초
  yield throttle(4000, LOAD_ANSWER_REQUEST, loadAnswer);
}

function* watchLoadQuestion() {
  // 4초
  yield throttle(4000, LOAD_QUESTION_REQUEST, loadQuestion);
}

function* watchCheckKeywordSearch() {
  yield takeLatest(KEY_WORD_SEARCH_REQUEST, keywordSearch);
}

export default function* postSaga() {
  yield all([
    fork(watchLoadDetailQuestion),
    fork(watchLikeAnswer),
    fork(watchLikeQuestion),
    fork(watchUnLikeQuestion),
    fork(watchUnLikeAnswer),
    fork(watchCheckKeywordSearch),
    fork(watchLoadQuestion),
    fork(watchLoadAnswer),
    fork(watchWriteAnswer),
    fork(watchWriteQuestion),
  ]);
}
