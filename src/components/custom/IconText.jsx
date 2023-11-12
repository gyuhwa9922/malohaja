import { Space } from "antd";
import React from "react";
import {
  BookOutlined,
  LikeOutlined,
  MessageOutlined,
  MoreOutlined,
  AudioOutlined,
  EditOutlined,
  UserOutlined,
} from "@ant-design/icons";

const IconText = ({ icon, text, handle }) => {
  // console.log(handle);
  return handle !== undefined ? (
    <Space onClick={() => handle()}>
      {React.createElement(icon)}
      {text}
    </Space>
  ) : (
    <Space style={{ margin: "10px" }}>
      {React.createElement(icon)}
      {text}
    </Space>
  );
};

export default IconText;
