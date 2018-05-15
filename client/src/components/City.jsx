import React, { Component } from 'react';
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
      latitude: '',
      longitude: '',
    }
    this.getComments = this.getComments.bind(this);
  }

componentDidMount(){
  fetch(`/cities/${this.props.match.params.id}`)
  .then((res) => res.json())
  .then((data) => {
    console.log('image', data.results[0].images[2].sizes.medium.url)
    this.setState({
      cityData: data,
      cityDataReceived: true,
      city: data.city_name,
      id: data.id,
      name: data.results[0].name,
      snippet: data.results[0].snippet,
      latitude: data.results[0].coordinates.latitude,
      longitude: data.results[0].coordinates.longitude,
      image: data.results[0].images[3].sizes.original.url,
      city_db_image: data.img_url
      // image: data.results[0].images[2].sizes.medium.url,
    })
  })
  .catch((err) =>
    console.log(err))
}

getComments(){
  fetch(`/comments/${this.state.id}`)
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        commentList: data,
        commentId: data.id
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

      return(
          <div>
            <Nav />
            <div className="notification is-info">
              <h1 className = "title is-1">{this.state.name}</h1>
              <hr className="hrsmall" />
              <h2 className="title is-3">{this.state.snippet}</h2>
              <hr className="hrsmall" />
              <h3>Latitude: {this.state.latitude}</h3>
              <h3>Longitude: {this.state.longitude}</h3>
              <img src={this.state.image}/>
              <CommentList
                cityId={this.props.match.params.id}
                onDelete={this.handleDelete}
                onEdit={this.handleEdit}
                getComment={this.getComments}
              />
              <CommentForm
              getComment={this.getComments}
              cityId={this.props.match.params.id}
              handleClick={this.handleClick}
              />
              <Footer />
            </div>
          </div>
      )
  }
}

export default City;
