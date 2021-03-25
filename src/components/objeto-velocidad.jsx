import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";

export default function ObjetoVelocidad(props) {
  var content = "";
  if (props.isEvento) {
    content = (
      <Form>
        <h2>Evento</h2>
        <Form.Group controlId="formBasicEmail">
          {/* <Form.Label>v1</Form.Label> */}
          <Form.Control type="text" placeholder="v1" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          {/* <Form.Label>v2</Form.Label> */}
          <Form.Control type="text" placeholder="v2" />
        </Form.Group>
      </Form>
    );
  } else if (props.velocidad === 0) {
    content = (
      <Form>
        <h2>Marco 1</h2>
      </Form>
    );
  } else {
    content = (
      <Form>
        <h2>Marco 2</h2>
        <Form.Group controlId="formBasicEmail">
          {/* <Form.Label>v</Form.Label> */}
          <Form.Control type="text" placeholder="v" />
        </Form.Group>
      </Form>
    );
  }

  return (
    <Row className="ml-3 mr-3">
      <Image
        src={
          props.isEvento
            ? "https://via.placeholder.com/150"
            : props.velocidad === 0
            ? "https://images.vexels.com/media/users/3/157970/isolated/preview/c156b4270aea292b9b335dd463ea17eb-icono-de-planeta-tierra-icono-de-tierra-by-vexels.png"
            : "https://via.placeholder.com/150"
        }
        fluid
        className="pt-2 pb-2"
      ></Image>
      <Container fluid style={{ padding: "0" }}>
        {content}
      </Container>
    </Row>
  );
}
