import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Answer from "./answer";

import { AnswerContext } from "./AnswerContext";
import Question from './question';
import AddAnswer from './add-answer';

const AnswerList = (props) => {
  const [ansNo, setAnsNo] = useContext(AnswerContext);
  const question = props.question;
  const [answersList, setAnsList] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:8000/answers/${question._id}`,
      params: {
        ques_id: question._id,
      },
    })
      .then((res) => {
        console.log(res.data, question._id);
        setAnsList(res.data);
      })
      .catch((err) => console.error(err));
  }, [ansNo]);

  return (
    <>
    <div className="d-item">
        <Question ques={question} />
        {answersList.length ? (
          <div className="d-answers-section">
            {
            answersList
              .slice(0)
              .reverse()
              .map((ans) => {
                return (
                  <>
                    <Answer ans={ans} question={question}></Answer>{" "}
                  </>
                );
              })
            }
          </div>
      ) : (
        <div className="no-answer">
          <p>Be first one to add answer to this question</p>
        </div>
      )}
        <AddAnswer question={question} />
      </div>
    </>
  );
};

export default AnswerList;
