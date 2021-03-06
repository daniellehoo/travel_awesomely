import React, { Component } from 'react';
import Nav from '../partials/Nav';
import Footer from '../partials/Footer';
import {Link} from 'react-router-dom';

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
                <form className="box">
                    <br/>

                        <div className="control has-icons-left">
                            <input className="input" type="text" placeholder="Username" />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-user"></i>
                                </span>
                        </div>
                            <br/>
                        <p className="control has-icons-left">
                            <input className="input control has-icons-left" type="password" placeholder="Password" />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-lock"></i>
                                </span>
                        </p>

                        <br />

                    <button className="button is-warning" type="submit" value="Submit"><Link to='/countries'>Submit</Link></button>

                </form>
            <Footer />
          </div>
        )
    }
}

export default Login;
