import React, { Component } from 'react';
import Nav from '../partials/Nav';
import Footer from '../partials/Footer';
// import Commentform from './Commentform';

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
    // render(){
    //     return(
    //         <div>
    //         <Nav />
    //         {/* <h1>Milan</h1> */}
    //         {/* render city snippet */}
    //         {/* <Commentform /> */}
    //          <Footer />
    //         </div>

componentDidMount(){
  console.log('hitting componentDidMount')
  fetch(`/cities/${this.props.match.params.id}`)
  .then((res) => res.json())
  .then((data) => {
    console.log('data from city componentWillMount', data)
    console.log('danielle wants this', data.results[0].snippet)
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

  handleClick() {
    console.log('this is props', this.props)
  }

  render(){
    console.log('statecity', this.props.city)
    console.log('statesnippet', this.props.snippet)
      return(
          <div className="city">
            <h1>{this.state.name}</h1>
            <h2>{this.state.snippet}</h2>
          </div>
      )
  }
}


export default City;
