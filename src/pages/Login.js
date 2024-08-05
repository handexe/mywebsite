import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { Button, Container, Row } from "react-bootstrap";
import "./Pages.css";
import Footer from "../components/Footer";
function Login({ setIsAuth }) {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then(() => {
      setIsAuth(true);
      window.location.pathname = "/";
    });
  };
  return (
    <div className="loginPage">
      <Container id="login-container">
        <Container id="login-card">
          <Row>
            <p>Lütfen Google İle Giriş Yapın.</p>
          </Row>
          <Row>
            <Button variant="secondary"
            id="login-btn"
              className="login-with-google-btn"
              onClick={signInWithGoogle}>
              Google İle Giriş Yap
            </Button>
          </Row>
        </Container>
      </Container>
      <Footer/>
    </div>
  );
}

export default Login;
