import React, { Component } from 'react';

class CommentForm extends Component {

    constructor(props){
        super(props)
        this.state = {comment: '',
                      city_id: 0};

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.getComments = this.getComments.bind(this)
    }

    getComments(){
        console.log('I am returning all the commments')
    }

    handleChange(event, id) {
        this.setState({comment: event.target.value,
                        city_id: id});
      }

    handleSubmit(e, id){
       console.log('A comment was added:' + this.state.comment)
       console.log(id)
    fetch(`/cities/${id}`, {
        method: 'POST' 
      })
      .then(() => {this.getComments()})
        e.preventDefault();
       }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <label>
            Comment
            <br/>
            <input type="text" value={this.state.comment} onChange={this.handleChange} />
            </label>
            <br/>
            <input type="submit" value="submit" />
            </form>
        )
    }
}

export default CommentForm;

