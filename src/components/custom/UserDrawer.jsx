import React, { useState } from "react";
import { BookOutlined, EditOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
const UserDrawer = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button onClick={showDrawer}>
        <UserOutlined />
      </Button>
      <Drawer placement="right" onClose={onClose} size="default" open={open}>
        <p>
          <UserOutlined />
          내정보
        </p>
        <p>
          <EditOutlined />
          글작성
        </p>
        <p>
          <BookOutlined />
          나의 북마크
        </p>
        <p>
          <BookOutlined />
          로그아웃
        </p>
      </Drawer>
    </>
  );
};

export default UserDrawer;
