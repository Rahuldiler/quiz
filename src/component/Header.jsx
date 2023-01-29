import React, { useContext } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AppContext } from "../auth/context";
import "../css/header.css";
const Header = () => {
  const [token, setToken] = useContext(AppContext);
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Quiz Context</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {token ? (
                <Link to="/quiz">Go to Quiz</Link>
              ) : (
                <>
                  <Nav.Link href="#home">Signup</Nav.Link>
                  <Nav.Link href="#link">Login</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
