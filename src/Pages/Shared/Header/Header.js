import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <>
      <Navbar className="text-uppercase fw-bolder navigation-menu" sticky="top" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Framed wildlife
          </Navbar.Brand>

          <Nav>
            <Nav.Link as={Link} to="home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="album">
              Album
            </Nav.Link>
            <Nav.Link as={Link} to="services">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="checkout">
              Checkout
            </Nav.Link>
            <Nav.Link as={Link} to="blog">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="about">
              About
            </Nav.Link>

            {user ? (
              <button className="btn btn-link text-white text-decoration-none" onClick={handleSignOut}>
                Sign Out
              </button>
            ) : (
              <Nav.Link as={Link} to="login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
