import React from 'react';
import './App.css';
import Nav from './Components/nav/Nav';
import 'bootstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import  Home  from "./Components/home/home";
import AboutMe from "./Components/aboutme/aboutMe";
import Contact from "./Components/contact/contact";
import Portfolio from "./Components/portfolio/portfolio";
import Page from "./Components/page/page";

function App() {
  return (
    <Router>
      <Nav/>
      <Route path="/" exact component={Home}/>
      <Route path="/AboutMe" component={AboutMe}/>
      <Route path="/Contact" component={Contact}/>
      <Route path="/Portfolio" component={Portfolio}/>
      <Route path="/Page/:id" component={Page} />
    </Router>

  );
}

export default App;
