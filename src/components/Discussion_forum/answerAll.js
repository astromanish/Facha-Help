import React from "react";
import AddAnswer from "./AddAnswer";
import AnswerList from "./AnswersList";

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
