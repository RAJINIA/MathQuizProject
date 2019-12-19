import React from 'react';

function Progress(props){
    return(
        <div>
            <h1>Question {props.current} of {props.total}</h1>
        </div>
    )
}

export default Progress;