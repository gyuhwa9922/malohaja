import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../../css/font.css";
import { Button, Layout } from "antd";
import LoginHeader from "../../components/header/LoginHeader";
import { Content } from "antd/es/layout/layout";
import { GITHUB_AUTH_URL, KAKAO_AUTH_URL } from "../../shared/OAuth";

const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  backgroundColor: "white",
};

const Login = () => {
  const navigate = useNavigate();
  const goToKakao = () => {
    window.location.href = KAKAO_AUTH_URL;
  };
  const goToGithub = () => {
    window.location.href = GITHUB_AUTH_URL;
  };

  return (
    <Layout>
      <LoginHeader />
      <Content style={contentStyle}>
        <LogoBtn
          src="/image/malohajalogo.png"
          alt="main"
          onClick={() => navigate("/")}
        />
        <br />
        <IntroText>말로 자신감이 붙다</IntroText>
        <br />

        <Button
          style={{ backgroundColor: "yellow", margin: "5px" }}
          onClick={goToKakao}
        >
          카카오 간편 로그인
        </Button>
        <br />
        <Button
          style={{ backgroundColor: "black", color: "white" }}
          onClick={goToGithub}
        >
          깃허브 간편 로그인
        </Button>
      </Content>
    </Layout>
  );
};

const LogoBtn = styled.img`
  cursor: pointer;
`;

const IntroText = styled.span`
  font-family: "NPSfontBold";
  font-size: xx-large;
  margin-bottom: "40px";
`;

export default Login;
