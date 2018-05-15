import React, { Component } from 'react';

class CommentForm extends Component {

    constructor(props){
        super(props)
        this.state = {comment: '',
                      city_id: 0};

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({comment: e.target.value,
                        city_id: this.props.cityId});
      }

    handleSubmit(e, city_id){
      console.log('hitting handleSubmit')
    fetch(`/comments/${this.state.city_id}`, {
            method: 'POST',
            headers: ({"content-type": "application/json"}),
            body: JSON.stringify({
                "comment": this.state.comment,
                "city_id": this.state.city_id
            })
      })
      .then(() => {this.props.getComments()})
        // e.preventDefault();
       }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <label>
            Add New Comment
            <br/>
            <input className="input" type="text" value={this.state.comment} onChange={this.handleChange} />
            </label>
            <br/>
            <input className="tag is-success" type="submit" value="submit" />
            </form>
        )

    }
}
export default CommentForm;
