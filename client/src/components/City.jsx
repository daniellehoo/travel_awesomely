import React, { Component } from 'react';
import Nav from '../partials/Nav';
import Footer from '../partials/Footer';
import Commentform from './Commentform';

class City extends Component {
  constructor(props){
    super(props);
    this.state = {
      city: '',
      id: ''
    };
  }

  handleClick() {
    console.log('this is props', this.props)
  }

  render(){
      return(
          <div>
          <Nav />
          <div className="city">
            <h1>{this.props.city}</h1>
          </div>
          <Footer />
          </div>
      )
  }
}

export default City;
