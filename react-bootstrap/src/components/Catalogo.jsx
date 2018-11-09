import React, { Component } from 'react'
import { deflate } from 'zlib';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './index.css';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
import Navbar from './Navbar';

export default class Catalogo extends Component {
              constructor(props){
                super(props);
                this.state = {
                  name:'',
                  lastName: '',
                  secLastName: ''
                }
              }

              agregar = (e) => {
                let{id,value} = e.target
                this.setState({
                  [id]:value
                })
              }
        
  render() {
    return (
      <div>
        <div>
          <Navbar/>
          <br/>
          <br/>
        </div>
        <div>  <input type="text" id="name" onChange={this.agregar} value={this.state.name} placeholder='holi'/> </div>
       
      </div>

    )
  }
}

