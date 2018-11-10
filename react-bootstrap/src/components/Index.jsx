import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './index.css';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
import Navbar from './Navbar';

export default class Index extends Component {
  render() {
    return (
      <div className='index'>
        <Navbar></Navbar>
        <div>
          <Carousel className='carrusel'>
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
        <br />
        <br/>
        <br/>
        <div>
          <div className="row blog-card">
            <div className="col s12 m7 blog-card">
              <div className="card">
                <div className="card-image">
                  <img src="https://cl.buscafs.com/www.levelup.com/public/uploads/images/581150_1140x516.jpg" />
                  <span className="card-title">Fornite Juego más popular</span>
                </div>
                <div className="card-content">
                  <p>Fortnite alcanza un impresionante récord de usuarios concurrentes, parece que el éxito del Battle Royale no tiene fin. A todo el mundo le está gustando jugar...</p>
                </div>
                <div className="card-action">
                  <a href="#">Ver más</a>
                </div>
              </div>
            </div>
            <div className="col s12 m7">
              <div className="card">
                <div className="card-image">
                  <img src="https://cl.buscafs.com/www.levelup.com/public/uploads/images/581275_1140x516.jpg" />
                  <span className="card-title">Nintendo: no es realista pensar que cada juego importante llegará a Switch</span>
                </div>
                <div className="card-content">
                  <p>Si analizamos la historia de las consolas de Nintendo y su relación con los juegos third-party, se podría considerar que GameCube fue la última plataforma que fue tomada en cuenta por muchas compañías...</p>
                </div>
                <div className="card-action">
                  <a href="#">Ver más</a>
                </div>
              </div>
            </div>
            <div className="col s12 m7">
              <div className="card">
                <div className="card-image">
                  <img src="https://cl.buscafs.com/www.levelup.com/public/uploads/images/581266_1140x516.jpg" />
                  <span className="card-title">RUMOR: filtran fecha de lanzamiento de PUBG para PlayStation 4</span>
                </div>
                <div className="card-content">
                  <p>En los últimos días ha habido mucho ruido en torno a una posible versión para PlayStation 4 de PLAYERUNKNOWN'S BATTLEGROUNDS, el popular Battle Royale de PUBG Corp...</p>
                </div>
                <div className="card-action">
                  <a href="#">Ver más</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

