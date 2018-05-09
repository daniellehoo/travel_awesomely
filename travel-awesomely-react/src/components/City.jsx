import React, { Component } from 'react';
import Nav from '../partials/Nav';
import Footer from '../partials/Footer';
<<<<<<< HEAD

class City extends Component {
    render(){
        return(
            
            <div className="">
            <Nav />
            
=======
import Commentform from './Commentform';
class City extends Component {
    render(){
        return(
            <div>
            <Nav />
            {/* <h1>Milan</h1> */}
            {/* render city snippet */}
            <Commentform />
>>>>>>> origin/react
             <Footer />
            </div>
           
        )
    }
}

export default City;