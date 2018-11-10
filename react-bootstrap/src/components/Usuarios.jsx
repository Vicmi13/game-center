import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './usuarios.css';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';

export default class Usuarios extends Component {
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
            <label htmlFor="nombre">Nombre</label>
            <input type="name" className="form-control" id="nombre" placeholder="Ingresa Nombre" />
        </div>
        <div className="form-group">
            <label htmlFor="apellido">Apellido</label>
            <input type="name" className="form-control" id="apellido" placeholder="Ingresa Apellido" />
        </div>
        <div className="form-group">
            <label htmlFor="usuario">Usuario</label>
            <input type="name" className="form-control" id="usuario" placeholder="Ingresa Usuario" />
        </div>
        <div className="form-group">
            <label htmlFor="pswd">Contraseña</label>
            <input type="password" className="form-control" id="pswd" placeholder="Contraseña" />
        </div>
        <div className="form-group">
            <label htmlFor="pago">Forma de pago</label>
            <select className="form-control" id="pago">
                <option>[Seleccione]</option>
                <option>Visa</option>
                <option>MasterCard</option>
                <option>PayPal</option>
                <option>MercadoPago</option>
                <option>Efectivo</option>
            </select>
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
