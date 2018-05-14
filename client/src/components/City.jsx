import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Nav from '../partials/Nav';
import Footer from '../partials/Footer';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

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
    this.getComments = this.getComments.bind(this);
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

getComments(){
  console.log('hitting getComments')
  console.log('thispropscityid', this.state.id)
  fetch(`./comments/${this.state.id}`)
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        commentList: data
      })
    })
    .catch((err) => console.log(err))
}


    handleClick(e) {
      e.preventDefault();
      console.log('hitting cityHandleClick')
      this.setState({
        cityId: this.state.id,
      })
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
              onDelete={this.handleDelete}
              onEdit={this.handleEdit}
            />
            <CommentForm
            getComment={this.getComments}
            cityId={this.props.match.params.id}
            handleClick={this.handleClick}
            />
            {/* <Link to={{
              pathname: `/commentform`,
              state: {
                getComments: this.getComments,
                cityId: this.state.id
              }
            }} onClick={(e)=>this.props.handleClick(e)}>Add New Comment</Link> */}
            <Footer />
          </div>
      )
  }
}


export default City;
