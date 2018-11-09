import React, { Component } from 'react'
import { deflate } from 'zlib';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './catalogo.css';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import Navbar from './Navbar';
import Usuarios from './Usuarios'
import $ from 'jquery'

export default class Catalogo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastName: '',
      secLastName: ''
    }
  }

  agregar = (e) => {
    let { id, value } = e.target
    this.setState({
      [id]: value
    })
  }

  render() {

    return (
      <div className='containerCatalog'>
        <div>
          <Navbar />
        </div>

        <div className='tabs1'>
          <div className="row">
            <div className="col s12 tab1">
              <ul className="tabs">
                <li className="tab col s3"><a href="#test1">usuarios</a>
                  <Usuarios />
                </li>
                <li className="tab col s3 t2"><a className="active" href="#test2">Juegos</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

