import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";

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

  const setIfIsValidPhysicalPhysicsString = (value, setter) => {
    if (0 <= Number(value) && Number(value) < 1) {
      setter();
    } else if (value === "-" || (-1 < Number(value) && Number(value) < 0)) {
      setter();
    }
  };

  const handleVChange = (v) => {
    const setVAndCalculate = () => {
      setV(v);
      if (v1 === "") {
      } else {
        setV2(calculateV2(v, v1, fisicaGalileana));
      }
    };

    fisicaGalileana
      ? setVAndCalculate()
      : setIfIsValidPhysicalPhysicsString(v, setVAndCalculate);
  };

  const handleV1Change = (v1) => {
    const setV1AndCalculate = () => {
      setV1(v1);
      setV2(calculateV2(v, Number(v1), fisicaGalileana));
    };
    fisicaGalileana
      ? setV1AndCalculate()
      : setIfIsValidPhysicalPhysicsString(v1, setV1AndCalculate);
  };

  const handleV2Change = (v2) => {
    const setV2AndCalculate = () => {
      setV2(v2);
      setV1(calculateV1(v, Number(v2), fisicaGalileana));
    };
    fisicaGalileana
      ? setV2AndCalculate()
      : setIfIsValidPhysicalPhysicsString(v2, setV2AndCalculate);
  };

  const handleTipoFisicaChange = (tipoFisica) => {
    const fisicaGalileana = tipoFisica === "galileana";
    setFisicaGalileana(fisicaGalileana);
    if (fisicaGalileana) {
      setV2(calculateV2(v, v1, fisicaGalileana));
    } else {
      if (!(-1 < Number(v1) && Number(v1) < 1)) {
        setV1("0");
      }
      if (!(-1 < Number(v2) && Number(v2) < 1)) {
        setV2("0");
      }
      if (!(-1 < Number(v) && Number(v) < 1)) {
        setV("0");
      }
    }
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
              <Form.Label>v</Form.Label>
              <InputGroup>
                <FormControl
                  placeholder="v"
                  aria-label="v"
                  aria-describedby="c-v"
                  value={v}
                  onChange={(e) => handleVChange(e.target.value)}
                  autoComplete="off"
                />
                <InputGroup.Append>
                  <InputGroup.Text id="c-v">c</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
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
              <Form.Label>v1</Form.Label>
              <InputGroup>
                <FormControl
                  placeholder="v1"
                  aria-label="v1"
                  aria-describedby="c-v1"
                  value={v1}
                  onChange={(e) => handleV1Change(e.target.value)}
                  autoComplete="off"
                />
                <InputGroup.Append>
                  <InputGroup.Text id="c-v1">c</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
              <Form.Label>v2</Form.Label>
              <InputGroup>
                <FormControl
                  placeholder="v2"
                  aria-label="v2"
                  aria-describedby="c-v2"
                  value={v2}
                  onChange={(e) => handleV2Change(e.target.value)}
                  autoComplete="off"
                />
                <InputGroup.Append>
                  <InputGroup.Text id="c-v2">c</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
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
