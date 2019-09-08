import React from 'react';
import '../styles/App.css';
import "../styles/ShowMoreButton.css"
import "../styles/scroll.css"
import "../styles/homePage.css"
import  "../styles/styles.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {CategoryNavigationBar, Header} from './Header'
import {CountryNews} from "./CountryNews";
import {HomePage, RedirectToHomePage} from "./HomePage";
import ScrollToTop from "./ScrollToTop";

function App() {

    return (
        <Router>
            <ScrollToTop />
            <Header/>
            <Route render={({location}) => (
                <TransitionGroup>
                    <CategoryNavigationBar/>
                    <CSSTransition key={location.key} timeout={300} classNames="fade">
                        <Switch>
                            <Route exact path="/" component={RedirectToHomePage}/>
                            <Route exact path="/:category" component={HomePage}/>
                            <Route exact path="/country/:id/:category" component={CountryNews}/>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            )}/>
        </Router>
    );
}

export default App;
