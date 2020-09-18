import React from "react";
import { Link } from "react-router-dom";

const Question = (props) => {
    return (
        <>
            <div className="d-item-ques">{props.data.q_body}</div>
            <div className="d-ques-owner">Asked by {props.data.writer_name}</div>
            <div className="d-ques-answers">
                <Link to={`#`}>
                    <i className="fa fa-angle-double-right" aria-hidden="true"></i>
          Answers
        </Link>
            </div>
        </>
    );
};

export default Question;