import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <>
        <Navbar style={{ backgroundColor: "#14492f" }} className="text-uppercase fw-bolder" variant="light">
          <Container>
            <Navbar.Brand href="#home">Wild</Navbar.Brand>

            <Nav>
              <Nav.Link as={Link} to="home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="service">
                Service
              </Nav.Link>
              <Nav.Link as={Link} to="blog">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="login">
                Login
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Header;
