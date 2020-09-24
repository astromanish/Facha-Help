import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Dropdown } from "react-bootstrap";

import { QuestionContext } from "./QuestionContext";

const Question = (props) => {
  const [quesNo, setQuesNo] = useContext(QuestionContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editAns, setEditAns] = useState("");

  const editHandler = () => {
    setIsEditing(true);
  };

  const cnfrEditHandler = (ques) => {
    console.log(editAns);
    axios({
      method: "patch",
      url: `http://localhost:8000/questions/${ques._id}`,
      data: {
        q_body: editAns,
      },
    })
      .then(() => {
        setQuesNo(quesNo - 1);
        setIsEditing(false);
      })
      .catch((err) => console.error(err));
  };

  const deleteHandler = (ques) => {
    console.log();
    axios({
      method: "delete",
      url: `http://localhost:8000/questions/${ques._id}`,
    })
      .then((res) => {
        setQuesNo(quesNo - 1);
      })
      .catch((err) => console.error(err));
  };
  console.log(props.ques, "hey");
  return (
    <>
      <div className="d-item-ques">
        {isEditing ? (
          <>
            <textarea
              rows="7"
              cols="40"
              defaultValue={props.ques.q_body}
              onChange={(e) => setEditAns(e.target.value)}
            ></textarea>
            <Button onClick={() => cnfrEditHandler(props.ques)}>
              Confirm Edit
            </Button>
          </>
        ) : (
          props.ques.q_body
        )}
      </div>
      <div className="d-ques-owner">Asked by {props.ques.writer_name}</div>
      <div className="d-ques-answers">
        {props.ques && (
          <>
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                <i class="fa fa-sliders" aria-hidden="true"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => editHandler(props.ques)}>
                  <i class="fa fa-pencil" aria-hidden="true"></i> Edit
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => deleteHandler(props.ques)}>
                  <i class="fa fa-trash" aria-hidden="true"></i> Delete
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Link
              to={{
                pathname: `/discussion-forum/${props.ques._id}/answers`,
                state: props.ques,
              }}
            >
              <i className="fa fa-angle-double-right" aria-hidden="true"></i>
              Answers
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Question;
