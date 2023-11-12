import React, { useCallback, useState } from "react";
import {
  LikeOutlined,
  LoadingOutlined,
  MessageOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Card, List, Popover, Spin } from "antd";
import Meta from "antd/es/card/Meta";
import ButtonGroup from "antd/es/button/button-group";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import Comment from "../comment/Comment";

const AnswerDetail = ({ answer }) => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const [commentOpen, setCommentOpen] = useState(false);
  const CommentToggle = useCallback(() => {
    setCommentOpen((prev) => !prev);
  }, []);
  console.log(answer);
  const onResertAnswer = useCallback(() => {
    if (!me) {
      return Swal.fire({
        icon: "error",
        text: "로그인을 해주세요!",
      });
    }
    dispatch({
      // type: ,
      data: answer.id,
    });
  }, []);
  const onRemoveAnswer = useCallback(() => {
    if (!me) {
      return Swal.fire({
        icon: "error",
        text: "로그인을 해주세요!",
      });
    }
    dispatch({
      // type: ,
      data: answer.id,
    });
  }, []);
  const likeOn = useCallback(() => {
    // dispatch({
    //   type:
    //   data:
    // })
  }, []);
  if (!answer) {
    return (
      <div>
        <Spin
          indicator={
            <LoadingOutlined
              style={{
                fontSize: 300,
              }}
              spin
            />
          }
        />
      </div>
    );
  }
  return (
    <>
      <Card
        title={answer.title}
        key={answer.id}
        actions={[
          <LikeOutlined onClick={likeOn} key={answer} />,
          <MessageOutlined onClick={CommentToggle} key={answer} />,
          <Popover
            key={"more"}
            content={
              <ButtonGroup>
                {me ? (
                  <>
                    <Button type="primary" onClick={onResertAnswer}>
                      수정
                    </Button>
                    <Button type="primary" onClick={onRemoveAnswer} danger>
                      삭제
                    </Button>
                  </>
                ) : (
                  <Button danger>신고</Button>
                )}
              </ButtonGroup>
            }
          ></Popover>,
        ]}
        content={answer.content}
      >
        <Meta
        // avatar
        />
        {answer.content}
      </Card>
      {commentOpen && (
        <div>
          <Comment comment={answer.answerComment} />
        </div>
      )}
    </>
  );
};

export default AnswerDetail;
