import React, { Component } from 'react';
import Nav from '../partials/Nav';
import Footer from '../partials/Footer';
import {Link} from 'react-router-dom';

class Landing extends Component {
    render(){
        return(

            <div className="landing">
                <h1 className="logo">Travel Awesomely</h1>
                <h3> an intuitive travel app for the modern traveler</h3>
                <br />
                <br />
                <button className="button"><Link to='/login'>Log In</Link></button>
                <br />
                <br />
                <button className="button"><Link to='/createaccount'>Create an account</Link></button>
                <Footer />
                </div>
            )
    }
}
export default Landing;
