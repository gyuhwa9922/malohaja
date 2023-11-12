import { List } from "antd";
import React from "react";

const Comment = ({ comment }) => {
  console.log(comment);
  return (
    <List
      header={`${comment.length}개의 댓글`}
      itemLayout="horizontal"
      dataSource={comment}
      renderItem={(item) => (
        <li>
          <p> {item.comment}</p>
          {/* {item}
      <Comment
        author={item.User.nickname}
        avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
        content={item.content}
      /> */}
        </li>
      )}
    ></List>
  );
};

export default Comment;
