import React, { useState } from "react";
import { Header } from "antd/es/layout/layout";
import { Avatar, Button, Col, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

import UserDrawer from "../custom/UserDrawer";

const MainHeader = ({ me }) => {
  const navigate = useNavigate();

  // const [open, setOpen] = useState(false);
  // const showDrawer = () => {
  //   setOpen(true);
  // };
  // const onClose = () => {
  //   setOpen(false);
  // };
  return (
    <Header
      style={{
        backgroundColor: "white",
      }}
    >
      <Row gutter={8} justify={"space-between"}>
        <Col xs={2}>
          <Link to="/">
            <Avatar
              src="/image/malohajalogo.png"
              size={64}
              shape="square"
              style={{ cursor: "pointer" }}
            />
          </Link>
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

export default MainHeader;
