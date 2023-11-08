import {
  BookOutlined,
  LikeOutlined,
  LoadingOutlined,
  MessageOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Spin } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const QuestionDetail = ({ detailQuestion }) => {
  // const { detailQuestion } = useSelector((state) => state.post);
  // useEffect({

  // },)
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
          <LikeOutlined />,
          <MessageOutlined />,
          <BookOutlined />,
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
    </>
  );
};

export default QuestionDetail;
