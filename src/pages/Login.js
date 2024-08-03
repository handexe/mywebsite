import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { Button, Container, Row } from "react-bootstrap";
import "./Pages.css";
import PropTypes from 'prop-types';

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
          <Row style={{marginLeft:"0.5rem" }}>
            <p>Lütfen Google İle Giriş Yapın.</p>
          </Row>
          <Row>
            <Button
            style={{ 
            width:"80%",
            marginLeft:"1.5rem",
            
            }}
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

Login.propTypes = {
  setIsAuth: PropTypes.string.isRequired, // veya uygun tip
};
export default Login;
