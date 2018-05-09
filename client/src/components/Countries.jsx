import React, { Component } from 'react';
import Nav from '../partials/Nav';
import Footer from '../partials/Footer';

class Countries extends Component {
    render(){
        return(
            <div className="landing">
                <h1>Countries</h1>
            <Nav />
                <h1>Countries</h1>
                <h3>Hi David, choose a country</h3>
                {/* map through countries and render */}
                {/* link to country page */}
            <Footer />
            </div>
        )
    }
}

export default Countries;
