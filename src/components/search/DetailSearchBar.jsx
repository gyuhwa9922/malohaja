import React from "react";
// import { Content } from "antd/es/layout/layout";
import { Button, Col, Form, Input, Row, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { KEY_WORD_SEARCH_REQUEST } from "../../reducers/post";
import { EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const DetailSearchBar = () => {
  const { form } = Form.useForm();
  const { me } = useSelector((state) => state.user);
  const { skill } = useSelector((state) => state.post);
  const { dispatch } = useDispatch();
  const nav = useNavigate();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    dispatch({
      type: KEY_WORD_SEARCH_REQUEST,
      data: values,
    });
  };
  return (
    <Form
      form={form}
      name="detailSearchBar"
      style={{
        padding: "24px",
        backgroundColor: "white",
      }}
      onFinish={onFinish}
    >
      <Row gutter={3} justify={"end"}>
        <Col xs={6}>
          <Form.Item name={"search_keyword"}>
            <Input placeholder="검색어" />
          </Form.Item>
        </Col>
        <Col xs={6}>
          <Form.Item
            name={"skill"}
            rules={[
              {
                type: "array",
              },
            ]}
          >
            <Select mode="multiple" options={skill} placeholder="언어" />
          </Form.Item>
        </Col>
        <Col xs={4}>
          <Form.Item
            name={"sort"}
            rules={[
              {
                message: "Select something!",
              },
            ]}
            initialValue={"최신순"}
          >
            <Select placeholder="검색 종류">
              <Select.Option value="like">추천순</Select.Option>
              <Select.Option value="latest">최신순</Select.Option>
              <Select.Option value="answer">답변순</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col xs={2}>
          <Button htmlType="submit">검색</Button>
        </Col>
        <Col xs={6}>
          {!me ? (
            <Button icon={<EditOutlined />} onClick={() => nav("/write")}>
              글작성
            </Button>
          ) : null}
        </Col>
      </Row>
    </Form>
  );
};

export default DetailSearchBar;
