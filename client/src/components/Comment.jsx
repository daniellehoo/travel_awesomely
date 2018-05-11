import React from 'react';
import Landing from './Landing';

function Comment(props){
    return(
        <div>
        <p>
        {/* {props.comment} */}
        I will hold some comments
        </p>
        <button onClick={props.delComment}>Delete</button>
        </div>
    )
}

export default Comment;