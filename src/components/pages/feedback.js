import React from 'react';
import {Link} from 'react-router-dom';
import {Form,Button,Row,Col} from 'react-bootstrap';

import '../css/feedback.css';



const Feedback = () => {

    return(
        <div className="feedback-container">
            <div className="feedback">
                <Form className="feedback-form">
                    <div className="feedback-inputs">
                        <Form.Group as={Row} controlId="formPlaintextName">
                            <Form.Label column sm="2">
                                Name
                                </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Your name.." required={true}/>
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
                        <div>Any Bug? <Link> Report it</Link></div>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Feedback