import React, { Component } from 'react';
// import Comment from './Comment';

class CommentList extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      commentData: '',
      commentList: [],
      commentDataReceived: false,
    }
  }

componentWillMount(){
  console.log('cityId from CommentList is:', this.props.cityId)
  fetch(`/comments/${this.props.cityId}`)
  .then((res) => res.json())
  .then((data) => {
    console.log('***data from CommentList componentWillMount', data)
    this.setState({
      id: data.cityId,
      commentData: data,
      commentList: data,
      commentDataReceived: true,
    })
  })
  .catch((err) =>
    console.log(err))
}

  handleClick() {
    console.log('this is props', this.props)
  }

  renderCommentList() {
    if (this.state.commentDataReceived) {
      return this.state.commentList.map((comment, i) => {
        return (
          <div key={i}>
            <h2>{comment.comment}</h2>
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
