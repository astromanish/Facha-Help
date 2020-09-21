import React from "react";
import "./css/discussionForum.css";
import AskQuestion from "./Discussion_Forum/askQuestion";
import QuestionList from "./Discussion_Forum/questionsList";

const DiscussionForum = () => {
  return (
    <div className="d-container">
      <AskQuestion />
      <QuestionList />
    </div>
  );
};

export default DiscussionForum;
