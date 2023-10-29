import { produce } from "immer";

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
  me: null,
  userInfo: null,
};

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const REQUEST_PROVIDER_REQUEST = "REQUEST_PROVIDER_REQUEST";
export const REQUEST_PROVIDER_SUCCESS = "REQUEST_PROVIDER_SUCCESS";
export const REQUEST_PROVIDER_FAILURE = "REQUEST_PROVIDER_FAILURE";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const CHECK_NICKNAME_REQUEST = "CHECK_NICKNAME_REQUEST";
export const CHECK_NICKNAME_SUCCESS = "CHECK_NICKNAME_SUCCESS";
export const CHECK_NICKNAME_FAILURE = "CHECK_NICKNAME_FAILURE";

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
