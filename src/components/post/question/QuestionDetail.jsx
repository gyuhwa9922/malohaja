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
import {
  BOOKMARK_REQUEST,
  DELETE_BOOKMARK_REQUEST,
} from "../../../reducers/postAction";
import Loading from "../../custom/Loading";

const QuestionDetail = ({ detailQuestion, detailAnswer, me }) => {
  const dispatch = useDispatch();
  const [commentOpen, setCommentOpen] = useState(false);
  const [bookMark, setBookMark] = useState(false);
  const [isLiked, setIsLike] = useState(false);
  const commentToggle = useCallback(() => {
    setCommentOpen((prev) => !prev);
  }, []);
  // useEffect({
  // },)
  const bookMarkOn = useCallback(() => {
    console.log("bookmark");

    // if (false) {
    //   return Swal.fire({
    //     icon: "error",
    //     text: "로그인을 해주세요!",
    //   });
    // }
    if (!detailQuestion) {
      console.log("ㅠㅠㅠ");
      return <Loading />;
    } else {
      console.log("성공~");
      setBookMark(true);
      dispatch({
        type: BOOKMARK_REQUEST,
        data: detailQuestion.id,
      });
    }
  }, [detailQuestion]);
  const bookMarkOff = useCallback(() => {
    console.log("deletebookmark");

    // if (false) {
    //   return Swal.fire({
    //     icon: "error",
    //     text: "로그인을 해주세요!",
    //   });
    // }

    dispatch({
      type: DELETE_BOOKMARK_REQUEST,
      data: detailQuestion.id,
    });
  }, [detailQuestion]);
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
  }, [detailQuestion]);
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
  }, [detailQuestion]);

  // console.log("detailQuestion", detailQuestion);
  if (!detailQuestion) {
    return <Loading />;
  }
  return (
    <>
      <Card
        style={{ textAlign: "center" }}
        actions={[
          !isLiked ? (
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
