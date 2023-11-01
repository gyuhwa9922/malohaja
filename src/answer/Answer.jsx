import { LikeOutlined, MessageOutlined } from "@ant-design/icons";
import { Card } from "antd";
import React from "react";

const Answer = ({ answer }) => {
  return (
    <Card
      // hoverable
      title={answer.title}
      style={{ margin: "30px" }}
      actions={[
        <LikeOutlined key="answerLike" />,
        <MessageOutlined key={"answerComment"} />,
      ]}
    >
      {answer.content}
    </Card>
  );
};

export default Answer;
