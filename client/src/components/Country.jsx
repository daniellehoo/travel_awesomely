import React, { Component } from 'react';
import Nav from '../partials/Nav';
import Footer from '../partials/Footer';
import CityList from './CityList';

class Country extends Component {
  constructor(props){
    super(props);
    this.state = {
      country: '',
      id: '',
      citiesListData: '',
      citiesListDataReceived: false,
      city: '',
      city_id: '',
    };

    this.grabCityId = this.grabCityId.bind(this);

  }

    componentWillMount(){
      console.log('this.props is', this.props)
      console.log('react stateid: ', this.props.countryId);
      fetch(`/countries/${this.props.countryId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('this is what were after', data)
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

    handleClick() {
      console.log('this is props', this.props)
    }

    grabCityId(id) {
      console.log('this is id', id)
      this.setState({
        city_id: id
      })
    }

    render(props){
      console.log('thisiscountry', this.props.countryId)
        return(
            <div>
              <Nav />
              <div className="country box">
                <img src={this.state.image}/>
                <CityList
                  countryId={this.props.countryId}
                  cityId={this.state.city_id}
                  citiesListData= {this.state.citiesListData}
                  grabCityId={this.grabCityId}
                  handleClick={(e) => this.grabCityId(this.props.id)}
                />
              </div>
            </div>
        )
    }
}

export default Country;
