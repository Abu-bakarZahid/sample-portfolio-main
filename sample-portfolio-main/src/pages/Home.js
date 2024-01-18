import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import portfolioPicture4 from "../assets/img/portfolio-picture4.png";

export const Home = () => {
  return (
    <section className="home">
      <Container>
        <Row className="aligh-items-center">
          <Col className="intro-text">
            <div>
              <h1>{`Hi! I'm Abubakar`}</h1>
              <p>
                I am a student at UMT, enrolled in Advanced Web and
                Technologies. I am a student at UMT, enrolled in Advanced Web
                and Technologies. I am a student at UMT, enrolled in Advanced
                Web and Technologies.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div>
              <img src={portfolioPicture4} alt="PortfolioPicture4" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
