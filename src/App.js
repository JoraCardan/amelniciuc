import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';
import Home from './pages/Home';
import About from './pages/About';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
