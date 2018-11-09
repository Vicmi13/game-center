import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Index from './components/Index';
import Catalogo from './components/Catalogo';
import Login from './components/Login';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path = '/' component = {Login} />
          <Route path = '/Index' component = {Index} />
          <Route path = '/Catalogo' component = {Catalogo} />
        </div>
      </Router>
    );
  }
}

export default App;
