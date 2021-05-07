import React, { useState } from "react";
import { Container, Row, Col, Image, Form } from "react-bootstrap";

export default function Simulator() {
  const [fisicaGalileana, setFisicaGalileana] = useState(true);
  const [v, setV] = useState("");
  const [v1, setV1] = useState("");
  const [v2, setV2] = useState("");

  const calculateV1 = (v, v2, fisicaGalileana) =>
    fisicaGalileana
      ? Number(v2) + Number(v)
      : (Number(v2) + Number(v)) / (1 + Number(v2) * Number(v));

  const calculateV2 = (v, v1, fisicaGalileana) =>
    fisicaGalileana
      ? Number(v1) - Number(v)
      : (Number(v1) - Number(v)) / (1 - Number(v1) * Number(v));

  const handleVChange = (v) => {
    setV(v);
    if (v1 === "" && v2 === "") {
    } else {
      setV2(calculateV2(v, v1, fisicaGalileana));
    }
  };

  const handleV1Change = (v1) => {
    setV1(v1);
    setV2(calculateV2(v, v1, fisicaGalileana));
  };

  const handleV2Change = (v2) => {
    setV2(v2);
    setV1(calculateV1(v, v2, fisicaGalileana));
  };

  const handleTipoFisicaChange = (tipoFisica) => {
    const fisicaGalileana = tipoFisica === "galileana";
    setFisicaGalileana(fisicaGalileana);
    setV2(calculateV2(v, v1, fisicaGalileana));
  };

  return (
    <Container className="mt-4 mb-4">
      <Row className="ml-3 mr-3">
        <Form>
          <fieldset>
            <Form.Group
              controlId="tipo-fisica"
              onChange={(e) => handleTipoFisicaChange(e.target.value)}
            >
              <Form.Check
                type="radio"
                value="galileana"
                defaultChecked
                name="tipo-fisica"
                label="Física Galileana"
              />
              <Form.Check
                type="radio"
                value="clasica"
                name="tipo-fisica"
                label="Física Clásica"
              />
            </Form.Group>
          </fieldset>
        </Form>
      </Row>
      <Row className="ml-3 mr-3">
        <Col>
          <Image
            src="https://via.placeholder.com/150"
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
            src="https://via.placeholder.com/150"
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
          <Image
            src="https://images.vexels.com/media/users/3/157970/isolated/preview/c156b4270aea292b9b335dd463ea17eb-icono-de-planeta-tierra-icono-de-tierra-by-vexels.png"
            fluid
            className="pt-2 pb-2"
          ></Image>
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
