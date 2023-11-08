// import React, { useEffect } from "react";
import { Card } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  BookOutlined,
  LikeOutlined,
  MessageOutlined,
  MoreOutlined,
  AudioOutlined,
} from "@ant-design/icons";
const DetailQuestion = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch({
    //   type: DETAIL_QUESTION_REQUEST,
    //    id : id,
    // })
  });
  return (
    <Card
      actions={[
        <LikeOutlined />,
        <BookOutlined />,
        <MessageOutlined />,
        <MoreOutlined />,
      ]}
    >
      hi {id}
    </Card>
  );
};

export default DetailQuestion;
