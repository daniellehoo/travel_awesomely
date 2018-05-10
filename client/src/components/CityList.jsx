import React, { Component } from 'react';
import Nav from '../partials/Nav';
import Footer from '../partials/Footer';
import Country from './Country';
import { Link } from 'react-router-dom';

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

  componentDidMount(){
    fetch('/cities')
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      // console.log('this is data from componentDidMount' + data)
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
          <Link to=`/cities/${city.id}`>Click</Link>
      </div>)
    });
  }
}
render(){
    return(
        <div className="landing">
        <Nav />
            <h1>Cities</h1>
            <h3>Hi {this.props.username}, choose a city</h3>
              {this.renderCityList()}
        <Footer />
        </div>
    )
}
}

export default CityList;
