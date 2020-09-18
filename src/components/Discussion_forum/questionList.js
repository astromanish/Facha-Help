import React, { useState, useEffect } from "react";
import axios from "axios";
import Question from "./question";

const Discussion = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "/questions",
    })
      .then((res) => {
        setQuestions(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  console.log(questions);
  const quesArray = questions.map((data) => {
    return <Question key={data._id} data={data} />;
  });
  return quesArray;
};

export default Discussion;
