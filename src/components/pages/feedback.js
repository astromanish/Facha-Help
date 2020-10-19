import React from 'react';
import {Link} from 'react-router-dom';
import {Form,Button,Row,Col} from 'react-bootstrap';

import '../css/feedback.css';



const Feedback = () => {

    return(
        <div className="body-container">
                <Form className="feedback-form">
                    <div className="feedback-inputs">
                        <Form.Group as={Row} controlId="formPlaintextName">
                            <Form.Label column sm="2">
                                Name
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Enter your name" required={true}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='formPlaintextName' >
                            <Form.Label column sm="2">
                                Feedback
                                </Form.Label>
                            <Col sm="10">
                                <Form.Control as="textarea" rows="3" required={true}/>
                            </Col>
                        </Form.Group>
                    </div>
                    <div className="feedback-buttons">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                    <div className="bug">
                        <div>Any Bug/Feature Request? <Link> Report it</Link></div>
                    </div>
                </Form>
        </div>
    );
};

export default Feedback