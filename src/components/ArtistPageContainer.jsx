import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import SearchedCard from "./SearchedCard";
import { useEffect, useState } from "react";

const ArtistPageContainer = (tracks) => {
  const [trackResult, setTrackResult] = useState([]);

  console.log(tracks);
  const URL = tracks.tracks;
  console.log(URL);
  const URLFORCE = "https://cors-anywhere.herokuapp.com/" + tracks.tracks;

  useEffect(() => {
    const fetchDataTrack = async () => {
      try {
        const response = await fetch(tracks.tracks, {
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
      }
    };

    fetchDataTrack();
  }, [tracks.tracks]);

  console.log(trackResult);

  return (
    <>
      <div>
        <h3 className="text-start">Tracks ciao </h3>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
          {trackResult.map((Track) => (
            <Col className="text-center" id={Track.id}>
              <img className="img-fluid" src={Track.contributors.picture_medium} alt="1" />
              <p>{Track.rank}</p>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default ArtistPageContainer;
