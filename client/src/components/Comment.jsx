import React from 'react';

function Comment(props){

    return(
        <div>
        <form>
            <p>Comment</p>
            <span>
                <button onClick={props.handleClick}>Delete</button>
            </span>
            <br />
            <br />
            <input type="text" value={props.comment} onChange={props.handleChange} />
            <br/>
            <input type="submit" value="update" />
        </form>
        </div>
    )
}

export default Comment;
