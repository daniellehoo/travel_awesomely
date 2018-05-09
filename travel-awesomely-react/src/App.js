import React, { Component } from 'react';
import './App.css';

<<<<<<< HEAD
=======

>>>>>>> origin/react
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
<<<<<<< HEAD
=======
 
>>>>>>> origin/react
  render() {
    return (
      <div className="App">
        <main>
          <Switch>
            <Route exact path='/countries/:id' component={Country}/> 
<<<<<<< HEAD
=======
            <Route exact path='/city' component={City}/>
>>>>>>> origin/react
            <Route exact path='/countries' component={Countries}/>
            <Route exact path='/createaccount' component={CreateAccount}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/' component={Landing}/>
<<<<<<< HEAD
            <Redirect path='/'/>
=======
>>>>>>> origin/react
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
