import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components.css";

function MyNavbar({ signUserOut, isAuth, userEmail }) {
  return (
    <Navbar
      
      expand="lg"
      className="shadow-sm " 
      id="navbar-custom"// CSS sınıfını ekleyin
    >
      <Container>
        <Navbar.Brand as={Link} to="/" id="navbar-brand">
          Hande G
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" id="nav-link">
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
  );
}

export default MyNavbar;
