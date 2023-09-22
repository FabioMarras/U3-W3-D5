import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SearchedCard = ({ album }) => {
  console.log(album);
  return (
    <>
      {album && (
        <Col className="text-center" id={album.id}>
          <Link to={""}>
            <img className="img-fluid" src={album.album.cover_medium} alt="1" />
          </Link>
          <p>
            <Link to={""} className="text-decoration-none">
              Album: {album.title}
              <br />
            </Link>
            <Link to={""} className="text-decoration-none">
              Artist: {album.name}
            </Link>
          </p>
        </Col>
      )}
    </>
  );
};

export default SearchedCard;
