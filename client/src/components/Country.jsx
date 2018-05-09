import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import City from './City';
import Nav from '../partials/Nav';
import Footer from '../partials/Footer';

class Country extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

    componentDidMount() {
        fetch('call to Express?')
          .then((res) => {
            return res.json();
          }).then((jsonRes) => {
            this.setState({
            //  City state
            })
          })
      }


    renderCityList() {
          return this.state.cityList.map((city) => {
            return <City city={city} key={city.id} />
          });
      }


    render(){
        const country = this.props.country.id;
        return(
            <div>
            <Nav />
            <div className="country">
            {this.renderCityList()}
            </div>
            </div>
        )
    }
}

export default Country;
