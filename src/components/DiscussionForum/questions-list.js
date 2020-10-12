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
        console.log(res);
        setQuestionsList(res.data);
      })
      .catch((err) => console.error(err));
  }, [quesNo]);
  return (
    <>
      {questionsList.length ? (
        questionsList
          .slice(0)
          .reverse()
          .map((ques) => {
            return (
              <>
                <>
                  <div className="d-item">
                    <Question ques={ques} />
                  </div>
                </>
              </>
            );
          })
      ) : (
          <div className="d-item no-question">
            <p>Be first one to ask question here</p>
          </div>
        )}
    </>
  );
};

export default QuestionList;
