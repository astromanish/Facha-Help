import React, { useState, useRef, useEffect } from "react";
import { Form, Button, Dropdown } from "react-bootstrap";
import axios from "axios";
import Answers from "./AnswersList";

const AddAnswer = (props) => {
  const question = props.location.state;
  const [ansPost, setansPost] = useState(0);
  const [answer, setAnswer] = useState("");
  const [writer, setWriter] = useState("");
  const ansRef = useRef();
  const writerRef = useRef();
  const [answersList, setAnsList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [ca_body, setCA_Body] = useState("");

  useEffect(() => {
    if (question._id) {
      axios({
        method: "get",
        url: `http://localhost:8000/answers/${question._id}`,
      })
        .then((res) => {
          setAnsList(res.data);
        })
        .catch((err) => console.error(err));
    }
  }, [ansPost, question._id]);

  const submitFun = (e) => {
    console.log(e);
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
        console.log(res);
        setansPost(ansPost + 1);
        setAnswer("");
        setWriter("");
      })
      .catch((err) => console.error(err));
  };

  const editHandler = () => {
    setIsEditing(true);
  };

  const cnfrEditHandler = (data) => {
    console.log(ca_body);
    axios({
      method: "patch",
      url: `http://localhost:8000/answers/${question._id}/${data._id}`,
      data: {
        a_body: ca_body,
      },
    })
      .then((res) => {
        console.log(res);
        setIsEditing(false);
        setansPost(ansPost + 1);
      })
      .catch((err) => console.error(err));
  };

  const deleteHandler = (data) => {
    console.log();
    axios({
      method: "delete",
      url: `http://localhost:8000/answers/${question._id}/${data._id}`,
    })
      .then((res) => {
        console.log(res);
        setansPost(ansPost - 1);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="d-container">
        <div className="d-item d-item-ques-head">
          <div className="d-item-ques-head-username">
            Question by <span>{question.writer_name}</span>
          </div>
          <div className="d-item-ques-head-time">5 hours ago</div>
          <div className="d-item-ques-head-ques">{question.q_body}</div>
        </div>
        <div className="d-item d-item-ask-model">
          <Form onSubmit={submitFun}>
            <Form.Group>
              <Form.Control
                ref={ansRef}
                value={answer}
                type="text"
                placeholder="Submit your answer to the question..."
                onChange={(e) => setAnswer(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                ref={writerRef}
                value={writer}
                type="text"
                placeholder="Enter your name.."
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
        <div className="d-answers-all d-item">
          {answersList
            .slice(0)
            .reverse()
            .map((data) => {
              return (
                <>
                  <>
                    <div className="d-answers-each" key={data._id}>
                      <div className="d-answer-username">
                        <span>
                          <i className="fa fa-paw" aria-hidden="true"></i>
                        </span>
                        <span> By {data.writer_name}</span>
                      </div>
                      <div className="d-answer-body">
                        <div className="d-answer-body-answer">
                          {isEditing ? (
                            <>
                              <textarea
                                rows="7"
                                cols="40"
                                defaultValue={data.a_body}
                                onChange={(e) => setCA_Body(e.target.value)}
                              ></textarea>
                              <Button onClick={() => cnfrEditHandler(data)}>
                                Confirm Edit
                              </Button>
                            </>
                          ) : (
                            data.a_body
                          )}
                        </div>
                        <Dropdown>
                          <Dropdown.Toggle variant="light" id="dropdown-basic">
                            <i class="fa fa-sliders" aria-hidden="true"></i>
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item onClick={() => editHandler(data)}>
                              <i class="fa fa-pencil" aria-hidden="true"></i>{" "}
                              Edit
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={() => deleteHandler(data)}>
                              <i class="fa fa-trash" aria-hidden="true"></i>{" "}
                              Delete
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="d-answer-body-time">4 hours ago</div>
                      </div>
                    </div>
                  </>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default AddAnswer;
