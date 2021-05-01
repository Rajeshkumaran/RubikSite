import React, { Component } from "react";
import "./Estimate.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import EstimateImage from "../../img/Estimation-vector.svg";

export class Estimate extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <Row>
              <h2 className="estimate-header">
                Hurray, Send us your details and get estimation for further move
              </h2>
            </Row>
            <Row>
              <Form.Group className="estimate-form-group">
                <Form.Row className="estimate-form-row">
                  <Col>
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder="Your Name"
                    />
                  </Col>
                </Form.Row>
                <br />
                <Form.Row className="estimate-form-row">
                  <Col>
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder="Your Email"
                    />{" "}
                  </Col>
                </Form.Row>
                <br />
                <Form.Row className="estimate-form-row">
                  <Col>
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder="Phone Number"
                    />
                  </Col>
                </Form.Row>
              </Form.Group>
            </Row>
          </Col>
          <Col>
            <Row>
              <h2 className="estimate-text">Get Estimate</h2>
            </Row>
            <Row className="estimation-image">
              <img src={EstimateImage} alt="estimate-img" />
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
