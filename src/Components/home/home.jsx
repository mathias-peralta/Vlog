import React, { Component } from 'react';
import Carousel from './carousel/carousel';
import Page from '../page/page';
import CardList from '../cardList/cardList';

class Home extends Component {
    render() {
        return(
        <div>
            <Carousel />
            <CardList />
        </div>
        )
    }
}

export default Home;
