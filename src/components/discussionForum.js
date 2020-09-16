import React from "react";
import AskQuestion from "./Discussion_forum/askQuestion";
import QuestionList from "./Discussion_forum/questionList";
import "./css/discussionForum.css";

const DiscussionForum = () => {
  return (
    <div className="d-container">
      <AskQuestion />
      <QuestionList />
    </div>
  );
};

export default DiscussionForum;
