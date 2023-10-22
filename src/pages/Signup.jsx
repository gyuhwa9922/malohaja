import React, { useCallback, useState } from "react";

import { Button, Col, Form, Input, Row, Select, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { CHECK_NICKNAME_REQUEST, SIGN_UP_REQUEST } from "../reducers/user";
import { useNavigate } from "react-router-dom";
// const contentStyle = {
//   textAlign: "center",
//   minHeight: 120,
//   backgroundColor: "white",
// };

const Signup = () => {
  const { accesstoken } = useSelector((state) => state.user);
  const [nickname, setninkname] = useState("");
  const onChangeNickname = useCallback((e) => {
    setninkname(e.target.value);
  }, []);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { Option } = Select;
  const layout = {
    labelCol: {
      span: 6,
    },
  };
  // console.log(nickname);
  const nicknameCheck = () => {
    dispatch({
      type: CHECK_NICKNAME_REQUEST,
      data: nickname,
    });
  };
  const onFinish = (values) => {
    if (!accesstoken) {
      return nav("/");
    }
    console.log("전채 결과값 ", values);
    return dispatch({
      type: SIGN_UP_REQUEST,
      data: {
        header: `Bearer ${accesstoken}`,
        values: values,
      },
    });
  };

  return (
    <Row gutter={8}>
      <Col xs={2} md={6}></Col>
      <Col xs={20} md={12}>
        <Form
          name="회원가입"
          {...layout}
          onFinish={onFinish}
          style={{
            marginTop: "25%",
            // maxWidth: 600,
          }}
        >
          <Form.Item
            label="닉네임"
            name="nickname"
            rules={[
              {
                required: true,
                message: "닉네임을 입력해주세요!",
              },
            ]}
          >
            <Space direction="horizontal">
              <Input value={nickname} onChange={onChangeNickname} />
              <Button onClick={nicknameCheck} required>
                닉네임 체크
              </Button>
            </Space>
          </Form.Item>
          <Form.Item name="intro" label="자기소개">
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name="careerType"
            label="경력"
            hasFeedback
            rules={[
              {
                required: true,
                message: "경력을 선택하시지 않았습니다!",
              },
            ]}
          >
            <Select placeholder="당신의 경력을 골라주세요!">
              <Option value="beginer">BEGINNER</Option>
              <Option value="junior">JUNIOR</Option>
              <Option value="middle">MIDDLE</Option>
              <Option value="senior">SENIOR</Option>
              <Option value="lead">LEAD</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="jobType"
            label="직종"
            hasFeedback
            rules={[
              {
                required: true,
                message: "직종을 선택하시지 않았습니다!",
              },
            ]}
          >
            <Select placeholder="당신의 직종을 골라주세요!">
              <Option value="FRONTEND">FRONTEND</Option>
              <Option value="BACKEND">BACKEND</Option>
              <Option value="IOS">IOS</Option>
              <Option value="ANDROID">ANDROID</Option>
              <Option value="DESIGNER">DESIGNER</Option>
              <Option value="PLANNER">PLANNER</Option>
              <Option value="GAME_CLIENT">GAME_CLIENT</Option>
              <Option value="GAME_SERVER">GAME_SERVER</Option>
              <Option value="ETC">ETC</Option>
            </Select>
          </Form.Item>
          {/* <Form.Item
        name="careerType"
        label="경력"
        rules={[
          {
            required: true,
            message: '회원님의 경력을 골라주세요!',
            type: 'array',
          },
        ]}
      >
        <Select mode="multiple" placeholder="Please select favourite colors">
          <Option value="red">Red</Option>
          <Option value="green">Green</Option>
          <Option value="blue">Blue</Option>
        </Select>
      </Form.Item> */}

          <Form.Item
            wrapperCol={{
              span: 12,
              offset: 6,
            }}
          >
            <Space>
              <Button htmlType="submit">가입하기</Button>
            </Space>
          </Form.Item>
        </Form>
      </Col>
      <Col xs={2} md={6}></Col>
    </Row>
  );
};
export default Signup;
