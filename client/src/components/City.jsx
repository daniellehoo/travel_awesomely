import React, { Component } from 'react';
import {Link} from 'react-router-dom';
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
            <Link to={{
              pathname: `/commentform`,
              state: {}
            }} onClick={()=>this.props.handleClick()}>Add New Comment</Link>
            <Footer />
          </div>
      )
  }
}


export default City;
