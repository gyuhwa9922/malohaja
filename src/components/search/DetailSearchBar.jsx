import React from "react";
// import { Content } from "antd/es/layout/layout";
import { Button, Col, Form, Input, Row, Select, Space } from "antd";
import { useDispatch } from "react-redux";

const DetailSearchBar = () => {
  const { dispatch } = useDispatch();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Form
      name="advanced_search"
      style={{ padding: "24px", backgroundColor: "white" }}
      onFinish={onFinish}
    >
      <Row gutter={24}>
        <Col span={8}>
          <Form.Item name={"search_keyword"}>
            <Input placeholder="검색어" />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item
            name={"skill"}
            rules={[
              {
                type: "array",
              },
            ]}
          >
            <Select mode="multiple" placeholder="언어">
              <Select.Option value="red">Red</Select.Option>
              <Select.Option value="green">Green</Select.Option>
              <Select.Option value="blue">Blue</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item
            name={"sort"}
            rules={[
              {
                required: true,
                message: "Select something!",
              },
            ]}
          >
            <Select placeholder="검색 종류">
              <Select.Option value="like">추천순</Select.Option>
              <Select.Option value="latest">최신순</Select.Option>
              <Select.Option value="answer">답변순</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={4}>
          <Space size="small">
            <Button type="primary" htmlType="submit">
              검색
            </Button>
          </Space>
        </Col>
        <Col span={4}>
          <Space size="small">
            <Button type="primary" htmlType="submit">
              글작성
            </Button>
          </Space>
        </Col>
      </Row>
    </Form>
  );
};

export default DetailSearchBar;
