// import Home from "../pages/Home";
// import About from "../pages/About";
// import Blog from "../pages/Blog.js";
// import Contact from "../pages/Contact.js";
// import Login from "../pages/Login.js";
// import AddPost from "../pages/AddPost.js";
// import ProtectedRoute from "./ProtecedRoute";

import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Components.css";

function MyNavbar({ signUserOut, isAuth, userEmail }) {
  return (
    <div id="app-navbar">
      <Navbar
        expand="lg"
        variant="light"
        className="justify-content-center shadow-sm"
        style={{
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          minWidth: "50%",
          paddingLeft: "5rem",
          borderRadius: "15px",
          backgroundColor: "#e5e5e5", // Açık kahverengi
          zIndex: 1000,
          boxShadow: "0 4px 10px rgba(0, 0, 0)",
        }}>
        <Container>
          <Navbar.Brand as={Link} to="/" className="mx-auto">
            Hande
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/">
                Anasayfa
              </Nav.Link>
              <Nav.Link as={Link} to="/blog">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                Hakkımda
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                İletişim
              </Nav.Link>
              {isAuth ? (
                <>
                  {userEmail === "hndegmb@gmail.com" && (
                    <>
                      
                      <Nav.Link as={Link} to="/add-post">
                        Blog Ekle
                      </Nav.Link>
                      <Nav.Link as={Link} to="/delete-post">
                        Blog Sil
                      </Nav.Link>
                    </>
                  )}
                  <Nav.Link onClick={signUserOut}>Log Out</Nav.Link>
                </>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
