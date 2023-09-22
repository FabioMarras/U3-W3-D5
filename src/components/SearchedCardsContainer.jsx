import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import SearchedCard from "./SearchedCard";

const SearchedCardsContainer = ({ title }) => {
  const albums = useSelector((state) => state.sidebar.searchResults);
  console.log(albums);

  return (
    <>
      {albums && (
        <div>
          <h2 className="text-start">{title}</h2>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
            {albums.map((album) => (
              <SearchedCard song={album} key={album.id} />
            ))}
          </Row>
        </div>
      )}
    </>
  );
};

export default SearchedCardsContainer;
