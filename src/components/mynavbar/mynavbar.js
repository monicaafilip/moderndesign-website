import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import "./mynavbar.css";
import logo from "../../assets/initial-logo.png";

const MyNavbar = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand className="nav-link" href="/moderndesignWebsite">
          <img className="img fluid logoImg" src={logo} alt="logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav.Link className="nav-link" href="/moderndesignWebsite/acasa">
            Acasă
          </Nav.Link>
          <Nav.Link className="nav-link" href="/moderndesignWebsite/desprenoi">
            Despre noi
          </Nav.Link>
          <Nav.Link className="nav-link" href="/moderndesignWebsite/produse">
            Produse
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
