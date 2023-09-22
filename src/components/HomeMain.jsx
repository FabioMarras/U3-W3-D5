import { Col, Row } from "react-bootstrap";

import { useEffect, useState } from "react";
import MainLinks from "./TopBar";
import SearchedCardsContainer from "./SearchedCardsContainer";
import CardPrincipal from "./CardPrincipal";

const HomeMain = () => {
  let rockArtists = ["queen", "u2", "thepolice", "eagles", "thedoors", "oasis", "thewho", "bonjovi"];
  let popArtists = ["maroon5", "coldplay", "onerepublic", "jamesblunt", "katyperry", "arianagrande"];
  let hipHopArtists = ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"];

  const [rockRandomArtists, setRockRandomArtists] = useState([]);
  const [popRandomArtists, setPopRandomArtists] = useState([]);
  const [hipHopRandomArtists, setHipHopRandomArtists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const RockRandomArtists = [];
      const PopRandomArtists = [];
      const HipHopRandomArtists = [];

      while (RockRandomArtists.length < 4) {
        const artist = rockArtists[Math.floor(Math.random() * rockArtists.length)];
        if (!RockRandomArtists.includes(artist)) {
          RockRandomArtists.push(artist);
        }
      }

      while (PopRandomArtists.length < 4) {
        const artist = popArtists[Math.floor(Math.random() * popArtists.length)];
        if (!PopRandomArtists.includes(artist)) {
          PopRandomArtists.push(artist);
        }
      }

      while (HipHopRandomArtists.length < 4) {
        const artist = hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)];
        if (!HipHopRandomArtists.includes(artist)) {
          HipHopRandomArtists.push(artist);
        }
      }

      setRockRandomArtists(RockRandomArtists);
      setPopRandomArtists(PopRandomArtists);
      setHipHopRandomArtists(HipHopRandomArtists);
    };

    fetchData();
  }, []);

  return (
    <>
      {rockRandomArtists && popRandomArtists && hipHopRandomArtists && (
        <Col xs={12} md={{ span: 10, offset: 3 }} className="mainPage text-white">
          <MainLinks />
          <Row>
            <Col xs={10}>
              <div id="searchResults">
                <h2 className="text-start">Search Results</h2>

                <SearchedCardsContainer />
              </div>
            </Col>
          </Row>
          <CardPrincipal type="Rock Classics" artists={rockRandomArtists} />
          <CardPrincipal type="Pop Culture" artists={popRandomArtists} />
          <CardPrincipal type="#HipHop" artists={hipHopRandomArtists} />
        </Col>
      )}
    </>
  );
};

export default HomeMain;
