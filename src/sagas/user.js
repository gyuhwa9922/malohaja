import axios from "axios";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import {
  CHECK_NICKNAME_FAILURE,
  CHECK_NICKNAME_REQUEST,
  CHECK_NICKNAME_SUCCESS,
  REQUEST_PROVIDER_FAILURE,
  REQUEST_PROVIDER_REQUEST,
  REQUEST_PROVIDER_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from "../reducers/userAction";

//로그인
function signUpAPI(data) {
  return axios.post(`/api/v1/member/signup`, data.values, {
    headers: {
      Authorization: `${data.headers}`,
    },
  });
}

function* signUp(action) {
  console.log(action.data);
  try {
    console.log("action.data", action.data);
    const result = yield call(signUpAPI, action.data);
    yield put({
      type: SIGN_UP_SUCCESS,
      data: result.data,
      // data: action.data,
    });
  } catch (error) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: error.response.data,
    });
  }
}
//provider, code를 보내 token 받아오는 요청
function providerAPI(data) {
  console.log(data.provider, data.code);
  return axios.get(`/api/v1/auth/${data.provider}?code=${data.code}`, data);
}

function* provider(action) {
  try {
    console.log("action.data", action.data);
    const result = yield call(providerAPI, action.data);
    yield put({
      type: REQUEST_PROVIDER_SUCCESS,
      // data: "dummytoken",
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: REQUEST_PROVIDER_FAILURE,
      error: error.response.data,
    });
  }
}
//signup 때 중복닉네임인지 확인하는 api
function checkNicknameAPI(data) {
  console.log(data);
  return axios.post(`/api/v1/member/nickname/check`, { nickname: data });
}

function* checkNickname(action) {
  try {
    console.log("action.data", action.data);
    const result = yield call(checkNicknameAPI, action.data);
    yield put({
      type: CHECK_NICKNAME_SUCCESS,
      data: result.data,
      // data: action.data,
    });
  } catch (error) {
    yield put({
      type: CHECK_NICKNAME_FAILURE,
      error: error.response.data,
    });
  }
}

function* watchCheckNickname() {
  yield takeLatest(CHECK_NICKNAME_REQUEST, checkNickname);
}

function* watchSignup() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

function* watchProvider() {
  yield takeLatest(REQUEST_PROVIDER_REQUEST, provider);
}

export default function* userSaga() {
  yield all([fork(watchProvider), fork(watchSignup), fork(watchCheckNickname)]);
}
