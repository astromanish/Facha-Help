import React, { createContext, useState } from "react";

export const AnswerContext = createContext();

export const AnswerProvider = (props) => {
  const [ansNo, setAnsNo] = useState(141);
  return (
    <AnswerContext.Provider value={[ansNo, setAnsNo]}>
      {props.children}
    </AnswerContext.Provider>
  );
};
