import React, { Component } from 'react';
import Nav from '../partials/Nav';
import Footer from '../partials/Footer';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
         // set state object for username and password
        }
      }
    render(){
        return(
            <div className="login">
            <Nav />
            <form>
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

export default Login;