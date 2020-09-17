import axios from "axios";
import React, { useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import QuestionModel from "./questionModel";

const AskQuestion = () => {
  const [question, setQuestion] = useState("");
  const [name, setName] = useState("");
  const quesRef = useRef();
  const nameRef = useRef();

  const submitFun = (e) => {
    e.preventDefault();
    quesRef.current.value = "";
    nameRef.current.value = "";

    axios({
      method: "post",
      url: "/questions",
      data: {
        q_body: question,
        writer_name: name,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  };

  return (
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
      <Button variant="outline-primary" type="submit">
        Ask
      </Button>
    </Form>
  );
};

export default AskQuestion;
