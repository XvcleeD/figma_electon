import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { ReactComponent as Truck } from "./group.svg";
import { ReactComponent as Loc } from "./location.svg";

export function TextLinkExample() {
  return (
    <Navbar>
      <Container>
        <Navbar.Text>Need help? Call us: (+98) 0234 456 789</Navbar.Text>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end gap-5">
          <Navbar.Text>
            <Loc className="mx-2" /> Our store
          </Navbar.Text>
          <Navbar.Text>
            <Truck className="mx-2" /> Track your order
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
