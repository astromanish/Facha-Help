import React,{useEffect} from 'react';

const Answers = (props) => {
    useEffect(() => {
        console.log(props);
    },[])

    return(
        <>
        <div className="d-answers-all d-item">
                {
                    props.answers.slice(0).reverse().map(data => {
                        return (
                            <><>
                                <div className="d-answers-each" key={data._id}>
                                    <div className='d-answer-username'>
                                        <span><i className="fa fa-paw" aria-hidden="true"></i></span>
                                        <span> By {data.writer_name}</span>
                                    </div>
                                    <div className="d-answer-body">
                                        <div className='d-answer-body-answer'>
                                            {data.a_body}
                                        </div>
                                        <div className="d-answer-body-time">
                                            4 hours ago
                                        </div>
                                    </div>
                                </div>
                            </></>
                        )
                    })
                }
        </div>
        </>
    )
}

export default Answers