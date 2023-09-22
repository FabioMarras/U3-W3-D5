import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <Row>
      <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
        <Link to="#" className="text-decoration-none">
          TRENDING
        </Link>
        <Link to="#" className="text-decoration-none">
          PODCAST
        </Link>
        <Link to="#" className="text-decoration-none">
          MOODS AND GENRES
        </Link>
        <Link to="#" className="text-decoration-none">
          NEW RELEASES
        </Link>
        <Link to="#" className="text-decoration-none">
          DISCOVER
        </Link>
      </Col>
    </Row>
  );
};

export default TopBar;
