// import Home from "../pages/Home";
// import About from "../pages/About";
// import Blog from "../pages/Blog.js";
// import Contact from "../pages/Contact.js";
// import Login from "../pages/Login.js";
// import AddPost from "../pages/AddPost.js";
// import ProtectedRoute from "./ProtecedRoute";

import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";


function MyNavbar({signUserOut, isAuth, userEmail}) {

  return (
    <div className="App">
      
        <Navbar
          variant="light"
          className="justify-content-center shadow-sm"
          style={{
            position: "fixed",
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            minWidth: "50%",
            borderRadius: "15px",
            backgroundColor: "#e5e5e5", // Açık kahverengi
            zIndex: 1000,
            boxShadow: "0 4px 10px rgba(0, 0, 0)",
          }}>
          <Navbar.Brand to="/" className="mx-auto">
            Hande G
          </Navbar.Brand>
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
                {userEmail === "hndegmb@gmail.com" && ( // Özel sekme yalnızca belirli kullanıcı için
                  <Nav.Link as={Link} to="/add-post">
                    Blog Ekle
                  </Nav.Link>
                )}
                <Nav.Link onClick={signUserOut}>Log Out</Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar>
        
      
    </div>
  );
}

export default MyNavbar;
