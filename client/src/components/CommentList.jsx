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
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.delComment = this.delComment.bind(this);
    this.edit = this.edit.bind(this);
  }

componentWillMount(){
  console.log('cityId from CommentList is:', this.props.cityId)
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

  getComments(){
    console.log('hitting getComments')
    fetch('./comments/${this.props.cityId}')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          commentList: data
        })
      })
      .catch((err) => console.log(err))
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

delComment(id){
      console.log('I am deleting from:', this.state.commentId)
      fetch(`/comments/${this.state.commentId}`, {
              method: 'DELETE'
        })
        .then(resp => {
          if (!resp.ok) throw new Error(resp.statusMessage);
          return resp.json();
        })
        .then(respBody => {
          this.setState({})
          this.setState({
            commentList: this.state.commentList.filter(comment => comment !== id)
          })
      })
}


  // this handleChange is also in commentForm, should it all be in city page when we are done?
  // handleChange() {
  //     this.setState({comment: e.target.value,
  //         city_id: this.state.city_id});
  //       }

    // handleDelete(id) {
    //   this.delComment(id)
    // }

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

  renderCommentList() {
    if (this.state.commentDataReceived) {
      return this.state.commentList.map((comment, i) => {
        console.log('inrendercommentList comment.id', comment.id)
        console.log('inrendercommentList comment', comment.comment)
        return (
          <div key={i}>
            <h2>{comment.comment}</h2>
            <Comment
              commentId={comment.id}
              comment={comment.comment}
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
