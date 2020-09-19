import React, { useState, useRef, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from 'axios';
import Answers from './AnswersList';

const AddAnswer = (props) => {
    const question = props.location.state;
    const [ansPost,setansPost] = useState(0);
    const [answer,setAnswer] = useState('');
    const [writer,setWriter] = useState('');
    const ansRef = useRef();
    const writerRef = useRef();
    const [answersList,setAnsList] = useState([]);

    useEffect(() => {
        if(question._id){
            axios({
                method: "get",
                url: `/answers/${question._id}`,
            })
                .then((res) => {
                    setAnsList(res.data);
                })
                .catch((err) => console.error(err));
        }
        
    }, [ansPost,question._id]);

    const submitFun = (e) => {
        console.log(e);
        e.preventDefault();
        ansRef.current.value = "";
        writerRef.current.value = "";
        axios({
            method: "post",
            url: `/answers/${question._id}`,
            params: {
                ques_id: question._id
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
                setAnswer('');
                setWriter('')
            })
            .catch((err) => console.error(err));      
    };


    return(
        <>
        <div className="d-container">
                <div className="d-item d-item-ques-head">
                    <div className="d-item-ques-head-username">Question by <span>{question.writer_name}</span></div>
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
                            <Button variant="primary" type="submit" size="sm">Submit</Button>
                        </div>
                    </Form>
                </div>
                
                {
                    answersList.length > 0 && <Answers answers={answersList} />
                }
        </div>
            
        </>
    )
}

export default AddAnswer