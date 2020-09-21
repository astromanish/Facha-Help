import React from "react";
import AddAnswer from "./addAnswer";
import AnswerList from "./answersList";

const AnswerAll = (props) => {
  return (
    <>
      <AddAnswer question={props.location.state} />
      <AnswerList question={props.location.state} />
    </>
  );
};

export default AnswerAll;
