import React, { Component } from "react";
import "./Services.css";
import { Container, Row, Col } from "react-bootstrap";
import ServicesModularKitchen from "../../img/Services-Modular-kitchen.svg";
import ServicesWardrobes from "../../img/Services-Wardrobe.svg";
import ServicesCrockeryUnits from "../../img/Services-crockery-units.svg";
import ServicesTvUnit from "../../img/Services-tv-unit.svg";
import ServicesFalseCeiling from "../../img/Services-fall-ceiling.svg";
import ServicesStudyUnit from "../../img/Services-study-unit.svg";
import ServicesPujaUnit from "../../img/Services-puja-unit.svg";
import ServicesWallpapers from "../../img/Services-wall.svg";
import ServicesBathroom from "../../img/Services-bathroom.svg";

export class Services extends Component {
  render() {
      let wallStyle = {
        fontWeight: '700',
        fontSize: '24px',
        color: '#3c3c3d',
        marginTop: '3%',
        marginLeft: '6%'
      };

    return (
      <Container fluid>
        <Row>
          <Col>
            <h2 className="services-header">Our Services......</h2>
          </Col>
        </Row>
        <div className="services-content-div">
          {/* Row1 */}
          <Row className="services-row">
            <Col>
              <Row>
                <Col>
                  <img src={ServicesModularKitchen} alt="service" />
                </Col>
              </Row>
              <Row>
                <span className="services-text">Modular Kitchen</span>
              </Row>
            </Col>

            <Col>
              <Row>
                <Col>
                  <img src={ServicesWardrobes} alt="service" />
                </Col>
              </Row>
              <Row>
                <span className="services-text">Wardrobes</span>
              </Row>
            </Col>

            <Col>
              <Row>
                <Col>
                  <img src={ServicesCrockeryUnits} alt="service" />
                </Col>
              </Row>
              <Row>
                <span className="services-text">Crockery units</span>
              </Row>
            </Col>
          </Row>

          {/* Row 2 */}
          <Row className="services-row">
            <Col>
              <Row>
                <Col>
                  <img src={ServicesTvUnit} alt="service" />
                </Col>
              </Row>
              <Row>
                <span className="services-text">TV Unit</span>
              </Row>
            </Col>

            <Col>
              <Row>
                <Col>
                  <img src={ServicesFalseCeiling} alt="service" />
                </Col>
              </Row>
              <Row>
                <span className="services-text">False Ceiling</span>
              </Row>
            </Col>

            <Col>
              <Row>
                <Col>
                  <img src={ServicesStudyUnit} alt="service" />
                </Col>
              </Row>
              <Row>
                <span className="services-text">Study Unit</span>
              </Row>
            </Col>
          </Row>

           {/* Row 3 */}
           <Row className="services-row">
            <Col>
              <Row>
                <Col>
                  <img src={ServicesPujaUnit} alt="service" />
                </Col>
              </Row>
              <Row>
                <span className="services-text">Puja Unit</span>
              </Row>
            </Col>

            <Col>
              <Row>
                <Col>
                  <img src={ServicesWallpapers} alt="service" />
                </Col>
              </Row>
              <Row>
                <span className="services-text" style={wallStyle}>Wall Papers & Wall paints</span>
              </Row>
            </Col>

            <Col>
              <Row>
                <Col>
                  <img src={ServicesBathroom} alt="service" />
                </Col>
              </Row>
              <Row>
                <span className="services-text">Bathroom</span>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
