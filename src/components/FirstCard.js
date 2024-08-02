import React from "react";
import "./Components.css";
import iciyorum from "../assets/iciyorum.gif";
import { Container, Row, Col } from "react-bootstrap";

function FirstCard() {
  return (
    <Container id="first-card">
      <Row className="align-items-center">
        <Col md={8} className="p-4">
          <p className="h3 mb-5">Bloğuma Hoş geldiniz</p>
          <p className="h4">
            Merhaba bu siteden ilgilendiğim konular hakkında örnekli bilgiler ve
            açıklamalar bulabilirsiniz.
          </p>
          <p>
            Ayrıca merak edersen
            <a
              href="/about"
              className="link-body-emphasis link-offset-3 link-underline-opacity-50 link-underline-opacity-100-hover">
              {" "}
              buradan beni tanıyabilirsin.
            </a>
          </p>
        </Col>
        <Col md={4} className="text-center">
          <img
            src={iciyorum}
            alt="kahve içen kedi"
            style={{ width: "150px", height: "auto" }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default FirstCard;
