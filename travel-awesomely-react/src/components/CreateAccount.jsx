import React, { Component } from 'react';
import Nav from '../partials/Nav';
import Footer from '../partials/Footer';

class CreateAccount extends Component {
    render(){
        return(
    <div className="login">
        <Nav />
        <form>
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
            <label>Name:
                <input type="text" name="name" />
            </label>
        <br />
        <br />
            <label>Username:
                <input type="text" name="username" />
            </label>
        <br />
        <br />
            <label>Password:
                <input type="password" name="password" />
            </label>
        <br />
        <br />
            <label>Email:
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