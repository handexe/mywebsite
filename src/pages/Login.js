import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { Button, Container, Row } from "react-bootstrap";
import "./Pages.css";
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
            <Button
              className="login-with-google-btn"
              onClick={signInWithGoogle}>
              Google İle Giriş Yap
            </Button>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Login;
