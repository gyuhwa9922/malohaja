import React, { useEffect } from "react";
import MainHeader from "../components/header/MainHeader";
import { Col, Layout, Row } from "antd";
import DetailSearchBar from "../components/search/DetailSearchBar";
import { useDispatch, useSelector } from "react-redux";
import Question from "../components/question/Question";
import { LOAD_QUESTION_REQUEST } from "../reducers/post";

const Main = () => {
  const dispatch = useDispatch();
  const { questions } = useSelector((state) => state.post);
  // useEffect(() => {
  //   dispatch({
  //     type: LOAD_QUESTION_REQUEST,
  //   });
  // });
  return (
    <Layout>
      <MainHeader />
      <DetailSearchBar />
      <Row gutter={8}>
        <Col xs={6} md={6}>
          {/* {questions.map((i) => (
            <Question key={i.id} quetion={i} />
          ))} */}
        </Col>
      </Row>
    </Layout>
  );
};

export default Main;
