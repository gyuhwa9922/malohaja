import React from "react";
import { Header } from "antd/es/layout/layout";
import styled from "styled-components";
import { Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const MainHeader = () => {
  const navigate = useNavigate();
  const { me } = useSelector((state) => state.user);
  console.log("me", me);
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
      {!me ? (
        <Button onClick={() => navigate("/login")}>
          로그인
          <UserOutlined />
        </Button>
      ) : (
        <UserOutlined />
      )}
    </Header>
  );
};

const LogoImg = styled.img`
  width: 10%;
  cursor: pointer;
`;

export default MainHeader;
