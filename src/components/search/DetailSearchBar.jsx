import React, { useCallback, useEffect, useState } from "react";
import { Button, Col, Form, Input, Row, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { EditOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { skillInfo } from "../../constants/skillinfo";
import { KEY_WORD_SEARCH_REQUEST } from "../../reducers/postAction";

const DetailSearchBar = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { me } = useSelector((state) => state.user);
  const [skill, setskill] = useState([]);
  const { keywordSearchLoading } = useSelector((state) => state.post);
  const { form } = Form.useForm();
  const onFinish = useCallback(
    (values) => {
      values["skill"] = skill;
      console.log("Received values of form: ", values);
      return dispatch({
        type: KEY_WORD_SEARCH_REQUEST,
        data: values,
      });
    },
    [skill]
  );

  // console.log(form.skill);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setskill(value);
  };
  useEffect(() => {}, [skill]);
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
          {/* 여기 지금 문제 */}
          {/* <Form.Item
            name={"skill"}
            rules={[
              {
                type: "array",
              },
            ]}
          >
            <Select
              mode="multiple"
              onChange={handleChange}
              options={skillInfo}
              placeholder="언어"
            />
          </Form.Item> */}
        </Col>
        <Col xs={4}>
          <Form.Item
            name={"sort"}
            // rules={[
            //   {
            //     message: "Select something!",
            //   },
            // ]}
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
          <Button htmlType="submit" loading={keywordSearchLoading}>
            검색
          </Button>
        </Col>
        <Col xs={6}>
          {!me ? (
            <Button
              icon={<EditOutlined />}
              onClick={() => {
                nav("/write");
              }}
            >
              글작성
            </Button>
          ) : (
            <></>
          )}
        </Col>
      </Row>
    </Form>
  );
};

export default DetailSearchBar;
