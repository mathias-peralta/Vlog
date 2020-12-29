import React, { Component } from 'react';
import '../nav/nav.css'
import 'bootstrap/dist/css/bootstrap.css'
class Nav extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light" id="navbarColor">
                <div className="container">
                    <a className="navbar-brand" href="#" id="navbarName">Mathias Peralta</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto" id="ulList">
                            <li className="nav-item active">
                                <a className="nav-link text-white" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">About me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav;