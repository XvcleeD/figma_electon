import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import InputGroup from "react-bootstrap/InputGroup";
import { ReactComponent as ReactLogo } from "./electon-logo.svg";
import { ReactComponent as User } from "./user.svg";
import { ReactComponent as Shopping } from "./shopping-cart.svg";
import { ReactComponent as Heart } from "./heart.svg";
import "./navbar.css";

export function Top() {
  return (
    <Navbar className="nab-bg">
      <Container className="gap-5 ">
        <Navbar.Brand href="#home">
          <ReactLogo />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <InputGroup className="navbar-input rounded-4">
            <Form.Control
              className="rounded-4 border-0"
              placeholder="Serach any things"
              aria-label="Serach any things"
              aria-describedby="basic-addon2"
            />
            <Button variant="warning" className="rounded-4">
              Search
            </Button>
          </InputGroup>
        </Nav>
        <Navbar.Text>
          <User />
          <a href="#login">Sing in</a>
        </Navbar.Text>
        <Navbar.Text>
          <Heart />
          <div></div>
        </Navbar.Text>
        <Navbar.Text>
          <Shopping />
          <div></div>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}
