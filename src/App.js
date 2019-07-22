import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from './components/Header'
import CountryNews from "./components/CountryNews";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

function App() {
  return (
      <Router>
        <Header/>
        <Route exact path="/country/:id" component={CountryNews} />
      </Router>
  );
}

export default App;
