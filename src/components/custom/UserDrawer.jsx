import React, { useState } from "react";
import { BookOutlined, EditOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import IconText from "./IconText";
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
        <IconText icon={UserOutlined} text={"내정보"} />
        <br />
        <IconText icon={EditOutlined} text={"글작성"} />
        <br />
        <IconText icon={BookOutlined} text={"나의 북마크"} />
        <br />
        <IconText icon={BookOutlined} text={"로그아웃"} />
        <br />
      </Drawer>
    </>
  );
};

export default UserDrawer;
