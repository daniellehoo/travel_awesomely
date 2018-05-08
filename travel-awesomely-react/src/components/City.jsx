import React, { Component } from 'react';
import Nav from '../partials/Nav';
import Footer from '../partials/Footer';

class City extends Component {
    render(){
        return(
            
            <div className="">
            <Nav />
            <h1>Milan</h1>
            {/* render city snippet */}
             <Footer />
            </div>
           
        )
    }
}

export default City;