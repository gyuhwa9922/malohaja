// import React, { useEffect } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const DetailQuestion = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch({
    //   type: DETAIL_QUESTION_REQUEST,
    //    id : id,
    // })
  });
  return <div>hi {id}</div>;
};

export default DetailQuestion;
