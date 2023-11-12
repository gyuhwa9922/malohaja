import React, { useCallback, useEffect, useState } from "react";
import {
  BookOutlined,
  LikeOutlined,
  MessageOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { Avatar, List, Space, Card, Popover, Button, Row, Modal } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import Answer from "../answer/Answer";
import { useDispatch, useSelector } from "react-redux";
import IconText from "../../custom/IconText";
import { Link } from "react-router-dom";
import Comment from "../comment/Comment";

const Question = () => {
  const dispatch = useDispatch();
  const { questions, answers } = useSelector((state) => state.post);
  // console.log(data);
  // console.log(questions[0].bestAnswer, answers);
  //해결해야함
  const [commentOpen, setCommentOpen] = useState(false);
  const CommentToggle = useCallback(() => {
    setCommentOpen((prev) => !prev);
  }, []);
  const updateQuestion = () => {
    dispatch({});
  };
  const removeQuestion = () => {
    dispatch({});
  };
  const likeOnQuestion = () => {
    dispatch({});
  };
  const likeOffQuestion = () => {
    dispatch({});
  };

  const QuestionBookmark = () => {
    dispatch({});
  };
  // useEffect(() => {}, [answers, questions]);
  console.log(questions);
  return (
    <Row justify={"center"}>
      <List
        key={questions.id}
        grid={{ gutter: "16", column: "1" }}
        itemLayout="vertical"
        size="large"
        dataSource={questions}
        style={{ backgroundColor: "white", justifyContent: "center" }}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <Button type="text" key={item.id} onClick={likeOnQuestion}>
                <IconText
                  icon={LikeOutlined}
                  text={item.likeCount}
                  key="like"
                />
              </Button>,
              <Button type="text" onClick={CommentToggle}>
                <IconText
                  icon={MessageOutlined}
                  text={item.commentCount}
                  key="comment"
                />
              </Button>,
              <Button type="text" onClick={QuestionBookmark}>
                <IconText icon={BookOutlined} key="bookmark" />
              </Button>,
              <Popover
                key={"more"}
                content={
                  <ButtonGroup>
                    <Button onClick={updateQuestion}>수정</Button>
                    <Button onClick={removeQuestion} danger>
                      삭제
                    </Button>
                  </ButtonGroup>
                }
              >
                <IconText icon={MoreOutlined} key="delete" />,
              </Popover>,
            ]}
            extra={[
              commentOpen && (
                <Comment key={item.id} comment={item.questionComment} />
              ),
              // 여기에는 answer component 들어가고
              <Answer key={item} answer={item.bestAnswer} />,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={
                <Link to={`question/${item.id}`}>{item.title}</Link>
                // <a href={item.href}>{item.title}</a>
              }
              description={item.description}
            />
            {item.question}
          </List.Item>
        )}
      />
    </Row>
  );
};

export default Question;
