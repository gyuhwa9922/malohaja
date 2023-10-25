import React from "react";
import MainHeader from "../components/header/MainHeader";
import { Col, Layout, Row } from "antd";
import DetailSearchBar from "../components/search/DetailSearchBar";

const Main = () => {
  return (
    <Layout>
      <MainHeader />
      <DetailSearchBar />
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {/* <DetailSearchBar /> */}
        </Col>
      </Row>
    </Layout>
  );
};

export default Main;
