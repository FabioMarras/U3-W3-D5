import { Button, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopBar from "./TopBar";
import ArtistPageContainer from "./ArtistPageContainer";

const ArtistPageCopy = () => {
  const param = useParams();
  const [tracks, setTracks] = useState([]);
  const [artist, setArtist] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/artist/" + param.id, {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": "ed8257b4dbmsh87a10cf4523a33ap1b6a9fjsnfdb7824dd27d",
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          },
        });
        if (response.ok) {
          const artist = await response.json();
          setArtist(artist);
          setTracks(artist.tracklist);
        }
      } catch (exception) {
        console.error(exception);
      }
    };

    fetchData();
  }, []);

  console.log(tracks);
  console.log(artist);
  return (
    <>
      {tracks && (
        <Col xs={12} md={{ span: 9, offset: 3 }} className="mainPage">
          <TopBar />
          <Row>
            <Col xs={12} md={10} className="mt-5">
              <h2 className="titleMain">{artist.name}</h2>
              <div id="followers">{artist.nb_fan} followers</div>
              <div className="d-flex justify-content-center" id="button-container">
                <Button variant="success" className="me-2 mainButton " id="playButton">
                  PLAY
                </Button>
                <Button variant="outline-light" className="mainButton " id="followButton">
                  FOLLOW
                </Button>
              </div>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={{ span: 10, offset: 1 }} className="p-0">
              <div className="mt-4 d-flex justify-content-start"></div>
              <ArtistPageContainer name={artist.name} />
              <div className="pt-5 mb-5"></div>
            </Col>
          </Row>
        </Col>
      )}
    </>
  );
};

export default ArtistPageCopy;
