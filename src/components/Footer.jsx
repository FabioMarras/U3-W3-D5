import { Link } from "react-router-dom";
import next from "../assets/playerbuttons/Next.png";
import play from "../assets/playerbuttons/Play.png";
import previous from "../assets/playerbuttons/Previous.png";
import repeat from "../assets/playerbuttons/Repeat.png";
import shuffle from "../assets/playerbuttons/Shuffle.png";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="container-fluid fixed-bottom bg-container pt-1">
      <Row className="row">
        <Col lg={{ span: 10, offset: 2 }}>
          <Row>
            <Col
              xs={{ span: 6, offset: 3 }}
              md={{ span: 4, offset: 4 }}
              lg={{ span: 2, offset: 5 }}
              className="playerControls mt-1"
            >
              <Row>
                <div className="d-flex justify-content-between">
                  <Link to="#">
                    <img src={shuffle} alt="shuffle" />
                  </Link>
                  <Link to="#">
                    <img src={previous} alt="previous" />
                  </Link>
                  <Link to="#">
                    <img src={play} alt="play" />
                  </Link>
                  <Link to="#">
                    <img src={next} alt="next" />
                  </Link>
                  <Link to="#">
                    <img src={repeat} alt="repeat" />
                  </Link>
                </div>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-center playBar py-3">
            <Col xs={8} md={6}>
              <div className="progress"></div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
