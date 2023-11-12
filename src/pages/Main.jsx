import React, { useEffect } from "react";
import MainHeader from "../components/header/MainHeader";
import { Col, Layout, Row, Avatar, List, Space, Card } from "antd";
import DetailSearchBar from "../components/search/DetailSearchBar";
import { useDispatch, useSelector } from "react-redux";
import Question from "../components/post/question/Question";
import { LOAD_QUESTION_REQUEST } from "../reducers/postAction";

const Main = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  // useEffect(() => {
  //   // dispatch({
  //   //   type: LOAD_QUESTION_REQUEST,
  //   // });
  // });
  return (
    <Layout>
      <MainHeader me={me} />
      {/* 지금 디테일바 mount 문제 */}
      <DetailSearchBar me={me} />
      <Question me={me} />
    </Layout>
  );
};

export default Main;
