import React, { Component } from 'react';
import Carousel from './carousel/carousel';
import Page from '../page/page';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class Home extends Component {
    render() {
        return(
        <div>
            <Carousel />
        </div>
        )
    }
}

export default Home;
