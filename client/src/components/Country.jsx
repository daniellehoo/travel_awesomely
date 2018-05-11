import React, { Component } from 'react';
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

    componentWillMount(){
      console.log('react propid: ', this.props.id)
      fetch(`/countries/${this.props.id}`)
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

    render(props){
      console.log('thisiscountry', this.props.thestate)
        return(
            <div>
            <Nav />
            <div className="country">
            <CityList
              thestate={this.props.thestate}
              grabId={this.props.grabId}
              handleClick={(e) => this.handleCityClick(e)}
            />
            </div>
            <Footer />
            </div>
        )
    }
}

export default Country;
