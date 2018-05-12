import React from 'react';
import Comment from './Comment';
import Landing from './Landing';


export default function CommentList(props){
    // if(!props.quotes){
    //     return <p>Nothing to see here</p>
    // }
    const allComments = props.comment.map((comment, i) => {
        return (
        <Comment key={i} {...comment} handleClick={()=> props.handleClick(comment.id)}/>
        );
    })
    return(
        <div>
        {allComments}
        </div>
    );
}