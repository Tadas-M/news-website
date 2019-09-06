import React from 'react';
import './styles/App.css';
import "./styles/ShowMoreButton.css"
import "./styles/scroll.css"
import "./styles/homePage.css"
import  "./styles/styles.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {CategoryNavigationBar, Header} from './components/Header'
import {CountryNews} from "./components/CountryNews";
import {HomePage, RedirectToHomePage} from "./components/HomePage";
import SignificantEvents from "./components/SignificantEvents";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {

    return (
        <Router>
            <ScrollToTop />
            <Header/>
            <Route render={({location}) => (
                <TransitionGroup>
                    <CategoryNavigationBar/>
                    <CSSTransition key={location.key} timeout={1000} classNames="fade">
                        <Switch>
                            <Route exact path="/" component={RedirectToHomePage}/>
                            <Route exact path="/:category" component={HomePage}/>
                            <Route exact path="/country/:id/:category" component={CountryNews}/>
                            <Route exact path="/events/2018" component={SignificantEvents}/>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            )}/>
            {/*<Footer/>*/}
        </Router>
    );
}

export default App;
