import { produce } from "immer";

export const initialState = {
  logInLoading: false,
  logInDone: false,
  logInError: null,
  me: null,
  userInfo: null,
};
export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        break;
      case LOG_IN_SUCCESS:
        break;
      case LOG_IN_FAILURE:
        break;
      default:
        break;
    }
  });
};
export default reducer;
