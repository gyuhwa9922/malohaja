import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button, Card, Col, Form, Image, Input, List, Row, Select } from "antd";
import MainHeader from "../components/header/MainHeader";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AudioOutlined, UploadOutlined } from "@ant-design/icons";
import { skillInfo } from "../constants/skillinfo";

import Swal from "sweetalert2";
import WriteHeader from "../components/header/WriteHeader";
import Recording from "../components/post/record/Recording";

const Write = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [recordUrl, setrecordUrl] = useState();
  const [imageList, setImageList] = useState([]);
  const [previewImg, setPreviewImg] = useState([]);
  const imageInput = useRef();
  const ImageUpload = (e) => {
    imageInput.current.click();
  };

  const handleImg = (e) => {
    console.log(e.target.files[0]);
    let reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      setImageList([...imageList, e.target.files[0]]);
    }

    reader.onloadend = () => {
      const previewImgUrl = reader.result;
      if (previewImgUrl) {
        setPreviewImg([...previewImg, previewImgUrl]);
      }
    };
  };
  const filterImage = (i) => {
    const imgArr = imageList.filter((v, index) => index !== i);
    const imgNameArr = previewImg.filter((v, index) => index !== i);
    setImageList([...imgArr]);
    setPreviewImg([...imgNameArr]);
  };
  // console.log(imageList, previewImg, recordUrl);

  // useEffect(() => {
  //   // if (!me) {
  //   //   nav("/");
  //   // }
  // },[]);
  const onFinish = useCallback((values) => {
    values["record"] = recordUrl;
    // const form = new FormData();
    // imageList.forEach((p) => {
    //   form.append("image", p); //image의 path 즉 경로를 append함.
    // });
    // form.append("value", values);

    // if (me) {
    //   // dispatch({
    //   //   type : WRITE_POST_REQUEST
    //   //   data : values
    //   // })
    // } else {
    //   // nav("/");
    // }
    console.log("Received values of form: ", values);
  }, []);

  return (
    <>
      <WriteHeader />
      <Form
        name="WriteContent"
        encType="multipart/form-data"
        onFinish={onFinish}
        style={{
          marginTop: "10%",
        }}
      >
        <Row gutter={24} justify={"center"}>
          <Col span={4} xs={2} md={6}></Col>
          <Col span={24} xs={20} md={12}>
            {/* <Form.Item
              name={"skill"}
              rules={[
                {
                  type: "array",
                },
              ]}
            >
              <Select mode="multiple" options={skillInfo} placeholder="언어" />
            </Form.Item> */}
            <Recording recordUrl={recordUrl} setrecordUrl={setrecordUrl} />
            <Form.Item name={"content"} label="질문작성">
              <Input.TextArea />
            </Form.Item>
            <Col span={24}>
              <Button icon={<UploadOutlined />} onClick={ImageUpload}>
                <input
                  name="image"
                  type={"file"}
                  multiple
                  accept="image/gif, image/jpeg, image/png"
                  style={{ display: "none" }}
                  ref={imageInput}
                  onChange={(e) => handleImg(e)}
                />
                사진 업로드
              </Button>
            </Col>
            <br />

            <Card title="사진">
              {imageList.map((v, i) => (
                <Card.Grid key={i}>
                  <Image
                    preview={false}
                    key={v.lastModified}
                    src={previewImg[i]}
                    alt={v}
                  />
                  <Button key={i} onClick={() => filterImage(i)}>
                    {`${i}`}이미지 삭제
                  </Button>
                </Card.Grid>
              ))}
            </Card>

            <Button htmlType="submit">작성하기</Button>
          </Col>
          <Col span={4} xs={2} md={6}></Col>
        </Row>
      </Form>
    </>
  );
};

export default Write;
