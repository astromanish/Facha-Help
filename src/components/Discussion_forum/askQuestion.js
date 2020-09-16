import React from "react";
import QuestionModel from "./questionModel";

const AskQuestion = () => {
  return (
    <div className="d-item d-item-ask-model">
      <div className="d-ask-head">Ask a Question and start a new topic!!</div>
      <div className="d-ask-model">
        <QuestionModel />
      </div>
    </div>
  );
};

export default AskQuestion;
