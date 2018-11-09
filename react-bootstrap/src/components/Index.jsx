import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import './index.css';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
import Navbar from './Navbar';

export default class Index extends Component {
  render() {
    return (
        <div>
          <Navbar></Navbar>
        <div>
              <Carousel className='carrusel autoPlay infiniteLoop'>
                  <div>
                      <img src="https://static.gamespot.com/uploads/original/1587/15875866/3400004-spiderman-e3.jpg" />
                  </div>
                  <div>
                      <img src="https://static.gamespot.com/uploads/original/1552/15524586/3372530-the-best-ps4-games-so-far-2018-promo-1-2-thumb-nologo.jpg" />
                  </div>
                  <div>
                      <img src="https://cdn.images.express.co.uk/img/dynamic/143/590x/Anthem-BEta-971754.jpg?r=1534406089573" />
                  </div>
                  <div>
                      <img src="https://cdn.images.dailystar.co.uk/dynamic/184/photos/532000/620x/Days-Gone-PS4-Release-Date-gameplay-trailers-E3-2018-news-updates-for-new-zombie-games-677269.jpg?r=5bae51426c5bc" />
                  </div>
                  <div>
                      <img src="https://cdn.images.express.co.uk/img/dynamic/143/590x/Call-of-Duty-901839.jpg" />
                  </div>
                  <div>
                      <img src="https://assets.vg247.com/current//2017/06/god_of_war_e3_2017_screen_8-600x338.jpg" />
                  </div>
              </Carousel>
        </div>
<br/>
        <div>
  <div className="row">
    <div className="col s12 m7">
      <div className="card">
        <div className="card-image">
          <img src="https://cl.buscafs.com/www.levelup.com/public/uploads/images/581150_1140x516.jpg" />
          <span className="card-title">Noticia 1</span>
        </div>
        <div className="card-content">
          <p>Fortnite alcanza un impresionante récord de usuarios concurrentes, parece que el éxito del Battle Royale no tiene fin...</p>
        </div>
        <div className="card-action">
          <a href="#">Ver más</a>
        </div>
      </div>
    </div>
    <div className="col s12 m7">
      <div className="card">
        <div className="card-image">
          <img src="images/sample-1.jpg" />
          <span className="card-title">Noticia 2</span>
        </div>
        <div className="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
        </div>
        <div className="card-action">
          <a href="#">Ver más</a>
        </div>
      </div>
    </div>
    <div className="col s12 m7">
      <div className="card">
        <div className="card-image">
          <img src="images/sample-1.jpg" />
          <span className="card-title">Noticia 3</span>
        </div>
        <div className="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
        </div>
        <div className="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    )
  }
}