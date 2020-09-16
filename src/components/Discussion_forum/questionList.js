import React from "react";
import { Link } from "react-router-dom";

const Discussion = () => {
  return (
    <>
      <div className="d-item d-ques">
        <div className="d-item-ques">
          <div className="d-item-ques-heading">Ques 1 heading</div>
          <div className="d-item-ques-subheading">
            <i className="fa fa-chevron-right" aria-hidden="true"></i>{" "}
            <span>SubHeading</span>
          </div>
        </div>
        <div className="d-ques-owner">Asked by Manish</div>
        <div className="d-ques-answers">
          <Link>
            <i className="fa fa-angle-double-right" aria-hidden="true"></i>
            Answers
          </Link>
        </div>
      </div>
      <div className="d-item d-ques">
        <div className="d-item-ques">
          <div className="d-item-ques-heading">Ques 1 heading</div>
          <div className="d-item-ques-subheading">
            <i className="fa fa-chevron-right" aria-hidden="true"></i>{" "}
            <span>SubHeading</span>
          </div>
        </div>
        <div className="d-ques-owner">Asked by Manish</div>
        <div className="d-ques-answers">
          <Link>
            <i className="fa fa-angle-double-right" aria-hidden="true"></i>
            Answers
          </Link>
        </div>
      </div>
      <div className="d-item d-ques">
        <div className="d-item-ques">
          <div className="d-item-ques-heading">Ques 1 heading</div>
          <div className="d-item-ques-subheading">
            <i className="fa fa-chevron-right" aria-hidden="true"></i>{" "}
            <span>SubHeading</span>
          </div>
        </div>
        <div className="d-ques-owner">Asked by Manish</div>
        <div className="d-ques-answers">
          <Link>
            <i className="fa fa-angle-double-right" aria-hidden="true"></i>
            Answers
          </Link>
        </div>
      </div>
      <div className="d-item d-ques">
        <div className="d-item-ques">
          <div className="d-item-ques-heading">Ques 1 heading</div>
          <div className="d-item-ques-subheading">
            <i className="fa fa-chevron-right" aria-hidden="true"></i>{" "}
            <span>SubHeading</span>
          </div>
        </div>
        <div className="d-ques-owner">Asked by Manish</div>
        <div className="d-ques-answers">
          <Link>
            <i className="fa fa-angle-double-right" aria-hidden="true"></i>
            Answers
          </Link>
        </div>
      </div>
    </>
  );
};

export default Discussion;
