import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Country extends Component {
    render(){
        const country = this.props.country.id;
        return(
            <div className="country">
            <h4>{this.props.country.name}</h4>
            {/* map through cities and render */}
            {/* Link to city page */}
            </div>
        )
    }
}

export default Country;