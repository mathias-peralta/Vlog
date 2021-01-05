import React, { Component } from 'react';
import '../footer/footer.css'

class Footer extends Component {
    render() {
        return(
            <footer>
                <div  className="container">
                    <div className="row w-100 -2">
                        <div className="col-md-4">
                            <h5 className="text-primary">Seguime en</h5>
                            <ul className="text-white">
                                <li>
                                    <a href="#" className="text-white">
                                        <i class="fa fa-instagram  mr-1" aria-hidden="true"></i>Instagram
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white">
                                        <i class="fa fa-linkedin-square mr-1" aria-hidden="true"></i>Linkedin
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white">
                                        <i class="fa fa-github mr-1" aria-hidden="true"></i>Github
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h5 className="text-primary text-center">Contacto</h5>
                            <p className="text-white text-center">mathiasalexandr123@gmail.com</p>
                        </div>
                        <div className="col-md-4">
                            <h5 className="text-primary direccion">Dirección</h5>
                            <p className="text-white text-footer">Asunción, Paraguay</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;