import React, { Component } from 'react';

class CommentForm extends Component {
<<<<<<< HEAD
=======
    constructor(props){
        super(props)
        this.state = {
            name: '',
            comment: '',
            city_id: 0,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(id){
        fetch(`/cities/${id}`, {
         method: 'POST', 
       })
     console.log('here is the input:', this.state.name)
     debugger;
 }
       

    handleChange(event) {
        this.setState({name: event.target.value,
                       comment: event.target.value,
                    });
      }

     
>>>>>>> comment form structured
    render(){
        return(

    <div className="landing">
<<<<<<< HEAD
        <h1>Comment Form</h1>
            <form>
            <textarea type="text" name="comments" cols="40" rows="7"  class="comments"/>
            <br/>
            <input class="delete-button" type="submit" value="Add Comment" />
=======
            <form onSubmit={this.handleSubmit}>
            <label>
            Name
            <br/>
            <input type="text" value={this.state.name} onChange={this.handleChange} name="name" />
            </label>
            <br/>
            <label>
            Comment
            <br/>
            <textarea type="text" name="comment" cols="40" rows="7"  className="comments" value={this.state.comment} onChange={this.handleChange} name="comments"/>
            </label>
            <br/>
            <input className="" type="submit" value="Add Comment"/>
>>>>>>> comment form structured
        </form>
    </div>
        )
    }
}

export default CommentForm;
