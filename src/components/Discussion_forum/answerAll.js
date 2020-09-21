import React from "react";
import AddAnswer from "./addAnswer";
import AnswerList from './answersList';

const AnswerAll = (props) => {
  return (
    <>
    <div className="d-container">
        <AddAnswer question={props.location.state} />
        <AnswerList question={props.location.state} />
    </div>
    </>
  );
};

export default AnswerAll;
