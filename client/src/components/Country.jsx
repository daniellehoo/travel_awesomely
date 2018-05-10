import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import City from './City';
import Nav from '../partials/Nav';
import Footer from '../partials/Footer';

class Country extends Component {
  constructor(props){
    super(props);
    this.state = {
      country: ''
    }
  }

    componentDidMount() {
        fetch(`/countries/${this.props.match.params.id}`)
          .then((res) => res.json())
          .then((data) => {
            this.setState({
              country: data.country
          })
        })
        .catch((err) =>
          console.log(err))
    }


    renderCityList() {
          return this.state.cityList.map((city) => {
            return <City city={city} key={city.id} />
          });
      }


    render(){
        return(
            <div>
            <Nav />
            <div className="country">
              <h1>Cities</h1>
            {/* {this.renderCityList()} */}
            </div>
            <Footer />
            </div>
        )
    }
}

export default Country;
