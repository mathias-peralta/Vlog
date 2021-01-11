import React, { Component } from 'react';
import '../contact/contact.css'

class Contact extends Component {
    render() {
        return(
            <div className="body">
                <div className="container">
                    <div className="card card-body bg-white cardContact m-auto mt-5">
                        <h5>Formulario de Contacto</h5>
                        <p className="text-muted">Completa este formulario de contacto si estas interesado en tener tu propio blog o estas interesado en algún proyecto informatico</p>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="">Nombre</label>
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="">Apellido</label>
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Correo</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Numero</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <button className="btn btn-block btn-dark text-white">Enviar</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;