import React, { Component } from 'react';
import '../card/card.css'
import { Link } from 'react-router-dom';
class Card extends Component {

    render() {
        
        const { card,id } = this.props.card;

        return (
            <div className="container mt-3">
                <Link to={`/Page/${id}`} className="nav nav-link text-dark">
                    <div className="card card-body p-0" id="cardEffect" key={id}>
                        <div className="row">
                            <div className="col-md-4">
                                <img src={card.imagen} className="w-100 img-responsive" alt=""/>
                            </div>
                            <div className="col-md-8 p-3">
                                <h5 className="cardTitle">{card.titulo}</h5>
                                <p className="cardContent">{card.contenido}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default Card;