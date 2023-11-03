import { LikeOutlined, MessageOutlined } from "@ant-design/icons";
import { Card, Space } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import IconText from "../../custom/IconText";

const Answer = ({ answer }) => {
  const dispatch = useDispatch();
  const likeOnQuestion = () => {
    // dispatch({});
    console.log("hi");
  };
  const likeOffQuestion = () => {
    dispatch({});
  };
  console.log("answer", answer);
  return (
    <Card
      // hoverable
      title={answer?.title}
      style={{ margin: "30px" }}
      actions={[
        <IconText
          icon={LikeOutlined}
          text={answer?.likeCount}
          handle={likeOnQuestion}
        />,
        <IconText icon={MessageOutlined} text={answer?.commentCount} />,
        // <MessageOutlined key={"answerComment"} onClick={likeOffQuestion} />,
      ]}
    >
      {answer?.content}
    </Card>
  );
};

export default Answer;
