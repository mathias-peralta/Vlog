import React, { Component } from 'react';
import '../nav/nav.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom';
class Nav extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light" id="navbarColor">
                <div className="container">
                    <Link to="/" className="navbar-brand" id="navbarName">
                        Mathias Peralta
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" class="bi bi-list svg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>                    
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto" id="ulList">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link text-white">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/AboutMe" className="nav-link text-white">
                                    AboutMe
                                </Link>                            
                            </li>
                            <li className="nav-item">
                                <Link to="/Portfolio" className="nav-link text-white">
                                    Portfolio
                                </Link>                            
                            </li>
                            <li className="nav-item">
                                <Link to="/Certificates" className="nav-link text-white">
                                    Certificates
                                </Link>                            
                            </li>
                            <li className="nav-item">
                                <Link to="/Contact" className="nav-link text-white">
                                    Contact
                                </Link>   
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav;