import axios from "axios";
import React, { useState, useRef, useContext } from "react";
import { Form, Button } from "react-bootstrap";

import { QuestionContext } from "./QuestionContext";

const AskQuestion = () => {
  const [quesNo, setQuesNo] = useContext(QuestionContext);
  const [question, setQuestion] = useState("");
  const [name, setName] = useState("");
  const quesRef = useRef();
  const nameRef = useRef();

  const submitFun = (e) => {
    console.log(e);
    e.preventDefault();
    quesRef.current.value = "";
    nameRef.current.value = "";
    axios({
      method: "post",
      url: "http://localhost:8000/questions",
      data: {
        q_body: question,
        writer_name: name,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        setName("");
        setQuestion("");
        setQuesNo(quesNo + 1);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="d-item d-item-ask-model">
        <Form onSubmit={submitFun}>
          <Form.Group>
            <Form.Control
              ref={quesRef}
              value={question}
              type="text"
              placeholder="Enter question you wanna ask.."
              onChange={(e) => setQuestion(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              ref={nameRef}
              value={name}
              type="text"
              placeholder="Enter your first name.."
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <div className="d-item-form-button">
            <Button variant="primary" type="submit" size="sm">
              Ask
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AskQuestion;
