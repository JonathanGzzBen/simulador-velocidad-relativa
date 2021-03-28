import React from "react";
import { Container, Row, Col, Image, Form } from "react-bootstrap";

export default class Simulator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      v: "",
      v1: "",
      v2: "",
    };
    this.onVChange = this.onVChange.bind(this);
    this.onV1Change = this.onV1Change.bind(this);
    this.onV2Change = this.onV2Change.bind(this);
  }
  onVChange(e) {
    if (this.state.v1 === "" && this.state.v2 === "") {
      this.setState({
        v: e.target.value,
      });
    } else {
      this.setState({
        v: e.target.value,
        v1: Number(this.state.v2) + Number(e.target.value),
      });
    }
  }
  onV1Change(e) {
    this.setState({
      v1: e.target.value,
      v2: Number(e.target.value) - Number(this.state.v),
    });
  }
  onV2Change(e) {
    this.setState({
      v2: e.target.value,
      v1: Number(e.target.value) + Number(this.state.v),
    });
  }
  render() {
    return (
      <Container className="mt-4 mb-4">
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
                    value={this.state.v}
                    type="text"
                    placeholder="v"
                    onChange={this.onVChange}
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
                    value={this.state.v1}
                    v1="v1-input"
                    type="text"
                    placeholder="v1"
                    onChange={this.onV1Change}
                    autoComplete="off"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>v2</Form.Label>
                  <Form.Control
                    value={this.state.v2}
                    type="text"
                    placeholder="v2"
                    onChange={this.onV2Change}
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
}
