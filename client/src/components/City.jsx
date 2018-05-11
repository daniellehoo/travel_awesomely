import React, { Component } from 'react';
import Nav from '../partials/Nav';
import Footer from '../partials/Footer';
// import Commentform from './Commentform';

class City extends Component {
  constructor(props){
    super(props);
    this.state = {
      city: '',
      id: ''
    };
  }
<<<<<<< Updated upstream
=======
    // render(){
    //     return(
    //         <div>
    //         <Nav />
    //         {/* <h1>Milan</h1> */}
    //         {/* render city snippet */}
    //         {/* <Commentform /> */}
    //          <Footer />
    //         </div>
>>>>>>> Stashed changes

  handleClick() {
    console.log('this is props', this.props)
  }

  render(){
    console.log('this is the props', this.props)
      return(
          <div className="city">
          </div>
      )
  }
}


export default City;
