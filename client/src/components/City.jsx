import React, { Component } from 'react';
import Commentform from './Commentform';

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
  console.log('hitting componentDidMount')
  fetch(`/cities/${this.props.id}`)
  .then((res) => res.json())
  .then((data) => {
    console.log('data from city componentWillMount', data)
    console.log('danielle wants this', data.results[0].snippet)
    this.setState({
      cityData: data,
      cityDataReceived: true,
      city: data.name,
      id: data.id,
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
    console.log('statecity', this.state.city)
    console.log('statesnippet', this.state.snippet)
      return(
          <div className="city">
            <h1>this.state.city{this.props.city}</h1>
            <h2>this.state.snippet{this.props.snippet}</h2>
          </div>
      )
  }
}

export default City;
