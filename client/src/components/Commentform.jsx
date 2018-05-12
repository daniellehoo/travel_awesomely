import React, { Component } from 'react';

class CommentForm extends Component {

    constructor(props){
        super(props)
        this.state = {comment: '',
                      city_id: props.city_id};

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.getComments = this.getComments.bind(this)
    }

    getComments(){
        //return all the comments
        console.log('I am returning all the commments')
        //still need to build out the fetch for all the comments
    }

    handleChange(e) {
        this.setState({comment: e.target.value,
                        city_id: 3});
      }

    handleSubmit(e, city_id){
    fetch(`/cities/${this.state.city_id}`, {
            method: 'POST' ,
            headers: ({"content-type": "application/json"}),
            body: JSON.stringify({
                "comment": this.state.comment,
                "city_id": this.state.city_id
            })
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

