import React, { useEffect } from "react";
import {
  BookOutlined,
  LikeOutlined,
  MessageOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { Avatar, List, Space, Card, Popover, Button, Row } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import Answer from "../../answer/Answer";
const Question = () => {
  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  const data = Array.from({
    length: 3,
  }).map((_, i) => ({
    href: "question/:questionId",
    title: `question ${i}`,
    avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
    description: "아~~~ 엄청난 고수가 되고 싶다. 고수되는 법 알려주셈 ㅋㅋ",
    content: "있겠니? ㅋㅋㅋㅋ 시간 투자해 ㅋㅋㅋ",
    likeCount: 20,
    commentCount: 2,
    question:
      "알려주세요~~~~~~~~~~~~~~~~~~~~~~~~~~~알려주세요~~~~~~~~~~~~~~~~~~~~~~~~~~~알려주세요~~~~~~~~~~~~~~~~~~~~~~~~~~~알려주세요~~~~~~~~~~~~~~~~~~~~~~~~~~~",
    answer: {
      title: "질문에 대한 답변~",
      content: "솰라 솰라~ 음~ 굿굿 ",
    },
  }));
  useEffect(() => {});
  return (
    <Row justify={"center"}>
      <List
        grid={{ gutter: "16", column: "1" }}
        itemLayout="vertical"
        size="large"
        dataSource={data}
        style={{ backgroundColor: "white", justifyContent: "center" }}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <Button type="text">
                <IconText
                  icon={LikeOutlined}
                  text={item.likeCount}
                  key="like"
                />
              </Button>,
              <Button type="text">
                <IconText
                  icon={MessageOutlined}
                  text={item.commentCount}
                  key="comment"
                />
              </Button>,
              <Button type="text">
                <IconText icon={BookOutlined} key="bookmark" />
              </Button>,
              <Popover
                key={"more"}
                content={
                  <ButtonGroup>
                    <Button>수정</Button>
                    <Button danger>삭제</Button>
                  </ButtonGroup>
                }
              >
                <IconText icon={MoreOutlined} key="delete" />,
              </Popover>,
            ]}
            extra={
              // 여기에는 answer component 들어가고
              // <Card
              //   // hoverable
              //   title={item.answer.title}
              //   style={{ margin: "30px" }}
              //   actions={[
              //     <LikeOutlined key="answerLike" />,
              //     <MessageOutlined key={"answerComment"} />,
              //   ]}
              // >
              //   {item.answer.content}
              // </Card>
              <Answer answer={item.answer} />
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
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
