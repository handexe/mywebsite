import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { Button } from "react-bootstrap";

function Login({ setIsAuth }) {
  
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then(() => {
      setIsAuth(true);
      window.location.pathname = "/";
    });
  };
  return (
    <div className="loginPage">
      <p>Sign In With Google to Continue</p>
      <Button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </Button>
    </div>
  );
}

export default Login;
