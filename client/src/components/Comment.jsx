import React, { Component } from 'react';

class Comment extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      cityData: '',
      snippet: [],
    }
    this.delComment = this.delComment.bind(this);
  }


delComment(e){
  console.log('delcomment', this.props.commentId)
  fetch(`/comments/${this.props.commentId}`, {
    method: 'DELETE'
  })
  .then(() => {this.props.getComments})
  // e.preventDefault();
}

  render(){
    return(
        <div>
        <form>
            <span>
              <button onClick={() => this.props.edit(this.props.commentId)}>Edit</button>
              <br />
              <button onClick={() => this.delComment(this.props.commentId)}>Delete</button>
              <br />
            </span>
            <input type="text" value={this.props.comment} onChange={this.props.handleChange} />
            <br/>
            <input type="submit" value="update" />
        </form>
        </div>
    )
}
}

export default Comment;
