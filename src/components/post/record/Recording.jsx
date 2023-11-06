import { AudioOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

const Recording = () => {
  return (
    <>
      <Button icon={<AudioOutlined />}> 녹음</Button>
      <Button icon={<AudioOutlined />}> 중단</Button>
    </>
  );
};

export default Recording;
