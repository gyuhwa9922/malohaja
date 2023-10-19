import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../../src/css/font.css";
import { Layout } from "antd";
import LoginHeader from "../components/header/LoginHeader";
import { Content } from "antd/es/layout/layout";

const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  backgroundColor: "white",
};

const Login = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <LoginHeader />

      <Content style={contentStyle}>
        <img
          src="/image/malohajalogo.png"
          alt="main"
          onClick={() => navigate("/")}
        />
        <br />
        <IntroText>말로 자신감이 붙다</IntroText>
      </Content>
    </Layout>
  );
};

const IntroText = styled.span`
  font-family: "NPSfontBold";
  font-size: xx-large;
  margin-bottom: "20px";
`;

export default Login;
