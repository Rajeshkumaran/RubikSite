import React, { Component } from "react";
import "./AboutUs.css";
import { Container, Row, Col } from "react-bootstrap";
import AboutUsVector from "../../img/About-us-vector.svg";

export class AboutUs extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <Row>
              <div>
                <h2 className="about-us-header">About Us....</h2>
              </div>
            </Row>
            <Row>
              <div>
                <p className="about-us-content">Home is where the heart is! We at Rubik's have the desire to design the interiors of your dream home just the way you love by adding our technical and creative expertise. Just like the name we are dedicated in solving your mind puzzles in constructing and decorating your home. Come, give us a try! </p>
              </div>
            </Row>
          </Col>
          <Col>
          <Row>
              <div>
                  <img src={AboutUsVector} className="about-us-vector" alt="about-us-vector"/>
              </div>
          </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
