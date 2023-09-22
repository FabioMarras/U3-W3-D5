import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeCard = ({ artist }) => {
  const [song, setSong] = useState(null);

  const handleArtist = async () => {
    const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + artist;
    const headers = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ed8257b4dbmsh87a10cf4523a33ap1b6a9fjsnfdb7824dd27d",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, headers);

      if (response.ok) {
        let data = await response.json();
        const Song = data.data[0];
        setSong(Song);
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleArtist();
  }, []);

  return (
    <>
      {song && (
        <Col className="text-center" id={song.album.id}>
          <Link to={`/album/${song.album.id}`}>
            <img className="img-fluid" src={song.album.cover_medium} alt="cover album" />
          </Link>
          <p>
            <Link to={`/album/${song.album.id}`} className="text-decoration-none">
              Album:
              {song.album.title.length < 16 ? `${song.album.title}` : `${song.album.title.substring(0, 16)}...`}
              "<br />
            </Link>
            <Link to={`/artist/${song.artist.id}`} className="text-decoration-none">
              Artist: {song.artist.name}
            </Link>
          </p>
        </Col>
      )}
    </>
  );
};

export default HomeCard;
