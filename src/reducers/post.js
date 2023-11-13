import { produce } from "immer";
import {
  BOOKMARK_FAILURE,
  BOOKMARK_REQUEST,
  BOOKMARK_SUCCESS,
  DELETE_BOOKMARK_FAILURE,
  DELETE_BOOKMARK_REQUEST,
  DELETE_BOOKMARK_SUCCESS,
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
  WRITE_QUESTION_FAILURE,
  WRITE_QUESTION_REQUEST,
  WRITE_QUESTION_SUCCESS,
} from "./postAction";

export const initialState = {
  // skill: [
  //   {
  //     label: "java",
  //     value: "Java",
  //   },
  //   {
  //     label: "spring",
  //     value: "Spring",
  //   },
  //   {
  //     label: "mysql",
  //     value: "Mysql",
  //   },
  //   {
  //     label: "git",
  //     value: "Git",
  //   },
  //   {
  //     label: "etc",
  //     value: "Etc",
  //   },
  // ],
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
  likeQuestionLoading: false,
  likeQuestionDone: false,
  likeQuestionError: null,
  unlikeQuestionLoading: false,
  unlikeQuestionDone: false,
  unlikeQuestionError: null,
  bookmarkLoading: false,
  bookmarkDone: false,
  bookmarkError: null,
  deleteBookmarkLoading: false,
  deleteBookmarkDone: false,
  deleteBookmarkError: null,
  likeAnswerLoading: false,
  likeAnswerDone: false,
  likeAnswerError: null,
  unlikeAnswerLoading: false,
  unlikeAnswerDone: false,
  unlikeAnswerError: null,
  detailQuestionLoading: false,
  detailQuestionDone: false,
  detailQuestionError: null,
  detailAnswer: [],
  detailQuestion: null,
  questions: [
    {
      id: 1,
      title: `질문 test1`,
      avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=0`,
      description: "아~~~ 엄청난 고수가 되고 싶다. 고수되는 법 알려주셈 ㅋㅋ",
      content: "있겠니? ㅋㅋㅋㅋ 시간 투자해 ㅋㅋㅋ",
      likeCount: 20,
      commentCount: 2,
      bestAnswer: {
        id: 1,
        title: "질문에 대한 답변~",
        content: "솰라 솰라~ 음~ 굿굿 1",
        likeCount: 10,
        commentCount: 2,
      },
      question:
        "알려주세요~~~~~~~~~~~~~~~~~~~~~~~~~~~알려주세요~~~~~~~~~~~~~~~~~~~~~~~~~~~알려주세요~~~~~~~~~~~~~~~~~~~~~~~~~~~알려주세요~~~~~~~~~~~~~~~~~~~~~~~~~~~",
      questionComment: [
        {
          id: 1,
          questionId: 1,
          userId: 1,
          comment: "test1",
        },
        {
          id: 2,
          questionId: 1,
          userId: 1,
          comment: "test2",
        },
        {
          id: 3,
          questionId: 1,
          userId: 1,
          comment: "test3",
        },
      ],
    },
    {
      id: 2,
      title: `질문 test2`,
      avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=0`,
      description: "아~~~ 엄청난 고수가 되고 싶다. 고수되는 법 알려주셈 ㅋㅋ",
      content: "있겠니? ㅋㅋㅋㅋ 시간 투자해 ㅋㅋㅋ",
      likeCount: 20,
      commentCount: 2,
      bestAnswer: {
        id: 2,
        title: "질문에 대한 답변~",
        content: "솰라 솰라~ 음~ 굿굿 2",
        likeCount: 10,
        commentCount: 2,
      },
      question:
        "알려주세요~~~~~~~~~~~~~~~~~~~~~~~~~~~알려주세요~~~~~~~~~~~~~~~~~~~~~~~~~~~알려주세요~~~~~~~~~~~~~~~~~~~~~~~~~~~알려주세요~~~~~~~~~~~~~~~~~~~~~~~~~~~",
      questionComment: [
        {
          id: 4,
          questionId: 2,
          userId: 1,
          comment: "test4",
        },
        {
          id: 5,
          questionId: 2,
          userId: 1,
          comment: "test5",
        },
        {
          id: 6,
          questionId: 2,
          userId: 1,
          comment: "test6",
        },
      ],
    },
    {
      id: 3,
      title: `질문 test3`,
      avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=0`,
      description: "아~~~ 엄청난 고수가 되고 싶다. 고수되는 법 알려주셈 ㅋㅋ",
      content: "있겠니? ㅋㅋㅋㅋ 시간 투자해 ㅋㅋㅋ",
      likeCount: 20,
      commentCount: 2,
      question:
        "알려주세요~~~~~~~~~~~~~~~~~~~~~~~~~~~알려주세요~~~~~~~~~~~~~~~~~~~~~~~~~~~알려주세요~~~~~~~~~~~~~~~~~~~~~~~~~~~알려주세요~~~~~~~~~~~~~~~~~~~~~~~~~~~",
      bestAnswer: {
        id: 3,
        title: "질문에 대한 답변~",
        content: "솰라 솰라~ 음~ 굿굿3 ",
        likeCount: 10,
        commentCount: 2,
      },
      questionComment: [
        {
          id: 7,
          questionId: 3,
          userId: 1,
          comment: "test7",
        },
        {
          id: 8,
          questionId: 3,
          userId: 1,
          comment: "test8",
        },
        {
          id: 9,
          questionId: 3,
          userId: 1,
          comment: "test9",
        },
      ],
    },
  ],
  answers: [
    {
      id: 2,
      questionId: 1,
      title: "질문에 대한 답변~",
      content: "솰라 솰라~ 음~ 굿굿 ",
      likeCount: 10,
      commentCount: 2,
      answerComment: [
        {
          id: 1,
          userId: 1,
          answerId: 2,
          comment: "tes1",
        },
        {
          id: 2,
          userId: 1,
          answerId: 2,
          comment: "tes2",
        },
        {
          id: 3,
          userId: 1,
          answerId: 2,
          comment: "tes3",
        },
      ],
    },
    {
      id: 3,
      questionId: 1,
      title: "질문에 대한 답변~",
      content: "솰라 솰라~ 음~ 굿굿 ",
      likeCount: 10,
      commentCount: 2,
      answerComment: [
        {
          id: 4,
          userId: 1,
          answerId: 3,
          comment: "tes4",
        },
        {
          id: 5,
          userId: 1,
          answerId: 3,
          comment: "tes5",
        },
        {
          id: 6,
          userId: 1,
          answerId: 3,
          comment: "tes6",
        },
      ],
    },
  ],
};

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
      case LIKE_QUESTION_REQUEST:
        draft.likeQuestionLoading = true;
        draft.likeQuestionDone = false;
        draft.likeQuestionError = null;
        break;
      case LIKE_QUESTION_SUCCESS:
        draft.likeQuestionLoading = false;
        draft.likeQuestionDone = true;
        break;
      case LIKE_QUESTION_FAILURE:
        draft.likeQuestionLoading = false;
        draft.likeQuestionError = action.error;
        break;
      case UNLIKE_QUESTION_REQUEST:
        draft.unlikeQuestionLoading = true;
        draft.unlikeQuestionDone = false;
        draft.unlikeQuestionError = null;
        break;
      case UNLIKE_QUESTION_SUCCESS:
        draft.unlikeQuestionLoading = false;
        draft.unlikeQuestionDone = true;
        break;
      case UNLIKE_QUESTION_FAILURE:
        draft.unlikeQuestionLoading = false;
        draft.unlikeQuestionError = action.error;
        break;
      case LIKE_ANSWER_REQUEST:
        draft.likeAnswerLoading = true;
        draft.likeAnswerDone = false;
        draft.likeAnswerError = null;
        break;
      case LIKE_ANSWER_SUCCESS:
        draft.likeAnswerLoading = false;
        draft.likeAnswerDone = true;
        break;
      case LIKE_ANSWER_FAILURE:
        draft.likeAnswerLoading = false;
        draft.likeAnswerError = action.error;
        break;
      case UNLIKE_ANSWER_REQUEST:
        draft.unlikeAnswerLoading = true;
        draft.unlikeAnswerDone = false;
        draft.unlikeAnswerError = null;
        break;
      case UNLIKE_ANSWER_SUCCESS:
        draft.unlikeAnswerLoading = false;
        draft.unlikeAnswerDone = true;
        break;
      case UNLIKE_ANSWER_FAILURE:
        draft.unlikeAnswerLoading = false;
        draft.unlikeAnswerError = action.error;
        break;
      case DETAIL_QUESTION_REQUEST:
        draft.detailQuestionLoading = true;
        draft.detailQuestionDone = false;
        draft.detailQuestionError = null;
        break;
      case DETAIL_QUESTION_SUCCESS:
        draft.detailQuestion = draft.questions.find(
          (v) => v.id === action.data
        );
        draft.detailAnswer = draft.answers.filter(
          (v) => v.questionId === action.data
        );
        draft.detailQuestionLoading = false;
        draft.detailQuestionDone = true;
        break;
      case DETAIL_QUESTION_FAILURE:
        draft.detailQuestionLoading = false;
        draft.detailQuestionError = action.error;
        break;
      case BOOKMARK_REQUEST:
        draft.bookmarkLoading = true;
        draft.bookmarkDone = false;
        draft.bookmarkError = null;
        break;
      case BOOKMARK_SUCCESS:
        draft.bookmarkLoading = false;
        draft.bookmarkDone = true;
        break;
      case BOOKMARK_FAILURE:
        draft.bookmarkLoading = false;
        draft.bookmarkError = action.error;
        break;
      case DELETE_BOOKMARK_REQUEST:
        draft.deleteBookmarkLoading = true;
        draft.deleteBookmarkDone = false;
        draft.deleteBookmarkError = null;
        break;
      case DELETE_BOOKMARK_SUCCESS:
        draft.deleteBookmarkLoading = false;
        draft.deleteBookmarkDone = true;
        break;
      case DELETE_BOOKMARK_FAILURE:
        draft.deleteBookmarkLoading = false;
        draft.deleteBookmarkError = action.error;
        break;
      default:
        break;
    }
  });
};
export default reducer;
