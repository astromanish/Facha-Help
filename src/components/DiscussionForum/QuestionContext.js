import React, { createContext, useState } from "react";

export const QuestionContext = createContext();

export const QuestionProvider = (props) => {
  const [quesNo, setQuesNo] = useState(0);
  return (
    <QuestionContext.Provider value={[quesNo, setQuesNo]}>
      {props.children}
    </QuestionContext.Provider>
  );
};
