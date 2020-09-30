import React, { useState, useContext } from "react";
import { Button, Dropdown } from "react-bootstrap";
import axios from "axios";

import { AnswerContext } from "./AnswerContext";

const Answer = (props) => {
  const [ansNo, setAnsNo] = useContext(AnswerContext);
  console.log(ansNo);
  const question = props.question;
  const [isEditing, setIsEditing] = useState(false);
  const [editAns, setEditAns] = useState("");

  const editHandler = () => {
    setIsEditing(true);
  };

  const cnfrEditHandler = (ans) => {
    axios({
      method: "patch",
      url: `http://localhost:8000/answers/${question._id}/${ans._id}`,
      data: {
        a_body: editAns,
      },
      params: {
        ques_id: question._id,
      },
    })
      .then((res) => {
        setIsEditing(false);
        setAnsNo(ansNo - 1);
      })
      .catch((err) => console.error(err));
  };

  const deleteHandler = (ans) => {
    console.log();
    axios({
      method: "delete",
      url: `http://localhost:8000/answers/${question._id}/${ans._id}`,
      params: {
        ques_id: question._id,
      },
    })
      .then(() => {
        setAnsNo(ansNo - 1);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="d-answers-each" key={props.ans._id}>
        <div className="d-ans-stats">
          <div><i className="fa fa-caret-up" aria-hidden="true"></i></div>
          <p>35</p>
        </div>
        <div className="d-answer-body">
          <div className="d-answer-body-answer">
            {isEditing ? (
              <>
                <textarea
                  rows="7"
                  cols="40"
                  defaultValue={props.ans.a_body}
                  onChange={(e) => setEditAns(e.target.value)}
                ></textarea>
                <Button onClick={() => cnfrEditHandler(props.ans)}>
                  Confirm Edit
                  </Button>
              </>
            ) : (
                props.ans.a_body
              )}
          </div>
        </div>
          <div className="d-answer-username d-ques-answers"> 
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => editHandler(props.ques)}>
                  <i className="fa fa-pencil" aria-hidden="true"></i> Edit
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => deleteHandler(props.ques)}>
                  <i className="fa fa-trash" aria-hidden="true"></i> Delete
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="d-ques-vote">
            <div className="d-ques-vote-icons">
              <div className="d-ques-vote-up">
                <button><i className="fa fa-chevron-up" aria-hidden="true"></i></button>
              </div>
              <div className="d-ques-vote-down">
                <button><i className="fa fa-chevron-down" aria-hidden="true"></i></button>
              </div>
            </div>
            <div className="d-ques-owner">
              <span>Answered By {props.ans.writer_name}</span>
            </div>
          </div>
      </div>
    </>
  );
};

export default Answer;
