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
    <div className="d-answers-all d-item">
      {answersList.map((ans) => {
        return <Answer ans={ans} question={question}></Answer>;
      })}
    </div>
  );
};

export default AnswerList;
