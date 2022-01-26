import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import LinkContainer from "react-router-bootstrap/LinkContainer";


const NavBar = () => {
    return <Navbar className="rounded" bg="dark" variant="dark" expand="sm">
    <Container>
      <Navbar.Brand href="#home">PicMe</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <LinkContainer to="/">
          <Nav.Link href="/">Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/favourites">
          <Nav.Link href="/favourites">Favourites</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/mostLiked">
          <Nav.Link href="/mostLiked">Most Liked</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
}

export default NavBar;