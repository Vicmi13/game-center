import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './login.css';

export default class Login extends Component {
  render() {
    return (

      <div className="container-fluid">
        <div className="d-flex justify-content-center h-100 log">
          <div className="card">
            <div className="card-header">
              <h3>Incia Sesión</h3>
              <div className="d-flex justify-content-end social_icon">
                <span><i className="fab fa-facebook-square" /></span>
                <span><i className="fab fa-google-plus-square" /></span>
                <span><i className="fab fa-twitter-square" /></span>
              </div>
            </div>
            <div className="card-body">
              <form>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-user" /></span>
                  </div>
                  <input type="text" className="textoLogo" placeholder="Usuario" />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-key" /></span>
                  </div>
                  <input type="password" className="textoLogo" placeholder="Contraseña" />
                </div>
                <div className="form-group">
                  <Link to='/Index'>
                    <input type="submit" defaultValue="Login" className="btn float-right login_btn" />
                  </Link>
                </div>
              </form>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                ¿No tienes una cuenta?<a href="#">Regístrate</a>
              </div>
              <div className="d-flex justify-content-center">
                <a href="#">¿Olvidaste tu contraseña?</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
