import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {CategoryNavigationBar, Header} from './components/Header'
import {CountryNews, RedirectToAll} from "./components/CountryNews";
import {HomePage, RedirectToHomePage} from "./components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import SignificantEvents from "./components/SignificantEvents";
import Footer from "./components/Footer";

function App() {

    return (
        <Router>
            <Header/>
            <Route exact path="/" component={RedirectToHomePage}/>
            <Route exact path="/world" component={HomePage}/>
            <Route exact path="/country/:id" component={RedirectToAll} />
            <Route exact path="/country/:id/:category" component={CountryNews}/>
            <Route exact path="/events/2018" component={SignificantEvents} />\
            <Footer />
        </Router>
    );
}

export default App;
