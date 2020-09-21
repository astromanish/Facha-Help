import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Question from "./question";

import { QuestionContext } from "./QuestionContext";

const QuestionList = () => {
  const [quesNo, setQuesNo] = useContext(QuestionContext);
  const [questionsList, setQuestionsList] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8000/questions",
    })
      .then((res) => {
        setQuestionsList(res.data);
      })
      .catch((err) => console.error(err));
  }, [quesNo]);
  return (
    <>
      {questionsList
        .slice(0)
        .reverse()
        .map((ques) => {
          return (
            <>
              <>
                <div className="d-item d-ques" key={ques._id}>
                  <Question ques={ques} />
                </div>
              </>
            </>
          );
        })}
    </>
  );
};

export default QuestionList;
