import {
  BookFilled,
  BookOutlined,
  LikeFilled,
  LikeOutlined,
  LoadingOutlined,
  MessageOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { Avatar, Card, List, Spin } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AnswerDetail from "../answer/AnswerDetail";
import Comment from "../comment/Comment";
import Swal from "sweetalert2";

const QuestionDetail = ({ detailQuestion, detailAnswer, me }) => {
  const dispatch = useDispatch();
  const [commentOpen, setCommentOpen] = useState(false);
  const [bookMark, setBookMark] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const commentToggle = useCallback(() => {
    setCommentOpen((prev) => !prev);
  }, []);
  // useEffect({
  // },)
  const bookMarkOn = useCallback(() => {
    setBookMark(true);
    // if (false) {
    //   return Swal.fire({
    //     icon: "error",
    //     text: "로그인을 해주세요!",
    //   });
    // }
    // dispatch({
    //   // type: ,
    //   data: detailQuestion.id,
    // });
  }, []);
  const bookMarkOff = useCallback(() => {
    setBookMark(false);
    // if (false) {
    //   return Swal.fire({
    //     icon: "error",
    //     text: "로그인을 해주세요!",
    //   });
    // }
    // dispatch({
    //   // type: ,
    //   data: detailQuestion.id,
    // });
  }, []);
  const likeQuestion = useCallback(() => {
    setIsLike(true);
    // if (false) {
    //   return Swal.fire({
    //     icon: "error",
    //     text: "로그인을 해주세요!",
    //   });
    // }
    // dispatch({
    //   // type: ,
    //   data: detailQuestion.id,
    // });
  }, []);
  const unLikeQuestion = useCallback(() => {
    setIsLike(false);
    // if (false) {
    //   return Swal.fire({
    //     icon: "error",
    //     text: "로그인을 해주세요!",
    //   });
    // }
    // dispatch({
    //   // type: ,
    //   data: detailQuestion.id,
    // });
  }, []);
  console.log("detailQuestion", detailQuestion);
  if (!detailQuestion) {
    return (
      <Spin
        indicator={
          <LoadingOutlined
            style={{
              fontSize: 24,
            }}
            spin
          />
        }
      />
    );
  }
  return (
    <>
      <Card
        style={{ textAlign: "center" }}
        actions={[
          !isLike ? (
            <LikeOutlined onClick={likeQuestion} />
          ) : (
            <LikeFilled onClick={unLikeQuestion} />
          ),
          <MessageOutlined onClick={commentToggle} />,
          !bookMark ? (
            <BookOutlined onClick={bookMarkOn} />
          ) : (
            <BookFilled onClick={bookMarkOff} />
          ),
          <MoreOutlined />,
        ]}
      >
        <Meta
          avatar={<Avatar src={detailQuestion.avatar} />}
          title={detailQuestion.title}
          description={detailQuestion.description}
        />
        {detailQuestion.content}
      </Card>
      {commentOpen && <Comment comment={detailQuestion.questionComment} />}
      {detailAnswer.map((v) => (
        <AnswerDetail key={v.id} answer={v} />
      ))}
    </>
  );
};

export default QuestionDetail;
