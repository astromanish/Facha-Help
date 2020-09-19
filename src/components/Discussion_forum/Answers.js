import React from 'react';

const Answers = (props) => {
    const question = props.location.state; //Question is passed from Question component through Link

    return(
        <>
        <div className='d-container'>
                <div className="d-item d-item-ques">
                    <div>{question.q_body}</div>
                    <div>{question.writer_name}</div>
                </div>   
                <div className="d-answers d-item">
                    <div className='d-answer-username'>
                        By Manish
                    </div>
                    <div className="d-answer-time">
                        4 hours ago
                    </div>
                    <div className="d-answer-body">
                        Everything is fine, until u start thinking its not...
                    </div>
                </div> 
        </div>
        
        </>
    )
}

export default Answers