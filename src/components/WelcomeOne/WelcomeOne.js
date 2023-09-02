import welcomeOne from "@/data/welcomeOne";
import Link from "next/link";
import React, { Fragment } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const {
  shape,
  image,
  experience,
  tagline,
  title,
  text,
  bottomTitle,
  points,
  person,
  personName,
  bottomRightTitle,
} = welcomeOne;

const WelcomeOne = () => {
  return (
    <section className="welcome-one">
    <div>  
      <div className="welcome-one-shape animated slideInLeft">
        <Image src={shape.src} alt="" />
      </div>
      <Container>
        <Row>
          <Col xl={6} className="animated slideInLeft">
          <br></br>
            <div className="welcome-one__right">
              <div className="section-title text-left">
              <h2 className="section-Welcome__title">¿Quienes Somos?</h2>
              </div>
              <p className="welcome-one__left-text">En el año 2005 nace en Ecuador, FRUTADELI S.A., la empresa productora y exportadora de la mejor fruta, “del mejor banano del mundo”. Empresa ecuatoriana reconocida en los mercados internacionales de Europa, Asia y Norte América por brindar un servicio de calidad insuperable...</p>
              <p className="welcome-one__left-text"><a className="botonMas" href=""> Ver más </a></p>
              <hr />
            </div>

            <div className="welcome-one__right">
              <div className="section-title text-right">
               
                <h2 className="section-Welcome__title_right">Nuestro Producto</h2>
              </div>
              <p className="welcome-one__right-text">Nuestra deliciosa fruta tropical es muy nutritiva, rica en potasio, calcio, magnesio, fósforo, hierro y en vitaminas A, B, C y E. Es un alimento ideal para los niños y deportistas por su alto valor nutritivo. No contiene grasas ni colesterol...</p>
              <p className="welcome-one__right-text"><a className="botonMas" href=""> Ver más </a></p>
              <hr />
            </div>

            <div className="welcome-one__right">
              <div className="section-title text-left">
               
                <h2 className="section-Welcome__title">Servicio Logístico</h2>
              </div>
              <p className="welcome-one__left-text">Nuestros servicios están basados en un absoluto compromiso de mantener el banano ecuatoriano como la fruta líder en el mercado internacional de acuerdo a las exigencias y requerimiento de nuestros clientes...</p>
              <p className="welcome-one__left-text"><a className="botonMas" href=""> Ver más </a></p>
              <hr />
            </div>

          </Col>
          <Col xl={6} className="marginMedio">
          <div className="design-studio__inner">
              
              <div className="design-studio__video-link">
                <a
                  style={{ cursor: "pointer" }}
                  className="video-popup"
                >
                  <div className="design-studio__video-icon">
                    <span className="icon-play-button"></span>
                    <i className="ripple"></i>
                  </div>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      </div>  
    </section>
  );
};

export default WelcomeOne;
