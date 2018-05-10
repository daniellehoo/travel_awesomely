import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import City from './City';
import Nav from '../partials/Nav';
import Footer from '../partials/Footer';
import CityList from './CityList';
import { Link } from 'react-router-dom';

class Country extends Component {
  constructor(props){
    super(props);
    this.state = {
      country: '',
      id: ''
    };

  }

    componentWillMount() {
        // fetch(`/countries/${this.props.id}`)
        //   .then((res) => res.json())
        //   .then((data) => {
        //     this.setState({
        //       country: data.country
        //   })
        // })
        // .catch((err) =>
        //   console.log(err))
    }


    renderCityList() {
      if (this.state.citiesList)
          return this.state.cityList.map((city) => {
            return <City city={city} key={city.id} />
          });
      }

      renderCountryList() {
        if (this.state.countriesListDataReceived) {
          return this.state.countriesListData.map((country) => {
            return (<div><Country country={country.name} key={country.id} />
                <Link to={`/countries/${country.id}`}>See More</Link>
                <CityList />
            </div>)
          });
        }
      }


    handleClick() {
      console.log('this is props', this.props)
    }

    render(){
        return(
            <div>
            <Nav />
            <div className="country">
              <h1>{this.props.country}</h1>
            <CityList />
            </div>
            <Footer />
            </div>
        )
    }
}

export default Country;
