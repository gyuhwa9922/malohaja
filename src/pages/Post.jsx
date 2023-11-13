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
  const { me } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch({
      type: DETAIL_QUESTION_REQUEST,
      data: parseInt(id),
    });
  }, []);
  console.log(detailQuestion);
  return (
    <>
      <MainHeader />
      <QuestionDetail
        detailQuestion={detailQuestion}
        me={me}
        detailAnswer={detailAnswer}
      />
      {/* <AnswerDetail detailAnswer={detailAnswer} me={me} /> */}
    </>
  );
};

export default Post;
