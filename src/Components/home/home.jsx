import React, { Component } from 'react';
import Carousel from './carousel/carousel';
import Page from '../page/page';
import CardList from '../cardList/cardList';
import Footer from '../footer/footer';

class Home extends Component {
    render() {
        return(
        <div>
            <Carousel />
            <CardList />
            <Footer />
        </div>
        )
    }
}

export default Home;
