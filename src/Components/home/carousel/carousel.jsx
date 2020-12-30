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
                                src="https://firebasestorage.googleapis.com/v0/b/vlog-7a01f.appspot.com/o/bitcoin-a-new-concept-of-virtual-money-graphics-and-digital-background-gold-coin-with-the-image-of-the-letter-b-mining-or-the-blockchain-technology-close-up.jpg?alt=media&token=0a999fb5-b46f-44a2-b071-71ec6fb65c07" 
                                className="d-block w-100 carouselImg"
                                alt="..."
                            />
                        </Link>
                    <div className="carousel-caption d-none d-md-block">
                        <h3 className="carouselTitle">Bitcoin se dispara: llega a superar los 28.000 dólares y la industria habla de valores locos para 2021</h3>
                        <p className="carouselContent">No veíamos algo así desde 2017, pero la diferencia es que ahora hasta la industria financiera parece creer en el bitcoin</p>
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