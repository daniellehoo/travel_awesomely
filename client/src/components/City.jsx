import React, { Component } from 'react';
import Nav from '../partials/Nav';
import Footer from '../partials/Footer';
import CommentList from './CommentList';

class City extends Component {
  constructor(props){
    super(props);
    this.state = {
      city: '',
      id: '',
      cityData: '',
      cityDataReceived: false,
      snippet: [],
    }
  }

componentDidMount(){
  fetch(`/cities/${this.props.match.params.id}`)
  .then((res) => res.json())
  .then((data) => {
    this.setState({
      cityData: data,
      cityDataReceived: true,
      city: data.city_name,
      id: data.id,
      name: data.results[0].name,
      snippet: data.results[0].snippet
    })
  })
  .catch((err) =>
    console.log(err))
}

delComment(e){
    console.log('I am deleting from:', this.state.id)
    fetch(`/comments/${this.state.id}`, {
            method: 'DELETE'
      })
      .then(() => {this.getComments()})
        e.preventDefault();
       }

// this handleChange is also in commentForm, should it all be in city page when we are done?
handleChange(e) {
    this.setState({comment: e.target.value,
        city_id: this.state.city_id});
      }

  handleClick() {
    console.log('this is props', this.props)
  }

  handleDelete() {

  }

  handleEdit() {

  }

  handleSubmit() {

  }

  render(){
    console.log('statecity', this.state.name)
    console.log('statesnippet', this.state.snippet)
      return(
          <div className="city">
            <Nav />
            <h1>{this.state.name}</h1>
            <h2>{this.state.snippet}</h2>
            {/* <Route
          render={() => (<CommentForm onSubmit={this.handleSubmit} />)}
          path='/new'
        /> */}
            <CommentList
              cityId={this.props.match.params.id}
              // comments={}
              onDelete={this.handleDelete}
              onEdit={this.handleEdit}
            />
            <Footer />
          </div>
      )
  }
}


export default City;
