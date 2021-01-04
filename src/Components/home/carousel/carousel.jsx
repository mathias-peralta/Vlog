import React, { Component } from "react";
import '../carousel/carousel.css'
import { Link } from 'react-router-dom';


class Carousel extends Component {

    render() {
        return(
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></li>
                    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Link to="/Page/1">
                            <img 
                                src="https://firebasestorage.googleapis.com/v0/b/vlog-7a01f.appspot.com/o/tor.jpg?alt=media&token=19616b0e-2a36-40e8-8a8e-21b728dbe91a" 
                                className="d-block w-100 carouselImg"
                                alt="..."
                            />
                        </Link>
                    <div className="carousel-caption d-none d-md-block">
                        <h3 className="carouselTitle">Red Tor: qué es, como funciona y como se usa</h3>
                        <p className="carouselContent">El nombre Tor son las siglas 'the onion router' y es posiblemente la principal y la más conocida darknet de internet</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                        <Link to="/Page/2">
                            <img src="https://firebasestorage.googleapis.com/v0/b/vlog-7a01f.appspot.com/o/3318.jpg?alt=media&token=de56e7f0-7d59-46b4-8035-d07623c986f8" className="d-block w-100 carouselImg" alt="..."/>
                        </Link>
                    <div className="carousel-caption d-none d-md-block">
                        <h3 className="carouselTitle" >El coche de Apple llegará como pronto en 2025, siendo 2028 una fecha realista, según Ming-Chi Kuo</h3>
                        <p className="carouselContent">Diversas fuentes fiables hablan de un Apple Car para esta década, pero Kuo llama a la calma diciendo que el mercado es demasiado optimista con él.</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                        <Link to="/Page/3">
                            <img src="https://picsum.photos/1080/400" className="d-block w-100 carouselImg" alt="..."/>
                        </Link>
                    <div className="carousel-caption d-none d-md-block">
                        <h3 className="carouselTitle">WhatsApp dejara de funcionar en estos móviles en 2021: cuáles son y cómo saber si el tuyo se verá afectado</h3>
                        <p className="carouselContent">WhatsApp dejara de funcionar en estos móviles en 2021: cuáles son y cómo saber si el tuyo se verá afectado</p>
                    </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </a>
            </div>
        )
    }
}

export default Carousel;