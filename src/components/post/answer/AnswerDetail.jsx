import React from "react";
import {
  LikeOutlined,
  LoadingOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { Card, Spin } from "antd";
import Meta from "antd/es/card/Meta";

const AnswerDetail = ({ detailAnswer }) => {
  console.log("detailAnswer", detailAnswer);
  if (!detailAnswer) {
    return (
      <div>
        <Spin
          indicator={
            <LoadingOutlined
              style={{
                fontSize: 5000,
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
      {detailAnswer.map((v) => (
        <Card
          title={v.title}
          key={v.id}
          actions={[<LikeOutlined />, <MessageOutlined />]}
          content={v.content}
        >
          <Meta
          // avatar
          />
          {v.content}
        </Card>
      ))}
    </>
  );
};

export default AnswerDetail;
