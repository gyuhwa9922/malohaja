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
  loadQuestionLoading: false,
  loadQuestionDone: false,
  loadQuestionError: null,
  loadAnswerLoading: false,
  loadAnswerDone: false,
  loadAnswerError: null,
  WriteQuestionLoading: false,
  WriteQuestionDone: false,
  WriteQuestionError: null,
  questions: [],
  answers: [],
};

export const LOAD_QUESTION_REQUEST = "LOAD_QUESTION_REQUEST";
export const LOAD_QUESTION_SUCCESS = "LOAD_QUESTION_SUCCESS";
export const LOAD_QUESTION_FAILURE = "LOAD_QUESTION_FAILURE";

export const LOAD_ANSWER_REQUEST = "LOAD_ANSWER_REQUEST";
export const LOAD_ANSWER_SUCCESS = "LOAD_ANSWER_SUCCESS";
export const LOAD_ANSWER_FAILURE = "LOAD_ANSWER_FAILURE";

export const KEY_WORD_SEARCH_REQUEST = "KEY_WORD_SEARCH_REQUEST";
export const KEY_WORD_SEARCH_SUCCESS = "KEY_WORD_SEARCH_SUCCESS";
export const KEY_WORD_SEARCH_FAILURE = "KEY_WORD_SEARCH_FAILURE";

export const WRITE_QUESTION_REQUEST = "WRITE_QUESTION_REQUEST";
export const WRITE_QUESTION_SUCCESS = "WRITE_QUESTION_SUCCESS";
export const WRITE_QUESTION_FAILURE = "WRITE_QUESTION_FAILURE";

export const WRITE_ANSWER_REQUEST = "WRITE_ANSWER_REQUEST";
export const WRITE_ANSWER_SUCCESS = "WRITE_ANSWER_SUCCESS";
export const WRITE_ANSWER_FAILURE = "WRITE_ANSWER_FAILURE";

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
      case LOAD_QUESTION_REQUEST:
        draft.loadQuestionLoading = true;
        draft.loadQuestionDone = false;
        draft.loadQuestionError = null;
        break;
      case LOAD_QUESTION_SUCCESS:
        draft.questions = action.data;
        draft.loadQuestionLoading = false;
        draft.loadQuestionDone = true;
        break;
      case LOAD_QUESTION_FAILURE:
        draft.loadQuestionLoading = false;
        draft.loadQuestionError = action.error;
        break;
      case LOAD_ANSWER_REQUEST:
        draft.loadAnswerLoading = true;
        draft.loadQuestionDone = false;
        draft.loadQuestionError = null;
        break;
      case LOAD_ANSWER_SUCCESS:
        draft.answers = action.data;
        draft.loadAnswerLoading = false;
        draft.loadQuestionDone = true;
        break;
      case LOAD_ANSWER_FAILURE:
        draft.loadAnswerLoading = false;
        draft.loadQuestionError = action.error;
        break;
      case WRITE_QUESTION_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;
      case WRITE_QUESTION_SUCCESS:
        draft.loadQuestionLoading = false;
        draft.loadQuestionDone = true;
        break;
      case WRITE_QUESTION_FAILURE:
        draft.loadQuestionLoading = false;
        draft.loadQuestionError = action.error;
        break;
      default:
        break;
    }
  });
};
export default reducer;
