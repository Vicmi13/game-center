import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import './index.css';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="index.html" className="navbar-brand">Juego App</a>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">
        <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <a href="#" className="nav-item active nav-link">Consolas</a>
        <a href="#" className="nav-item active nav-link">Apartados</a>
        <a href="#" className="nav item active nav-link">Sucursales</a>
        <Link to='/Catalogo'>
        <a href="#" className="nav item active nav-link">Catálogo</a>        
        </Link>
        </ul>
        <i class="far fa-user iconUser"></i>
        <h5 className='usu'>UsuarioPrueba</h5>
        <form action="#" method="post" className="form-inline my-2 mylg-0">
        <input type="search" name="buscar" id="buscar" className="form-control mr-sm-2" placeholder="Buscar algún juego..." aria-label="Buscar" />
        </form>
    </div>
    </nav>
      </div>
    )
  }
}