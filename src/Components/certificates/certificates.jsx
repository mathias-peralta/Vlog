import React, { Component } from 'react';
import '../certificates/certificates.css';

class Certificates extends Component {
    render() {
        return(
            <div className="body">
                <div className="container">
                        <div className="row">
                            <div className="card mt-5 w-100 card-border">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img 
                                            src="https://firebasestorage.googleapis.com/v0/b/vlog-7a01f.appspot.com/o/Certificates%2FHTML-Curso.jpg?alt=media&token=1514e903-787a-48e1-88a8-eb191bff1603"
                                            alt=""
                                            className="w-100"
                                        />
                                    </div>
                                    <div className="col-md-8 p-2">
                                        <div className="contenedor w-50 m-auto">
                                            <h5 className="text-center card-title">Fundamentos de HTML</h5>
                                            <p className="text-center texto">“HTML es un lenguaje de marcado que se utiliza para el desarrollo de páginas de Internet. Se trata de la siglas que corresponden a HyperText Markup Language, es decir, Lenguaje de Marcas de Hipertexto”.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card  w-100 card-border">
                                <div className="row">
                                    <div className="col-md-8 p-2">
                                        <div className="contenedor w-50 m-auto">
                                            <h5 className="text-center card-title">Fundamentos de CSS</h5>
                                            <p className="text-center texto">Hojas de Estilo en Cascada (del inglés Cascading Style Sheets) o CSS es el lenguaje de estilos utilizado para describir la presentación de documentos HTML o XML (incluyendo varios languages basados en XML como SVG, MathML o XHTML).</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <img 
                                            src="https://firebasestorage.googleapis.com/v0/b/vlog-7a01f.appspot.com/o/Certificates%2FFundamentos%20de%20CSS-Sololearn.jpg?alt=media&token=00a1d752-9bd1-4275-8938-a29a1d14b41a"
                                            alt=""
                                            className="w-100"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="card  w-100 card-border">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img 
                                            src="https://firebasestorage.googleapis.com/v0/b/vlog-7a01f.appspot.com/o/Certificates%2FHTML-Curso.jpg?alt=media&token=1514e903-787a-48e1-88a8-eb191bff1603"
                                            alt=""
                                            className="w-100"
                                        />
                                    </div>
                                    <div className="col-md-8 p-2">
                                        <div className="contenedor w-50 m-auto">
                                            <h5 className="text-center card-title">Introducción a JavaScript</h5>
                                            <p className="text-center texto">“HTML es un lenguaje de marcado que se utiliza para el desarrollo de páginas de Internet. Se trata de la siglas que corresponden a HyperText Markup Language, es decir, Lenguaje de Marcas de Hipertexto”.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default Certificates;