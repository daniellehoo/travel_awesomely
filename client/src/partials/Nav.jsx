import React from 'react';
import {Link} from 'react-router-dom';



function Nav(){
    return(
      <div>
        <nav className="nav">
        <p><strong className="footer-logo">Travel Awesomely</strong></p>

            <ul>
                <li><Link to='/'>Home</Link></li>
              <li><Link to='/countries'>Countries</Link></li>
            </ul>
        </nav>
      </div>

    )
}

export default Nav;
