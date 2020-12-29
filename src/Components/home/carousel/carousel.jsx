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
                            <img src="https://picsum.photos/1080/400" className="d-block w-100 carouselImg" alt="..."/>
                        </Link>
                    <div className="carousel-caption d-none d-md-block">
                        <h3 className="carouselTitle">Bitcoin se dispara: llega a superar los 28.000 dólares y la industria habla de valores locos para 2021</h3>
                        <p className="carouselContent">No veíamos algo así desde 2017, pero la diferencia es que ahora hasta la industria financiera parece creer en el bitcoin</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                        <Link to="/Page/2">
                            <img src="https://picsum.photos/1080/400" className="d-block w-100 carouselImg" alt="..."/>
                        </Link>
                    <div className="carousel-caption d-none d-md-block">
                        <h3 className="carouselTitle" >Second slide label</h3>
                        <p className="carouselContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                        <Link to="/Page/3">
                            <img src="https://picsum.photos/1080/400" className="d-block w-100 carouselImg" alt="..."/>
                        </Link>
                    <div className="carousel-caption d-none d-md-block">
                        <h3 className="carouselTitle">Third slide label</h3>
                        <p className="carouselContent">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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