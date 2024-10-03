import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./Components.css";
function Footer() {
  return (
    <Container id="footer">
      <Row>
        <Col id="footer-column" >
        <h3>Bağlantılar</h3>
          <a
            href="/about"
            className="link-light link-offset-3 link-underline-opacity-50 link-underline-opacity-100-hover">
          <p>Hakkımda</p>  
          </a>

          <a 
            href="https://github.com/handexe"
            className="link-light link-offset-3 link-underline-opacity-50 link-underline-opacity-100-hover">
            <p>Git Hub</p>
          </a>
          <a
            href="/contact"
            className="link-light  link-offset-3 link-underline-opacity-50 link-underline-opacity-100-hover">
            <p>İletişim</p>
          </a>
        </Col>
        <Col id="footer-column">
        <h3>Sosyal Medya</h3>
          <a href="https://www.instagram.com/0.fonce/" className="link-light link-offset-3 link-underline-opacity-50 link-underline-opacity-100-hover">
            <p>Instagram</p>
          </a>
          {/* <a href="https://www.linkedin.com/in/hande-g%C3%B6mbe-69a5b823a/" className="link-light link-offset-3 link-underline-opacity-50 link-underline-opacity-100-hover">
            <p>Linkedin</p>
          </a> */}
          <p>
            Discord : foncexe
          </p>

        </Col>
      </Row>

    </Container>
  );
}

export default Footer;
