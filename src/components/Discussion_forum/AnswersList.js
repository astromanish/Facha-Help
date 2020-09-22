import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Answer from "./answer";

import { AnswerContext } from "./AnswerContext";

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
      {answersList.length ? (
        answersList
          .slice(0)
          .reverse()
          .map((ans) => {
            return (
              <div className="d-item d-answers-all">
                <Answer ans={ans} question={question}></Answer>{" "}
              </div>
            );
          })
      ) : (
        <div className="d-item no-answer">
          <p>Be first one to add answer to this question</p>
        </div>
      )}
    </>
  );
};

export default AnswerList;
