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
    this.getComments = this.getComments.bind(this);
  }

  getComments(){
    console.log('hitting getComments')
    fetch(`/comments/${this.props.commentId}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          commentList: data,
          commentId: this.props.commentId
        })
        console.log('hitting this')
      })
      .catch((err) => console.log(err))
  }

delComment(e){
  console.log('delcomment', this.props.commentId)
  fetch(`/comments/${this.props.commentId}`, {
    method: 'DELETE'
  })
  .then(() => this.setState({
    fakeData: this.state.commentList
  }))
  .then(() => this.getComments()
  )}

edit(e){
  // e.preventDefault();
  console.log('edit is firing')
  console.log('this.state', this.state)
  console.log('this.props.commentId', this.props.commentId)
  fetch(`/comments/${this.props.commentId}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
     body: JSON.stringify({
       'id': this.props.commentId,
       'comment': this.state.comment,
       'city_id': this.props.cityId,
     })
   })
  .then(() => this.setState({
    value: e
  }))
  .then(() => this.getComments()
)}

  handleChange(e) {
    console.log('hitting handleChange')
    console.log('e.target.value', e.target.value)
    this.setState({
      'id': this.props.commentId,
      'comment': e.target.value,
      'city_id': this.props.cityId,
    })
  }

  render(){
    return(
        <div>
          <form onSubmit={(e) => this.delComment(this.props.commentId)}>
              <br />
              {/* <button onClick={(e) => this.delComment(this.props.commentId)}>Delete</button> */}
              <input type="submit" value="delete" />
              <br />
            </form>

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
