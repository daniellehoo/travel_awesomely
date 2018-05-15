import React, { Component } from 'react';
import Nav from '../partials/Nav';
import Footer from '../partials/Footer';

class CreateAccount extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name: '',
        username: '',
        password: '',
        email: ''
      };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.getCountries = this.getCountries.bind(this)
    }

    getCountries(){
        //return all the comments
        console.log('A user was added with name:' + this.state.name + ' and username:' + this.state.username)
        console.log('I am returning all the countries')
    }

    handleChange(event) {
        this.setState({name: event.target.value,
                       username: event.target.value,
                       password: event.target.value,
                       email: event.target.value
                    });
      }

    handleSubmit(e, city_id){
    fetch(``, {
            method: 'POST'
      })
      .then(() => {this.getCountries()})
        e.preventDefault();
       }


       render(){
           return(
             <div className = "notification">
                 <Nav />
                     <form onSubmit={this.handleSubmit}>
                         <h1 className="title is-2">Sign Up</h1>
                             <p className="title is-3">Please fill in this form to create an account.</p>

                                 <p className="control has-icons-left">
                                     <input className="input" type="text" value={this.state.emailt} onChange={this.handleChange} placeholder="name" />
                                         <span className="icon is-small is-left">
                                         <i className="fas fa-arrow-alt-circle-right"></i>
                                     </span>
                                 </p>
                                 <br/>

                                 <p className="control has-icons-left">
                                     <input className="input" type="text" value={this.state.emailt} onChange={this.handleChange} placeholder="username" />
                                         <span className="icon is-small is-left">
                                         <i className="fas fa-user"></i>
                                     </span>
                                 </p>
                                 <br/>
                                 <p className="control has-icons-left">
                                     <input className="input" type="password" value={this.state.emailt} onChange={this.handleChange} placeholder="password" />
                                         <span className="icon is-small is-left">
                                         <i className="fas fa-lock"></i>
                                     </span>
                                 </p>
                                <br/>
                                 <p className="control has-icons-left">
                                     <input className="input" type="email" value={this.state.emailt} onChange={this.handleChange} placeholder="email" />
                                         <span className="icon is-small is-left">
                                         <i className="fas fa-envelope"></i>
                                     </span>
                                 </p>
                                 <br/>
                                 <input className = "button is-primary" type="submit" value="Submit" />

                     </form>
                 <Footer />
             </div>
                       )
                   }
             }

export default CreateAccount;
