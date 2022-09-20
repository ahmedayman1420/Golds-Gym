// ========---======== < React > ========---======== //
import React from "react";

// ========---======== < React-Bootstrap > ========---======== //
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// ========---======== < React-Router-Dom > ========---======== //
import { NavLink } from "react-router-dom";

// ========---======== < Logo > ========---======== //
import logo from "../../Assets/Images/logo-3.jpg";

// ========---======== < Component > ========---======== //
function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img
            src={logo}
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/exercises">
              Exercises
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
