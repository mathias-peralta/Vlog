import { Carousel } from 'bootstrap';
import React, { Component } from 'react';
import '../card/card.css'

class Card extends Component {

    render() {
        return(
            <div className="container mt-3">
                <div className="card card-body p-0" id="cardEffect">
                    <div className="row">
                        <div className="col-md-4">
                                <img src="https://picsum.photos/720/400" className="w-100 img-responsive" alt=""/>
                        </div>
                        <div className="col-md-8 p-3">
                            <h5 className="cardTitle">Titulo</h5>
                            <p className="cardContent">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, facilis.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;