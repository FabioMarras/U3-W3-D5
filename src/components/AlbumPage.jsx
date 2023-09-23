import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import TopBar from "./TopBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const AlbumPage = () => {
  const paramams = useParams();
  const [album, setAlbum] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/album/" + paramams.id, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "ed8257b4dbmsh87a10cf4523a33ap1b6a9fjsnfdb7824dd27d",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setAlbum(data);
      } else {
        throw new Error(`Errore nel caricamento`);
      }
    } catch (error) {
      console.error("Si è verificato un errore:", error);
      throw error;
    }
  };

  useEffect(() => {
    fetchData(paramams);
  }, []);

  return (
    <Col xs={12} md={{ span: 9, offset: 3 }} className="mainPage">
      <TopBar />
      <Row>
        <Col md={3} className="pt-5 text-center" id="img-container">
          {album.cover_medium && (
            <>
              <img src={album.cover_medium} alt="" />
              <p className="text-white">{album.title}</p>
              {album.artist && <p className="text-white">{album.artist.name}</p>}
              <Button variant="success" className="me-2 mainButton " id="playButton">
                PLAY
              </Button>
            </>
          )}
        </Col>
        <Col md={8} class="p-5">
          <Row>
            <Col md={10} className="mb-5 albumlist" id="trackList">
              {album.tracks && album.tracks.data && Array.isArray(album.tracks.data) ? (
                album.tracks.data.map((track) => (
                  <p className="text-white d-flex justify-content-between" key={track.id}>
                    {track.title}
                    <span className="ms-5">
                      <FontAwesomeIcon icon={faClock} />
                      {Math.floor(track.duration / 60)}:{(track.duration % 60).toString().padStart(2, "0")}
                    </span>
                  </p>
                ))
              ) : (
                <p>Caricamento...</p>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};
export default AlbumPage;
