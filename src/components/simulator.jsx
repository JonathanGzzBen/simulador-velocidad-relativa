import { Container, Row, Col, Image } from "react-bootstrap";
import ObjetoVelocidad from "./objeto-velocidad";

export default function Simulator() {
  return (
    <Container className="mt-4 mb-4">
      <Row>
        <Col>
          <ObjetoVelocidad />
        </Col>
        <Col>
          <ObjetoVelocidad isEvento={true} />
        </Col>
        <Col>
          <ObjetoVelocidad velocidad={0} />
        </Col>
      </Row>
    </Container>
  );
}
