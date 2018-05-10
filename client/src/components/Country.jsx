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

    componentWillMount(){
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
              <h1>{this.props.country}</h1>
            <CityList thestate={this.props.thestate}/>
            </div>
            <Footer />
            </div>
        )
    }
}

export default Country;
