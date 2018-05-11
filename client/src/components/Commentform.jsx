import React, { Component } from 'react';

class CommentForm extends Component {

    constructor(props){
        super(props)
        this.state = {comment: '',
                      city_id: 3};

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.getComments = this.getComments.bind(this)
    }

    getComments(){
        //return all the comments
        console.log('I am returning all the commments')
    }

    handleChange(e) {
        this.setState({comment: e.target.value,
                        city_id: 3});
      }

    handleSubmit(e, city_id){
        // console.log(e.target.value)
    //    console.log('A comment was added:' + this.state.comment + 'to city id:' + this.state.city_id)
    //    console.log(city_id)
    console.log('this is', e)
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

