import React, { Component } from 'react';
import Nav from '../partials/Nav';
import Footer from '../partials/Footer';

class CreateAccount extends Component {
    render(){
        return(
            <div className="login">
            <Nav />
            <form className="login_form">
                <label>
                    Username:
            <input type="text" name="name" />
                </label>
                <br />
                <br />
                <label>
                    Password:
            <input type="password" name="password" />
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