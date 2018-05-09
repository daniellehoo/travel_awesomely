import React, { Component } from 'react';
import Nav from '../partials/Nav';
import Footer from '../partials/Footer';

class Login extends Component {
<<<<<<< HEAD
=======
    constructor(props) {
        super(props);
        this.state = {
         // set state object for username and password
        }
      }
>>>>>>> origin/react
    render(){
        return(
            <div className="login">
            <Nav />
            <form>
                <label>
<<<<<<< HEAD
                    Username:
=======
                    Username
                    <br/>
>>>>>>> origin/react
            <input type="text" name="name" />
                </label>
                <br />
                <br />
                <label>
<<<<<<< HEAD
                    Password:
=======
                    Password
                    <br/>
>>>>>>> origin/react
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