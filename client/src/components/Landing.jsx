import React, { Component } from 'react';
// import Nav from '../partials/Nav';
import Footer from '../partials/Footer';
import {Link} from 'react-router-dom';
import CommentForm from './Commentform';
import Comment from './Comment';

class Landing extends Component {

    // setting state for comment - testing - move to city page when build out ============
    constructor(props){
        super(props)
        this.state = {comment: '',
                      city_id: 3};

        this.delComment = this.delComment.bind(this)
       
    }

    delComment(e){
        fetch(`/cities/${this.state.city_id}`, {
                method: 'POST' ,
                headers: ({"content-type": "application/json"}),
                body: JSON.stringify({
                    "comment": this.state.comment,
                    "city_id": this.state.city_id
                })
          })
          .then(() => {this.getComments()})
            e.preventDefault();
        console.log('I am going to delete you!')
           }

    // ========================================================

    render(){
        return(

            <div className="landing">
                <h1 className="logo">Travel Awesomely</h1>
                <h3> an intuitive travel app for the modern traveler</h3>
                <br />
                <button className="button"><Link to='/login'>Log In</Link></button>
                <br />
                <br />
                <button className="button"><Link to='/createaccount'>Create an account</Link></button>
                <br/>
                <Comment />
                <CommentForm />
                <Footer />
                </div>
            )
    }
}
export default Landing;
