import React, { Component } from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
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
      countryid: 0,
      cityid: 0,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleCityClick = this.handleCityClick.bind(this);
    this.grabId = this.grabId.bind(this);
    this.grabCityId = this.grabCityId.bind(this);
}


grabId(id) {
    this.setState({
      countryid: id
    })
}

grabCityId(id) {
  this.setState({
    cityid: id
  })
}

    handleClick(e) {
      e.preventDefault();
      console.log('hitting handleClick')
      this.setState({
        country: this.props.country,
        id: this.props.id,
      })
    }

    handleCityClick(e) {
      e.preventDefault();
      console.log('hitting handleCityClick')
      this.setState({
        city: this.props.city,
        id: this.props.id
      })
    }

  render() {
    console.log('inAppcountryidis:', this.state.countryid)
    return (
      <div className="App">
        <p className="App-intro">{this.state.response}</p>
        <main>
          <Switch>
            <Route
              render={() => (<Country
                countryId={this.state.countryid}
                grabCityId={this.grabCityId}
                cityId={this.state.cityid}
                handleClick={(e) => this.handleClick(e)}
              />)}
                exact path='/countries/:id'
              />
            <Route
              render={() => (<City
              cityId={this.state.cityId}
              grabCityId={this.grabCityId}
              countryId={this.state.countryid}
            />)}
              exact path='/cities/:id' component={City}
            />
            <Route
              render={() => (<Countries
                grabId={this.grabId}
                handleClick={(e) => this.handleClick(e)}/>)}
                exact path='/countries'
            />
            <Route exact path='/createaccount'
            component={CreateAccount}/>
            <Route exact path='/login'
            component={Login}/>
            <Route exact path='/'
            component={Landing}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
