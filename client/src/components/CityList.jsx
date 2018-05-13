import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CityList extends Component {
  constructor(props){
    super(props);
    this.state = {
      citiesListData: [],
      citiesDataReceived: false,
      city: '',
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    fetch(`/countries/${this.props.countryId}`)
    .then((res) => res.json())
    .then((data) => {
      console.log('cityListdata', data)
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
      return (
        <div key={city.id}>
        <Link to={{
          pathname: `/cities/${city.id}`,
          state: {cityId: city.id}
        }} onClick={()=>this.props.grabCityId(city.id)}>{city.city_name}</Link>
      </div>)
    });
  }
}

render(props){
    return(
        <div className="landing">
            <h1>Cities</h1>
              {this.renderCityList()}
        </div>
    )
}
}

export default CityList;
