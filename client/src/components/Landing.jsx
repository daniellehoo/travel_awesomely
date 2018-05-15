import React, { Component } from 'react';
// import Nav from '../partials/Nav';
import Footer from '../partials/Footer';
import {Link} from 'react-router-dom';

class Landing extends Component {

    // setting state for comment.jsx - testing - move to city page when built out ============
    constructor(props){
        super(props)
        this.state = {comments: [],
                      id: 42} //set comment.id declare comment with id? from where...city element?
    }

    componentWillMount(){
        //get all quotes with city_id
    }

    // ========================================================

    render(){
        return(

          <div className="landing">
              <h1 className="logo">Travel Awesomely</h1>
              <h3 className = "title is-3"> an intuitive travel app for the modern traveler</h3>
              <br />
              <button className="button is-primary"><Link to='/login'>Log In</Link></button>
              <br />
              <br />
              <button className="button is-primary"><Link to='/createaccount'>Create an account</Link></button>
              <br/>
              <Footer />
          </div>
            )
    }
}
export default Landing;
