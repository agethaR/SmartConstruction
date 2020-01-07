import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import './App.css';

import Navigation from './container/Navigation';

class App extends Component {
  render() {
    return (
      <BrowserRouter className="App">
        <div>
          <Navigation />

          <Switch>
            <Route path = "/"  />
            <Route component = {Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
