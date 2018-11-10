import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './juegos.css';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';

export default class Juegos extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount = () => {
    }

    render() {
        return (
<div className='formulario'>
    <form>
        <div className="form-group">
            <label htmlFor="titulo">Titulo</label>
            <input type="text" className="form-control" id="titulo" placeholder="Ingresa Titutlo Juego" />
        </div>
        <div className="form-group">
            <label htmlFor="ano">Año</label>
            <input type="date" className="form-control" id="ano" placeholder="Ingresa Apellido" />
        </div>
        <div className="form-group">
            <label htmlFor="disp">Disponible</label>
            <input type="checkbox" className="form-control" id="disp" placeholder="si" value='si' />
            <input type="checkbox" className="form-control" id="disp" placeholder="no" value='no' />
        </div>
        <div className="form-group">
            <label htmlFor="genero">Consola</label>
            <select className="form-control" id="genero">
                <option>[Seleccione]</option>
                <option>PS4</option>
                <option>Xbox One</option>
                <option>Wii U</option>
                <option>Computadora</option>
            </select>
        </div>
        <div className="form-group">
            <label htmlFor="genero">Género</label>
            <select className="form-control" id="genero">
                <option>[Seleccione]</option>
                <option>Terror</option>
                <option>Aventura</option>
                <option>Carrras</option>
                <option>MMO</option>
                <option>Shooter</option>
            </select>
        </div>
        <div className="form-group">
            <label htmlFor="precio">Precio</label>
            <input type="number" className="form-control" id="precio" placeholder="" />
        </div>
        <div className="form-group">
            <label htmlFor="pswd">Renta</label>
            <input type="text" className="form-control" id="renta" placeholder="" />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputFile">Carga Imágen</label>
            <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" />
            {/* <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small> */}
        </div>  
        <div className="form-check">
            <label className="form-check-label">
                <input type="checkbox" className="form-check-input" />
                Check me out
</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>

</div>
        )
    }
}
