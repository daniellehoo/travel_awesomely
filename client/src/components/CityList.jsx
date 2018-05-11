import React, { Component } from 'react';
import Nav from '../partials/Nav';
import Footer from '../partials/Footer';
// import Country from './Country';
import { Link } from 'react-router-dom';
import City from './City';

class CityList extends Component {
  constructor(props){
    super(props);
    this.state = {
      citiesListData: [],
      citiesDataReceived: false,
      city: '',
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount() {
    console.log('state is this', this.props.thestate)
    fetch(`/countries/${this.props.thestate}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      this.setState({
        citiesListData: data,
        citiesListDataReceived: true
      })
    })
    .catch((err) =>
      console.log(err))
  }

handleClick(e) {
  console.log('this is props from cities', this.props)

}
renderCityList() {
  if (this.state.citiesListDataReceived) {
    return this.state.citiesListData.map((city) => {
      return (<div><City city={city.city_name} key={city.id} />
        <Link to={`/cities/${city.id}`}>{city.city_name}</Link>
      </div>)
    });
  }
}
render(props){
  console.log('thisistssts', this.props.thestate)
    return(
        <div className="landing">
            <h1>Cities</h1>
              {this.renderCityList()}
        </div>
    )
}
}

export default CityList;
