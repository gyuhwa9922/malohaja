import React, { useState } from "react";
import { Header } from "antd/es/layout/layout";
import styled from "styled-components";
import { Avatar, Button, Col, Drawer, Row } from "antd";
import { BookOutlined, EditOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import UserDrawer from "../custom/UserDrawer";

const MainHeader = () => {
  const navigate = useNavigate();
  const { me } = useSelector((state) => state.user);
  // const [open, setOpen] = useState(false);
  // const showDrawer = () => {
  //   setOpen(true);
  // };
  // const onClose = () => {
  //   setOpen(false);
  // };
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
          <Link to="/">
            <Avatar
              src="/image/malohajalogo.png"
              // onClick={() => navigate("/")}
              size={64}
              shape="square"
              style={{ cursor: "pointer" }}
            />
          </Link>
          {/* <LogoImg
              src="/image/malohajalogo.png"
              onClick={() => navigate("/")}
            /> */}
        </Col>
        <Col xs={2}>
          {!me ? (
            <Button onClick={() => navigate("/login")}>
              로그인
              <UserOutlined />
            </Button>
          ) : (
            <UserDrawer />
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
