import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Form, Image, Input, Row, Select } from "antd";
import MainHeader from "../components/header/MainHeader";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UploadOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";

const Write = () => {
  const { me } = useSelector((state) => state.user);
  const { skill } = useSelector((state) => state.post);
  const [ImageList, setImageList] = useState([]);
  const [previewImg, setPreviewImg] = useState([]);
  const imageInput = useRef();
  const dispatch = useDispatch();
  const nav = useNavigate();

  const ImageUpload = (e) => {
    imageInput.current.click();
  };
  const handleImg = (e) => {
    console.log(e.target.files[0]);
    let reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      setImageList([...ImageList, e.target.files[0]]);
    }

    reader.onloadend = () => {
      const previewImgUrl = reader.result;
      if (previewImgUrl) {
        setPreviewImg([...previewImg, previewImgUrl]);
      }
    };
  };
  console.log(ImageList, previewImg);

  // if (!me) {
  //   nav("/");
  // }

  const onFinish = (values) => {
    // dispatch({
    //   type :
    //   data :
    // })
    // nav("/");
    console.log("Received values of form: ", values);
  };
  useEffect(() => {}, [ImageList]);
  return (
    <>
      <MainHeader />
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
          <Col span={16} xs={20} md={12}>
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
            <Form.Item name={"content"} label="질문작성">
              <Input.TextArea />
            </Form.Item>
            <div>
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
              {ImageList.map((v, i) => (
                <>
                  <Image preview={false} key={i} src={previewImg[i]} alt={v} />

                  {/* <Button onClick={} >/<Button> */}
                </>
              ))}
            </div>
            <Button htmlType="submit">작성하기</Button>
          </Col>
          <Col span={4} xs={2} md={6}></Col>
        </Row>
      </Form>
    </>
  );
};

export default Write;
