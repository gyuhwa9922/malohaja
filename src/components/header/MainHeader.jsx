import React from "react";
import { Header } from "antd/es/layout/layout";
import styled from "styled-components";
import { Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const MainHeader = () => {
  const navigate = useNavigate();

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
        justifyContent: "space-between",
      }}
    >
      <LogoImg src="/image/malohajalogo.png" onClick={() => navigate("/")} />
      <Button onClick={() => navigate("/login")}>
        로그인
        <UserOutlined />
      </Button>
    </Header>
  );
};

const LogoImg = styled.img`
  width: 10%;
  cursor: pointer;
`;

export default MainHeader;
