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
} from "../reducers/user";
//로그인
// function SignUpAPI(data) {
//   console.log(data);
//   return axios.post(`http://172.20.10.3:8080/api/v1/signup`, data);
// }

function* SignUp(action) {
  try {
    console.log("action.data", action.data);
    // const result = yield call(SignUpAPI, action.data);
    yield put({
      type: SIGN_UP_SUCCESS,
      // data: result.data,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: error.response.data,
    });
  }
}
//provider, code를 보내 token 받아오는 요청
function ProviderAPI(data) {
  console.log(data.provider, data.code);
  return axios.get(
    `http://172.20.10.3:8080/api/v1/auth/${data.provider}?code=${data.code}`,
    data
  );
}
function* Provider(action) {
  try {
    console.log("action.data", action.data);
    // const result = yield call(ProviderAPI, action.data);
    yield put({
      type: REQUEST_PROVIDER_SUCCESS,
      data: "dummytoken",
      // data: result.data,
    });
  } catch (error) {
    yield put({
      type: REQUEST_PROVIDER_FAILURE,
      error: error.response.data,
    });
  }
}
//signup 때 중복닉네임인지 확인하는 api
function CheckNicknameAPI(data) {
  console.log(data);
  return axios.post(
    `http://172.20.10.3:8080/api/v1/member/nickname/check`,
    data
  );
}

function* CheckNickname(action) {
  try {
    console.log("action.data", action.data);
    // const result = yield call(CheckNicknameAPI, action.data);
    yield put({
      type: CHECK_NICKNAME_SUCCESS,
      // data: result.data,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: CHECK_NICKNAME_FAILURE,
      error: error.response.data,
    });
  }
}

function* watchCheckNickname() {
  yield takeLatest(CHECK_NICKNAME_REQUEST, CheckNickname);
}

function* watchSignup() {
  yield takeLatest(SIGN_UP_REQUEST, SignUp);
}

function* watchProvider() {
  yield takeLatest(REQUEST_PROVIDER_REQUEST, Provider);
}

export default function* userSaga() {
  yield all([fork(watchProvider), fork(watchSignup), fork(watchCheckNickname)]);
}
