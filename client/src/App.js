import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Landing from './components/Landing';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import Countries from './components/Countries';
import Country from './components/Country';
import City from './components/City';
import CommentForm from './components/CommentForm';
import Footer from './partials/Footer';

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

componentDidMount(){
  fetch('/countries')
  .then((res) => res.json())
  .then((data) => {
    console.log('app data', data)
    this.setState({
      country_db_image: data.img_url
    })
  })
  .catch((err) =>
    console.log(err))
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
                country_db_image={this.state.country_db_image}
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
            <Route
              render={() => (<CommentForm
                // handleClick={(e) => this.handleClick(e)}
              />)}
                exact path='/commentform'
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
