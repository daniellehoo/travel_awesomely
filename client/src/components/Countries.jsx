import React, { Component } from 'react';
import Nav from '../partials/Nav';
import Footer from '../partials/Footer';
import Country from './Country';

class Countries extends Component {
  constructor(props){
    super(props);
    this.state = {
      countriesListData: [],
      countriesDataReceived: false,
      // countries: []
    }
  }

  componentDidMount(){
    fetch('/countries')
    .then((res) => res.json())
    .then((data) => {
      // console.log('this is data from componentDidMount' + data)
      this.setState({
        countriesListData: data,
        countriesListDataReceived: true,
      })
    })
    .catch((err) =>
      console.log(err))
}

  renderCountryList() {
    if (this.state.countriesListDataReceived) {
      console.log('this is countryListReceived:', this.state.countriesListDataReceived)
      console.log('this is countryListData', this.state.countriesListData)
      return this.state.countriesListData.map((country) => {
        return <Country country={country} key={country.id} />
      });
    }
  }

    render(){
        return(
            <div className="landing">
            <Nav />
                <h1>Countries</h1>
                <h3>Hi {this.props.username}, choose a country</h3>
                  {this.renderCountryList()}
            <Footer />
            </div>
        )
    }
}

export default Countries;
