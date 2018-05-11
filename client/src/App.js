import React, { Component } from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom';
// import Nav from './partials/Nav';
// import Footer from './partials/Footer';
import Landing from './components/Landing';
import City from './components/City';
import Login from './components/Login';
import Country from './components/Country';
import Countries from './components/Countries';
import CreateAccount from './components/CreateAccount';
import CityList from './components/CityList';


class App extends Component {
  constructor(props) {
    super(props)

  this.state = {
      response: '',
      country: '',
      id: 0,
      d: 1
    };

    this.handleClick = this.handleClick.bind(this);
    this.grabId = this.grabId.bind(this);
}



grabId(id) {
    this.setState({
      d: id
    })
}


    componentDidMount() {
      // this.callApi()
      //   .then(res => this.setState({ response: res.express }))
      //   .catch(err => console.log(err));
    }

    // callApi = async () => {
    //   const response = await fetch('/');
    //   const body = await response.json();
    //
    //   if (response.status !== 200) throw Error(body.message);
    //
    //   return body;
    // };

    handleClick(e) {
      e.preventDefault();
      console.log('hitting handleClick')
      //this.props.onClick(this.state.country);
      this.setState({
        country: this.props.country,
        id: this.props.id,
      })
    }

  render() {
    console.log('inApp', this.state.d)
    return (
      <div className="App">
        <p className="App-intro">{this.state.response}</p>
        <main>
          <Switch>
            <Route
              render={() => (<Country
                thestate={this.state.d}
                handleClick={(e) => this.handleClick(e)}/>)}
                exact path='/countries/:id'
              />
            <Route exact path='/city' component={City}
          />
            <Route
              render={() => (<Countries grabId={this.grabId} handleClick={(e) => this.handleClick(e)}/>)}
              exact path='/countries'
          />
            <Route exact path='/createaccount' component={CreateAccount}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/' component={Landing}/>
            {/* <Redirect path='/'/> */}
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
