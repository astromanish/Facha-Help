import axios from "axios";
import React, { useState, useRef,useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import QuestionList from './questionsList';

const AskQuestion = () => {
  const [question, setQuestion] = useState("");
  const [questionsList, setQuestionsList] = useState([]);
  const [name, setName] = useState("");
  const [quePost, setQuePost] = useState(0);
  const quesRef = useRef();
  const nameRef = useRef();
  
  useEffect(() => {
    axios({
      method: "get",
      url: "/questions",
    })
      .then((res) => {
        setQuestionsList(res.data);
      })
      .catch((err) => console.error(err));
  }, [quePost]);

  const submitFun = (e) => {
    console.log(e);
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
        setQuePost(quePost+1);
      })
      .catch((err) => console.error(err));
  };

  return (
    <><>
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
            <Button variant="primary" type="submit" size="sm">Ask</Button>
      </div>
      
    </Form>
    </div>
    { 
        questionsList.length > 0 && <QuestionList data={questionsList} />
    }
    </></>
  );
};

export default AskQuestion;
