import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const FavouritePersonality = () => {
  return (
    <section className="fav-personality-section" >
        <Container className="data">
            <Row>
                <Col xs={12} md={6} xl={5}>
                <h1 className="text-header">Elon Musk.</h1>
                <p className="text-body">Visionary entrepreneur behind Tesla, SpaceX, Neuralink, and The Boring Company. Innovator in EVs and space exploration, aiming to colonize Mars. Known for both admiration and controversy due to his outspoken nature.</p>
                </Col>
            </Row>
        </Container>
    </section>
  );
};
