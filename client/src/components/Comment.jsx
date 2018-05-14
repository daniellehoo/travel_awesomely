import React from 'react';

function Comment(props){

    return(
        <div>
        <form>
            <span>
              <h3>{props.comment}</h3>
              <button onClick={() => this.props.edit(this.props.commentId)}>Edit</button>
              <br />
              <button onClick={() => this.props.handleDelete(this.props.commentId)}>Delete</button>
              <br />
            </span>
            <input type="text" value={props.comment} onChange={props.handleChange} />
            <br/>
            <input type="submit" value="update" />
        </form>
        </div>
    )
}

export default Comment;
