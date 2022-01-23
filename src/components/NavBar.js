import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";


const NavBar = () => {
    return <Navbar className="rounded" bg="dark" variant="dark" expand="sm">
    <Container>
      <Navbar.Brand href="#home">PicMe</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#favourites">Favourites</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
}

export default NavBar;