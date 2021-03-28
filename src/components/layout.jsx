import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import Link from "next/link";

export default function Layout({ children }) {
  //   return <Container fluid>{children}</Container>;
  return (
    <Container fluid>
      <Navbar bg="light" expand="lg">
        <Link href="/" passHref>
          <Navbar.Brand>Velocidad Relativa</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/" passHref>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href="/" passHref>
              <Nav.Link>Link</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container fluid className="pt-4">
        <Row className="justify-content-center">
          <Col md={6}>{children}</Col>
        </Row>
      </Container>
    </Container>
  );
}
