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
                <form className = "notification">
                    <br/>

                        <div className="control has-icons-left">
                            <input className="input" type="text" placeholder="Username" />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-user"></i>
                                </span>
                        </div>
                            <br/>
                        <p className="control has-icons-left">
                            <input className="input" type="password" placeholder="Password" />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-lock"></i>
                                </span>
                        </p>

                        <br />

                    <input className = "button is-primary" type="submit" value="Submit" />

                </form>
            <Footer />
          </div>
        )
    }
}

export default Login;
