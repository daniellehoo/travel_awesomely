import React, { Component } from 'react';
import Nav from '../partials/Nav';
import Footer from '../partials/Footer';
import Country from './Country';
import { Link } from 'react-router-dom';

class Countries extends Component {
  constructor(props){
    super(props);
    this.state = {
      countriesListData: [],
      countriesDataReceived: false,
      country: '',
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    fetch('/countries')
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      // console.log('this is data from componentDidMount' + data)
      this.setState({
        countriesListData: data,
        countriesListDataReceived: true,
        country: data.name,
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
      return this.state.countriesListData.map((country) => {
        return (<div><Country country={country.name} key={country.id} />
            <Link to={`/countries/${country.id}`}>Click</Link>
        </div>)
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
