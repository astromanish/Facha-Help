import React from 'react';
import './Discuss.css';
import QuestionModel from './QuestionModel';
import {Link}from 'react-router-dom';

const Discussion = () => {
    return(
        <div className="d-container">
            <div className="d-item d-item-ask-model">
                <div className="d-ask-head">
                    Ask a Question and start a new topic!!
                </div>
                <div className="d-ask-model">
                    <QuestionModel />
                </div>
            </div>
            <div className="d-item d-ques">
                <div className="d-item-ques">
                    <div className="d-item-ques-heading">Ques 1 heading</div>
                    <div className="d-item-ques-subheading"><i className="fa fa-chevron-right" aria-hidden="true"></i> <span>SubHeading</span></div>
                </div>
                <div className="d-ques-owner">
                    Asked by Manish 
                </div>
                <div className="d-ques-answers">
                    <Link><i className="fa fa-angle-double-right" aria-hidden="true"></i>Answers</Link>
                </div>
            </div>
            <div className="d-item d-ques">
                <div className="d-item-ques">
                    <div className="d-item-ques-heading">Ques 1 heading</div>
                    <div className="d-item-ques-subheading"><i className="fa fa-chevron-right" aria-hidden="true"></i> <span>SubHeading</span></div>
                </div>
                <div className="d-ques-owner">
                    Asked by Manish
                </div>
                <div className="d-ques-answers">
                    <Link><i className="fa fa-angle-double-right" aria-hidden="true"></i>Answers</Link>
                </div>
            </div>
            <div className="d-item d-ques">
                <div className="d-item-ques">
                    <div className="d-item-ques-heading">Ques 1 heading</div>
                    <div className="d-item-ques-subheading"><i className="fa fa-chevron-right" aria-hidden="true"></i> <span>SubHeading</span></div>
                </div>
                <div className="d-ques-owner">
                    Asked by Manish
                </div>
                <div className="d-ques-answers">
                    <Link><i className="fa fa-angle-double-right" aria-hidden="true"></i>Answers</Link>
                </div>
            </div>
            <div className="d-item d-ques">
                <div className="d-item-ques">
                    <div className="d-item-ques-heading">Ques 1 heading</div>
                    <div className="d-item-ques-subheading"><i className="fa fa-chevron-right" aria-hidden="true"></i> <span>SubHeading</span></div>
                </div>
                <div className="d-ques-owner">
                    Asked by Manish
                </div>
                <div className="d-ques-answers">
                    <Link><i className="fa fa-angle-double-right" aria-hidden="true"></i>Answers</Link>
                </div>
            </div>
        </div>
    )
}

export default Discussion