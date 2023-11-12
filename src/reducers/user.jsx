import { produce } from "immer";
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
} from "./userAction";

export const initialState = {
  logInLoading: false,
  logInDone: false,
  logInError: null,
  providerLoading: false,
  providerDone: false,
  providerError: null,
  signupLoading: false,
  signupDone: false,
  signupError: null,
  checknickLoading: false,
  checknickDone: false,
  checknickError: null,
  accesstoken: null,
  isVailedNickName: true,
  redirectUrl: "",
  me: null,
  myInfo: null,
};

// export const
// export const

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case REQUEST_PROVIDER_REQUEST:
        draft.providerLoading = true;
        draft.providerDone = false;
        draft.providerError = null;
        break;
      case REQUEST_PROVIDER_SUCCESS:
        draft.accesstoken = action.data.accessToken;
        draft.redirectUrl = action.data.redirect;
        draft.providerLoading = false;
        draft.providerDone = true;
        break;
      case REQUEST_PROVIDER_FAILURE:
        draft.providerLoading = false;
        draft.providerError = action.error;
        break;
      case SIGN_UP_REQUEST:
        draft.signupLoading = true;
        draft.signupDone = false;
        draft.signupError = null;
        break;
      case SIGN_UP_SUCCESS:
        draft.me = action.data;
        draft.signupLoading = false;
        draft.signupDone = true;
        break;
      case SIGN_UP_FAILURE:
        draft.signupLoading = false;
        draft.signupError = action.error;
        break;
      case CHECK_NICKNAME_REQUEST:
        draft.checknickLoading = true;
        draft.checknickDone = false;
        draft.checknickError = null;
        break;
      case CHECK_NICKNAME_SUCCESS:
        draft.isVailedNickName = action.data.isDuplicated;
        draft.checknickLoading = false;
        draft.checknickDone = true;
        break;
      case CHECK_NICKNAME_FAILURE:
        draft.checknickLoading = false;
        draft.checknickError = action.error;
        break;
      default:
        break;
    }
  });
};
export default reducer;
