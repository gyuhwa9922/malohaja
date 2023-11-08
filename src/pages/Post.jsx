import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DETAIL_QUESTION_REQUEST } from "../reducers/postAction";
import MainHeader from "../components/header/MainHeader";
import AnswerDetail from "../components/post/answer/AnswerDetail";
import QuestionDetail from "../components/post/question/QuestionDetail";

const Post = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { detailQuestion, detailAnswer, detailQuestionLoading } = useSelector(
    (state) => state.post
  );

  useEffect(() => {
    dispatch({
      type: DETAIL_QUESTION_REQUEST,
      data: parseInt(id),
    });
  }, [detailQuestion]);

  return (
    <>
      <MainHeader />
      <QuestionDetail detailQuestion={detailQuestion} />
      <AnswerDetail detailAnswer={detailAnswer} />
    </>
  );
};

export default Post;
