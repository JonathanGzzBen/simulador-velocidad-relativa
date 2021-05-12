import React, { useState } from "react";
import { Container, Row, Col, Image, Form } from "react-bootstrap";

export default function Simulator() {
  const [marco2Image, setMarco2Image] = useState(
    "/images/cohete-estacionado.jpeg"
  );
  const [eventoImage, setEventoImage] = useState(
    "/images/cohete-estacionado.jpeg"
  );
  const [v, setV] = useState("");
  const [v1, setV1] = useState("");
  const [v2, setV2] = useState("");

  const handleVChange = (v) => {
    setV(v);
    if (v1 === "" && v2 === "") {
    } else {
      setV(v);
      setV1(Number(v2) + Number(v));
    }
  };

  const handleV1Change = (v1) => {
    setV1(v1);
    setV2(Number(v1) - Number(v));
  };

  const handleV2Change = (v2) => {
    setV2(v2);
    setV1(Number(v2) + Number(v));
  };

  return (
    <Container className="mt-4 mb-4">
      <Row className="ml-3 mr-3">
        <Col>
          <Image
            src={
              v > 0
                ? "/images/rocket-right.png"
                : v < 0
                ? "/images/rocket-left.png"
                : "/images/rocket.png"
            }
            fluid
            className="pt-2 pb-2"
          ></Image>
          <Container fluid style={{ padding: "0" }}>
            <Form>
              <h2>Marco 2</h2>
              <Form.Group controlId="v-input">
                <Form.Label>v</Form.Label>
                <Form.Control
                  value={v}
                  type="text"
                  placeholder="v"
                  onChange={(e) => handleVChange(e.target.value)}
                  autoComplete="off"
                />
              </Form.Group>
            </Form>
          </Container>
        </Col>
        <Col>
          <Image
            src={
              v1 > 0
                ? "/images/rocket-right.png"
                : v1 < 0
                ? "/images/rocket-left.png"
                : "/images/rocket.png"
            }
            fluid
            className="pt-2 pb-2"
          ></Image>
          <Container fluid style={{ padding: "0" }}>
            <Form>
              <h2>Evento</h2>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>v1</Form.Label>
                <Form.Control
                  value={v1}
                  v1="v1-input"
                  type="text"
                  placeholder="v1"
                  onChange={(e) => handleV1Change(e.target.value)}
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>v2</Form.Label>
                <Form.Control
                  value={v2}
                  type="text"
                  placeholder="v2"
                  onChange={(e) => handleV2Change(e.target.value)}
                  autoComplete="off"
                />
              </Form.Group>
            </Form>
          </Container>
        </Col>
        <Col>
          <Image src="/images/earth.png" fluid className="pt-2 pb-2"></Image>
          <Container fluid style={{ padding: "0" }}>
            <Form>
              <h2>Marco 1</h2>
            </Form>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
