import React, { Component } from 'react';
import '../certificates/certificates.css';

class Certificates extends Component {
    render() {
        return(
            <div className="body1">
                <div className="container">
                    <div className="row">
                        <div className="card mt-5 w-100 card-border p-4">
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
                                        <h5 className="text-center card-title animate__animated animate__pulse">Fundamentos de HTML</h5>
                                        <p className="text-center texto">“HTML es un lenguaje de marcado que se utiliza para el desarrollo de páginas de Internet. Se trata de la siglas que corresponden a HyperText Markup Language, es decir, Lenguaje de Marcas de Hipertexto”.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card  w-100 card-border p-4">
                            <div className="row">
                                <div className="col-md-8 p-2">
                                    <div className="contenedor w-50 m-auto">
                                        <h5 className="text-center card-title animate__animated animate__pulse">Fundamentos de CSS</h5>
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
                        <div className="card  w-100 card-border p-4">
                            <div className="row">
                                <div className="col-md-4">
                                    <img 
                                        src="https://firebasestorage.googleapis.com/v0/b/vlog-7a01f.appspot.com/o/Certificates%2FHTMLyCSS.jpg?alt=media&token=dd7421dc-1bd8-45c5-ade1-da4a48643659"
                                        alt=""
                                        className="w-100"
                                    />
                                </div>
                                <div className="col-md-8 p-2">
                                    <div className="contenedor w-50 m-auto">
                                        <h5 className="text-center card-title animate__animated animate__pulse">Introducción al Desarrollo Web (HTML y CSS)</h5>
                                        <p className="text-center texto"> CSS son las siglas de C ascading S tyle S heets. - La cascada se refiere a la forma en que CSS aplica un estilo sobre otro. - Las hojas de estilo controlan la apariencia de los documentos web. CSS y HTML funcionan de la mano: - HTML ordena la estructura de la página. - CSS define cómo se muestran los elementos HTML.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card  w-100 card-border p-4">
                            <div className="row">
                                <div className="col-md-8 p-2">
                                    <div className="contenedor w-50 m-auto">
                                        <h5 className="text-center card-title animate__animated animate__pulse">JavaScript desde cero</h5>
                                        <p className="text-center texto">¿Incluso necesitamos introducir JavaScript ? ¡Es uno de los lenguajes de programación más populares del planeta! ¿Alguna vez visitó un sitio web que le hizo pensar ... "Oye, este sitio web es realmente genial e interactivo"? Bueno, probablemente JavaScript lo estaba haciendo realidad.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <img 
                                        src="https://firebasestorage.googleapis.com/v0/b/vlog-7a01f.appspot.com/o/Certificates%2Fcertificado-curso-javascript-old.png?alt=media&token=c944264a-5800-4326-8889-26d32433f11d"
                                        alt=""
                                        className="w-100"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="card w-100 card-border p-4">
                            <div className="row">
                                <div className="col-md-4">
                                    <a href="https://firebasestorage.googleapis.com/v0/b/vlog-7a01f.appspot.com/o/Certificates%2FCertificadoDeFinalizacion_JavaScript%20avanzado%20Buenas%20practicas_page-0001.jpg?alt=media&token=6a9ba471-183d-4cb1-893c-03fd744df1d6" target="_blank" className="imgHoover">
                                        <img 
                                            src="https://firebasestorage.googleapis.com/v0/b/vlog-7a01f.appspot.com/o/Certificates%2FCertificadoDeFinalizacion_JavaScript%20avanzado%20Buenas%20practicas_page-0001.jpg?alt=media&token=6a9ba471-183d-4cb1-893c-03fd744df1d6"
                                            alt=""
                                            className="w-100"
                                        />
                                    </a>
                                </div>
                                <div className="col-md-8 p-2">
                                    <div className="contenedor w-50 m-auto">
                                        <h5 className="text-center card-title animate__animated animate__pulse">Curso de JavaScript(buenas practicas)</h5>
                                        <p className="text-center texto">Como buen programador es importante escribir codigo limpio y legible para que el código que escribamos sea escalable y entendible por otros programadores</p>
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