import React, { useState, useRef, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

import { AnswerContext } from "./AnswerContext";

const AddAnswer = (props) => {
  const [ansNo, setAnsNo] = useContext(AnswerContext);
  const question = props.question;
  const [answer, setAnswer] = useState("");
  const [writer, setWriter] = useState("");
  const ansRef = useRef();
  const writerRef = useRef();

  const submitFun = (e) => {
    e.preventDefault();
    ansRef.current.value = "";
    writerRef.current.value = "";
    axios({
      method: "post",
      url: `http://localhost:8000/answers/${question._id}`,
      params: {
        ques_id: question._id,
      },
      data: {
        a_body: answer,
        writer_name: writer,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setAnsNo(ansNo + 1);
        setAnswer("");
        setWriter("");
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="d-item-ask-model">
        <Form onSubmit={submitFun}>
          <Form.Group>
            <Form.Control
              ref={ansRef}
              value={answer}
              type="text"
              placeholder="Enter your answer to this question..."
              onChange={(e) => setAnswer(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              ref={writerRef}
              value={writer}
              type="text"
              placeholder="Enter your first name.."
              onChange={(e) => setWriter(e.target.value)}
            />
          </Form.Group>
          <div className="d-item-form-button">
            <Button variant="primary" type="submit" size="sm">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddAnswer;
