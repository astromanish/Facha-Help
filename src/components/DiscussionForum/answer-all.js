import React from "react";
import AddAnswer from "./add-answer";
import AnswerList from "./answers-list";

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
