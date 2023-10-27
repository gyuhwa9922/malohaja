import { produce } from "immer";

export const initialState = {
  skill: [
    {
      label: "java",
      value: "Java",
    },
    {
      label: "spring",
      value: "Spring",
    },
    {
      label: "mysql",
      value: "Mysql",
    },
    {
      label: "git",
      value: "Git",
    },
    {
      label: "etc",
      value: "Etc",
    },
  ],
  keywordSearchLoading: false,
  keywordSearchDone: false,
  keywordSearchError: null,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  WritePostLoading: false,
  WritePostDone: false,
  WritePostError: null,
  post: [],
};

export const LOAD_POST_REQUEST = "LOAD_POST_REQUEST";
export const LOAD_POST_SUCCESS = "LOAD_POST_SUCCESS";
export const LOAD_POST_FAILURE = "LOAD_POST_FAILURE";

export const KEY_WORD_SEARCH_REQUEST = "KEY_WORD_SEARCH_REQUEST";
export const KEY_WORD_SEARCH_SUCCESS = "KEY_WORD_SEARCH_SUCCESS";
export const KEY_WORD_SEARCH_FAILURE = "KEY_WORD_SEARCH_FAILURE";

export const WRITE_POST_REQUEST = "WRITE_POST_REQUEST";
export const WRITE_POST_SUCCESS = "WRITE_POST_SUCCESS";
export const WRITE_POST_FAILURE = "WRITE_POST_FAILURE";

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case KEY_WORD_SEARCH_REQUEST:
        draft.keywordSearchLoading = true;
        draft.keywordSearchDone = false;
        draft.keywordSearchError = null;
        break;
      case KEY_WORD_SEARCH_SUCCESS:
        draft.keywordSearchLoading = false;
        draft.keywordSearchDone = true;
        break;
      case KEY_WORD_SEARCH_FAILURE:
        draft.keywordSearchLoading = false;
        draft.keywordSearchError = action.error;
        break;
      case LOAD_POST_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;
      case LOAD_POST_SUCCESS:
        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        break;
      case LOAD_POST_FAILURE:
        draft.loadPostLoading = false;
        draft.loadPostError = action.error;
        break;
      case WRITE_POST_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;
      case WRITE_POST_SUCCESS:
        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        break;
      case WRITE_POST_FAILURE:
        draft.loadPostLoading = false;
        draft.loadPostError = action.error;
        break;
      default:
        break;
    }
  });
};
export default reducer;
