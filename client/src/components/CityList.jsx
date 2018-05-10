import React, { Component } from 'react';
import Nav from '../partials/Nav';
import Footer from '../partials/Footer';
import Country from './Country';
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

  componentWillMount(){
    console.log('state is this', props.location.state)
    fetch('/countries/1')
    .then((res) => res.json())
    .then((data) => {
      console.log('this is', data)
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
  console.log('this is props from cities', this.props)

}
renderCityList() {
  if (this.state.citiesListDataReceived) {
    return this.state.citiesListData.map((city) => {
      return (<div><City city={city.name} key={city.id} />
        <Link to={`/cities/${city.id}`}>Click</Link>
          {/* <Link to={
            `/cities/${city.id}`}>Click
          </Link> */}
      </div>)
    });
  }
}
render(){
    return(
        <div className="landing">
        <Nav />
            <h1>Cities</h1>
              {this.renderCityList()}
        <Footer />
        </div>
    )
}
}

export default CityList;
