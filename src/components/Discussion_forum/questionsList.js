import React,{ useEffect } from 'react';
import Question from './question';

const QuestionList = (props) => {
    useEffect(() => {
        console.log(props);
    },[]);
    return(
        <>
        {
            props.data.slice(0).reverse().map(data => {
            return (
                <><>
                    <div className="d-item d-ques" key={data._id}>
                        <Question data={data} />
                    </div>
                </></>
                )
            })
        }
        </>
    )
    
}

export default QuestionList