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
  token: [],
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
// export const
// export const
// export const
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
        draft.signupLoading = false;
        draft.signupDone = true;
        break;
      case SIGN_UP_FAILURE:
        draft.signupLoading = false;
        draft.signupError = action.error;
        break;
      default:
        break;
    }
  });
};
export default reducer;
