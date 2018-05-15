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

// getComments(){
//   fetch(`/comments/${this.state.id}`)
//     .then((res) => res.json())
//     .then((data) => {
//       this.setState({
//         commentList: data,
//         commentId: data.id
//       })
//     })
//     .catch((err) => console.log(err))
// }

  renderCommentList() {
    if (this.state.commentDataReceived) {
      return this.state.commentList.map((comment, i) => {
        console.log('comment', comment)
        return (
          <div key={i}>
            <h2>{comment.comment}</h2>
            <Comment
              cityId={this.props.cityId}
              commentId={comment.id}
              comment={comment.comment}
              edit={this.edit}
              getComments={this.getComments}
            />
        </div>)
      });
    }
  }

  render(){
      return(
          <div className="commentList">
            <h2 className="title">User Comments</h2>
            {this.renderCommentList()}
          </div>
      )
  }
}

export default CommentList;
