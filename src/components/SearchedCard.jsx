import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SearchedCard = (album) => {
  console.log(album);
  return (
    <>
      {album && (
        <Col className="text-center" id={album.song.album.id}>
          <Link to={`/album/${album.song.album.id}`}>
            <img className="img-fluid" src={album.song.album.cover_medium} alt="1" />
          </Link>
          <p>
            <Link to={`/album/${album.song.album.id}`} className="text-decoration-none">
              Album: {album.song.album.title}
              <br />
            </Link>
            <Link to={`/artist/${album.song.artist.id}`} className="text-decoration-none">
              Artist: {album.song.artist.name}
            </Link>
          </p>
        </Col>
      )}
    </>
  );
};

export default SearchedCard;
