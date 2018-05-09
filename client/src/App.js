import React, { Component } from 'react';
import './App.css';


import {Redirect, Route,Switch} from 'react-router-dom';
import Nav from './partials/Nav';
import Footer from './partials/Footer';
import Landing from './components/Landing';
import City from './components/City';
import Login from './components/Login';
import Country from './components/Country';
import Countries from './components/Countries';
import CreateAccount from './components/CreateAccount';


class App extends Component {
  state = {
      response: ''
    };

    componentDidMount() {
      this.callApi()
        .then(res => this.setState({ response: res.express }))
        .catch(err => console.log(err));
    }

    callApi = async () => {
      const response = await fetch('/api/hello');
      const body = await response.json();

      if (response.status !== 200) throw Error(body.message);

      return body;
    };

  render() {
    return (
      <div className="App">
        <p className="App-intro">{this.state.response}</p>
        <main>
          <Switch>
            <Route exact path='/countries/:id' component={Country}/>
            <Route exact path='/city' component={City}/>
            <Route exact path='/countries' component={Countries}/>
            <Route exact path='/createaccount' component={CreateAccount}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/' component={Landing}/>
            <Redirect path='/'/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
