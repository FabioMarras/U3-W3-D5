import { Col, Row, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import SearchedCard from "./SearchedCard";
import { useEffect, useState } from "react";

const ArtistPageContainer = ({ name }) => {
  const [trackResult, setTrackResult] = useState([]);
  const [loading, setLoading] = useState(true);

  //   console.log(tracks);
  //   const URL = tracks.tracks;
  //   console.log(URL);
  //   const URLFORCE = "https://cors-anywhere.herokuapp.com/" + tracks.tracks;
  const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
  console.log(name);

  useEffect(() => {
    if (name) {
      const fetchDataTrack = async () => {
        try {
          const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${name}`, {
            method: "GET",
            headers: {
              "X-RapidAPI-Key": "ed8257b4dbmsh87a10cf4523a33ap1b6a9fjsnfdb7824dd27d",
              "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            },
          });
          if (response.ok) {
            const data = await response.json();
            setTrackResult(data);
          } else {
            console.log("Errore");
          }
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

      fetchDataTrack();
    }
  }, [name]);

  console.log(trackResult);

  const spinner = (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );

  return (
    <>
      <div>
        <h3 className="text-start text-white">Tracks ciao </h3>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
          {loading ? (
            spinner
          ) : trackResult.data.length > 0 ? (
            trackResult.data.map((Track) => (
              <Col className="text-center" id={Track.id}>
                {console.log(Track)}
                <img className="img-fluid" src={Track.album.cover_medium} alt="1" />
                <p className="text-white mb-0">Track: {Track.title}</p>
                <p className="text-white">Album: {Track.album.title}</p>
              </Col>
            ))
          ) : (
            <p>Mi dispiace ma non abbiamo trovato nessun contenuto</p>
          )}
        </Row>
      </div>
    </>
  );
};

export default ArtistPageContainer;
