import React from 'react';
import {Link} from 'react-router-dom';



function Nav(){
    return(
    <nav className="nav">
    <p><strong className="footer-logo">Travel Awesomely</strong></p>
        <div>
            <Link className="navbar-item" to='/'>
                Home</Link>
            <br/>
          <Link to='/countries'>
                Countries</Link>
            <br/>
          <Link to='/cities'>
                Cities</Link>
        </div>
    </nav>

    )
}

export default Nav;
