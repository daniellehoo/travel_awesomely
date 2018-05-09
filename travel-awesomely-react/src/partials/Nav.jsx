import React from 'react';
<<<<<<< HEAD

function Nav(){
    return(
<nav className="nav">
    <div>
        <div>
            <a className="navbar-item" href="">
                Home
            </a>
            <a className="navbar-item" href="">
                Countries
            </a>
            <a className="navbar-item" href="">
                Cities
            </a>
        </div>
    </div>
    
        
</nav>
=======
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
    
    
        

>>>>>>> origin/react
    )
}

export default Nav;