import Axios from "axios";
import React, { useState,useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import Question from './question';

const AskQuestion = () => {
  const [question, setQuestion] = useState("");
  const [questionList, setQuestionList] = useState([]);
  const [name, setName] = useState("");
  const [quePost, setQuePost] = useState(0);

  const quesFun = (e) => {
    setQuestion(e.target.value);
  };

  const nameFun = (e) => {
    setName(e.target.value);
  };
  useEffect(() => {
    Axios({
      method: "get",
      url: "/questions",
    })
      .then((res) => {
        setQuestionList(res.data);
      })
      .catch((err) => console.error(err));
  }, [quePost]);

  const submitFun = (e) => {
    console.log(e);
    e.preventDefault();
    Axios({
      method: "post",
      url: "/questions",
      data: {
        q_body: question,
        writer_name: name,
      },
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
      .then((res) => {
        setQuePost(quePost+1);
      })
      .catch((err) => console.error(err));
    console.log(question, name);
  };

  return (
    <><>
    <div className="d-item d-item-ask-model">
    <Form onSubmit={submitFun}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Enter question you wanna ask.."
          onChange={quesFun}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Enter your first name.."
          onChange={nameFun}
        />
      </Form.Group>
      <Button variant="outline-primary" type="submit">
        Ask
      </Button>
    </Form>
    </div>
    {
      questionList.slice(0).reverse().map(data => {
        return(
          <><>
          <div className="d-item d-ques" key={data._id}>
            <Question data={data} />
          </div>
          </></>
        )
      })
    }
    </></>
  );
};

export default AskQuestion;
