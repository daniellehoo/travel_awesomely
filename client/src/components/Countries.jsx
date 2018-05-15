import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../partials/Nav';
import Footer from '../partials/Footer';

class Countries extends Component {
  constructor(props){
    super(props);
    this.state = {
      countriesListData: [],
      countriesDataReceived: false,
      country_db_image: '',
      country: '',
      id: '',
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    fetch('/countries')
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      this.setState({
        countriesListData: data,
        countriesListDataReceived: true,
        country_db_image: data.img_url,
        country: data.name,
        id: data.id
      })
    })
    .catch((err) =>
      console.log(err))
}

cities(country_id){
  fetch(`/countries/${country_id}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    this.setState({
      citiesListData: data,
      citiesListDataReceived: true,
      city: data.name,
      id: data.id
    })
  })
  .catch((err) =>
    console.log(err))
}

  handleClick(e) {
    console.log('this is props from countries', this.props)
  }

  renderCountryList() {
    if (this.state.countriesListDataReceived) {
      return this.state.countriesListData.map((country, i) => {
        return (
          <div key={country.id}>
            <Link to={{
              pathname: `/countries/${country.id}`,
              state: {
                country_id: country.id,
                country_db_image: country.img_url,
              }
            }} onClick={()=>this.props.grabId(country.id)}>{country.name}</Link>
          </div>
        )
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
             </div>
         )
     }
}

export default Countries;
