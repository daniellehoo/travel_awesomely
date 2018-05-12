import React from 'react';
import Landing from './Landing';

function Comment(props){
    return(
       
        <form onSubmit={props.handleClick}>
        <p>
        {props.comment}
        I will hold some comments
        </p>
        <input type="submit" value="delete"/>
        </form>
       
    )
}

export default Comment;