import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      commentData: '',
      commentList: [],
      commentDataReceived: false,
      commentId: 0,
      comment: '',
    }
    // this.edit = this.edit.bind(this);
  }

componentWillMount(){
  fetch(`/comments/${this.props.cityId}`)
  .then((res) => res.json())
  .then((data) => {
    this.setState({
      id: data.cityId,
      commentList: data,
      commentDataReceived: true,
      comment: data.comment,
      commentId: data.id
    })
  })
  .catch((err) =>
    console.log(err))
}

  // handleClick() {
  //   console.log('this is props', this.props)
  // }

    // edit(e){
    //   e.preventDefault();
    //   fetch(`./comments/${this.state.commentId}`, {
    //     method: 'PUT',
    //     headers: {'Content-Type': 'application/json'},
    //      body: JSON.stringify({
    //        'comment': this.state.comment,
    //        'value': e.target.value
    //      })
    //    })
    //   .then(() => this.setState({
    //     value: e.target.value
    //   }))
    //   .then(() => this.getComments());
    // }

  renderCommentList() {
    if (this.state.commentDataReceived) {
      return this.state.commentList.map((comment, i) => {
        console.log('comment', comment)
        return (
          <div key={i}>
            <h2>{comment.comment}</h2>
            <h1>THIS IS A COMMENT</h1>
            <Comment
              cityId={this.props.cityId}
              commentId={comment.id}
              comment={comment.comment}
              edit={this.edit}
            />
        </div>)
      });
    }
  }

  render(){
      return(
          <div className="commentList">
            <h2>Comment List</h2>
            {this.renderCommentList()}
          </div>
      )
  }
}

export default CommentList;
