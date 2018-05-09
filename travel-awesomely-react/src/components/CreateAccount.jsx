import React, { Component } from 'react';
import Nav from '../partials/Nav';
import Footer from '../partials/Footer';

class CreateAccount extends Component {
    constructor(props) {
        super(props);
        // state
        this.state = {
        //   set state object for user
        }
      }
      
    render(){
        return(
    <div className="login">
        <Nav />
        <form>
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
            <label>Name
            <br/>
                <input type="text" name="name" />
            </label>
        <br />
        <br />
            <label>Username
            <br/>
                <input type="text" name="username" />
            </label>
        <br />
        <br />
            <label>Password
            <br/>
                <input type="password" name="password" />
            </label>
        <br />
        <br />
            <label>Email
            <br/>
                <input type="email" name="email" />
            </label>
        <br />
        <br />
            <input type="submit" value="Submit" />
        </form>
            <Footer />
            </div>
        )
    }
}

export default CreateAccount;