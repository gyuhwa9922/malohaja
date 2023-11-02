import React, { useEffect } from "react";
import MainHeader from "../components/header/MainHeader";
import { Col, Layout, Row, Avatar, List, Space, Card } from "antd";
import DetailSearchBar from "../components/search/DetailSearchBar";
import { useDispatch, useSelector } from "react-redux";
import Question from "../components/question/Question";
import { LOAD_QUESTION_REQUEST } from "../reducers/post";

const Main = () => {
  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch({
    //   type: LOAD_QUESTION_REQUEST,
    // });
  });
  return (
    <Layout>
      <MainHeader />
      {/* 지금 디테일바 mount 문제 */}
      <DetailSearchBar />
      <Question />

      {/* {questions.map((i) => (
            <Question key={i.id} quetion={i} />
          ))} */}
    </Layout>
  );
};

export default Main;
