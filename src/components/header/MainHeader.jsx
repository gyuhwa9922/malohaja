import React from "react";
import { Header } from "antd/es/layout/layout";
import styled from "styled-components";
import { Avatar, Button, Col, Row } from "antd";
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
        // display: "flex",
        backgroundColor: "white",
      }}
    >
      <Row gutter={8} justify={"space-between"}>
        <Col xs={2}>
          <Avatar
            src="/image/malohajalogo.png"
            onClick={() => navigate("/")}
            size={64}
            shape="square"
            style={{ cursor: "pointer" }}
          >
            {/* <LogoImg
              src="/image/malohajalogo.png"
              onClick={() => navigate("/")}
            /> */}
          </Avatar>
        </Col>
        <Col xs={2}>
          {!me ? (
            <Button onClick={() => navigate("/login")}>
              로그인
              <UserOutlined />
            </Button>
          ) : (
            <UserOutlined />
          )}
        </Col>
      </Row>
    </Header>
  );
};

const LogoImg = styled.img`
  width: 50%;
  object-fit: cover;
  cursor: pointer;
`;

export default MainHeader;
