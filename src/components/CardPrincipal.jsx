import { Col, Row } from "react-bootstrap";
import HomeCard from "./Home";

const CardPrincipal = ({ type, artists }) => {
  return (
    <>
      {artists && (
        <Row id="rock">
          <Col xs={10}>
            <div>
              <h2 className="text-start">{type}</h2>
              <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
                {artists.map((artist, index) => (
                  <HomeCard key={"song-" + index} artist={artist} />
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      )}
    </>
  );
};

export default CardPrincipal;
