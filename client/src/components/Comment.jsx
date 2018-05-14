import React, { Component } from 'react';

class Comment extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      cityData: '',
      snippet: [],
      comment: '',
    }
    this.delComment = this.delComment.bind(this);
    this.edit = this.edit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

delComment(e){
  console.log('delcomment', this.props.commentId)
  fetch(`/comments/${this.props.commentId}`, {
    method: 'DELETE'
  })
  .then(() => {this.props.getComments})
  // e.preventDefault();
}

edit(e){
  // e.persist();
  e.preventDefault();
  console.log('edit is firing')
  console.log('this.state', this.state)
  console.log('this.props.commentId', this.props.commentId)
  fetch(`/comments/${this.props.commentId}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
     body: JSON.stringify({
       'id': this.props.commentId,
       'comment': this.props.comment,
       'city_id': this.props.cityId,
     })
   })
  .then(() => this.setState({
    value: e
  }))
  .then(() => {this.props.getComments}
)}

  handleChange(e) {
    console.log('hitting handleChange')
    this.setState({
      'id': this.props.commentId,
      'comment': e.target.value,
      'city_id': this.props.cityId,
    })
  }

  render(){
    return(
        <div>
            <span>
              {/* <button onClick={() => this.edit(this.props.commentId)}>Edit</button> */}
              <br />
              <button onClick={() => this.delComment(this.props.commentId)}>Delete</button>
              <br />
            </span>

            <form onSubmit={(e) => this.edit(e)}>
              <input type="text" value = {this.state.comment} placeholder={this.props.comment} onChange={(e) => this.handleChange(e)} />
              <br/>
              <input type="submit" value="update" />
            </form>
        </div>
    )
}
}

export default Comment;
