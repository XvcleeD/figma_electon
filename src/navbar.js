import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import InputGroup from "react-bootstrap/InputGroup";
import { ReactComponent as ReactLogo } from "./electon-logo.svg";
import { ReactComponent as UserLogo } from "./user.svg";
import { Shopping } from "./shopping-cart.svg";
import { Heart } from "./heart.svg";
import "./navbar.css";

export function Top() {
  return (
    <Navbar className="nab-bg">
      <Container className="gap-5">
        <Navbar.Brand href="#home">
          <ReactLogo />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <InputGroup className="">
            <Form.Control
              className="position-relative rounded-pill"
              placeholder="Serach any things"
              aria-label="Serach any things"
              aria-describedby="basic-addon2"
            />
            <Button
              variant="warning"
              className="position-absolute top-50 start-100 translate-middle rounded-pill"
            >
              Search
            </Button>
          </InputGroup>
        </Nav>
        <Navbar.item>
          <UserLogo />
          <a href="#login">Mark Otto</a>
        </Navbar.item>
      </Container>
    </Navbar>
  );
}
