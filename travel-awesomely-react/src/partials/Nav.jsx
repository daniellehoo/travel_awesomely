import React from 'react';
import {Link} from 'react-router-dom';

function Nav(){
    return(
    <nav className="nav">
    <p><strong className="footer-logo">Travel Awesomely</strong></p>
        <div>
            <a className="navbar-item"><Link to='/'>
                Home</Link>
            </a>
            <br/>
            <a className="navbar-item"><Link to='/countries'>
                Countries</Link>
            </a>
            <br/>
            <a className="navbar-item"><Link to='/cities'>
                Cities</Link>
            </a>
        </div>
    </nav>
    
    
        

    )
}

export default Nav;