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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.delComment = this.delComment.bind(this);
    this.edit = this.edit.bind(this);
  }

componentWillMount(){
  fetch(`/comments/${this.props.cityId}`)
  .then((res) => res.json())
  .then((data) => {
    console.log('***data from CommentList componentWillMount', data)
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

  handleClick() {
    console.log('this is props', this.props)
  }

  // delComment(id){
  //     console.log('I am deleting from:', this.state.id)
  //     fetch(`/comments/${this.state.commentId}`, {
  //             method: 'DELETE'
  //       })
  //       .then(() => console.log(this.state.data))
  //       .then(() => this.getComments());
  // }


  // this handleChange is also in commentForm, should it all be in city page when we are done?
  // handleChange() {
  //     this.setState({comment: e.target.value,
  //         city_id: this.state.city_id});
  //       }


    edit(e){
      e.preventDefault();
      fetch(`./comments/${this.state.commentId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
         body: JSON.stringify({
           'comment': this.state.comment,
           'value': e.target.value
         })
       })
      .then(() => this.setState({
        value: e.target.value
      }))
      .then(() => this.getComments());
    }


    handleSubmit() {

    }
    
    delComment(e){
      console.log('I am deleting from:', this.props.commentId)
      fetch(`/comments/${this.props.commentId}`, {
        method: 'DELETE'
      })
      .then(() => {this.props.getComments})
      // e.preventDefault();
    }

  renderCommentList() {
    if (this.state.commentDataReceived) {
      return this.state.commentList.map((comment, i) => {
        return (
          <div key={i}>
            <h2>{comment.comment}</h2>
            <Comment
              cityId={this.state.id}
              commentId={comment.id}
              comment={this.state.comment}
              edit={this.edit}
              handleDelete={this.delComment}
            />
        </div>)
      });
    }
  }


  render(){
    console.log('commentData', this.state.commentData)
      return(
          <div className="commentList">
            <h2>Comment List</h2>
            {this.renderCommentList()}
          </div>
      )
  }
}


export default CommentList;
