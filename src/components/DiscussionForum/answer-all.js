import React from "react";
import AddAnswer from "./add-answer";
import AnswerList from "./answers-list";

const AnswerAll = (props) => {
  return (
    <>
      <div className="d-container">
        <AnswerList question={props.location.state} />
      </div>
    </>
  );
};

export default AnswerAll;
