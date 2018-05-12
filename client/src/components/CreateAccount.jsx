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
      <div className="login">
          <Nav />
          <form onSubmit={this.handleSubmit}>
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
              <label>Name
              <br/>
                  <input type="text" value={this.state.name} onChange={this.handleChange} name="name" />
              </label>
          <br />
          <br />
              <label>Username
              <br/>
                  <input type="text" value={this.state.username} onChange={this.handleChange} name="username" />
              </label>
          <br />
          <br />
              <label>Password
              <br/>
                  <input type="password" value={this.state.password} onChange={this.handleChange} name="password" />
              </label>
          <br />
          <br />
              <label>Email
              <br/>
                  <input type="email" value={this.state.emailt} onChange={this.handleChange} name="email" />
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
