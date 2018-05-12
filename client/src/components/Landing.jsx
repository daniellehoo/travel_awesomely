import React, { Component } from 'react';
// import Nav from '../partials/Nav';
import Footer from '../partials/Footer';
import {Link} from 'react-router-dom';
import CommentForm from './Commentform';
import Comment from './Comment';
import CommentList from './CommentList';

class Landing extends Component {

    // setting state for comment.jsx - testing - move to city page when built out ============
    constructor(props){
        super(props)
        this.state = {comments: [],
                      id: 42} //set comment.id declare comment with id? from where...city element? 

        this.delComment = this.delComment.bind(this)
        this.getComments = this.getComments.bind(this)
       
    }

    componentWillMount(){
        //get all quotes with city_id
    }

    getComments(){
        console.log('I am resetting state in getComments and rendering them')
        // fetch(`/comments`)
    }


    delComment(e){
        console.log('I am deleting from:', this.state.id)
        fetch(`/comments/${this.state.id}`, {
                method: 'DELETE' 
          })
          .then(() => {this.getComments()})
            e.preventDefault();
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
                <Comment handleClick={this.delComment} comment={this.state.comments}/>
                <CommentForm />
                <Footer />
                </div>
            )
    }
}
export default Landing;
