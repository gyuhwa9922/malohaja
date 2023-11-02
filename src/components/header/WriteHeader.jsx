import { LeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";
import { useNavigate } from "react-router-dom";

const WriteHeader = () => {
  const nav = useNavigate();
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Button onClick={() => nav("/")}>
        <LeftOutlined />
      </Button>
    </Header>
  );
};

export default WriteHeader;
