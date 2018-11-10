import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Index from './components/Index';
import Catalogo from './components/Catalogo';
import Login from './components/Login';
import Usuarios from './components/Usuarios';
import Juegos from './components/Juegos'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path = '/' component = {Login} />
          <Route path = '/Index' component = {Index} />
          <Route path = '/Catalogo' component = {Catalogo} />
          <Route path = '/Usuarios' component = {Usuarios} />
          <Route path = '/Juegos' component = {Juegos} />
        </div>
      </Router>
    );
  }
}

export default App;
