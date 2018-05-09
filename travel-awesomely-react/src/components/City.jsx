import React, { Component } from 'react';
import Nav from '../partials/Nav';
import Footer from '../partials/Footer';
import Commentform from './Commentform';
class City extends Component {
    render(){
        return(
            <div>
            <Nav />
            {/* <h1>Milan</h1> */}
            {/* render city snippet */}
            <Commentform />
             <Footer />
            </div>
           
        )
    }
}

export default City;