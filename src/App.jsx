import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import HomeMain from "./components/HomeMain";
import ArtistPage from "./components/ArtistPage";
import AlbumPage from "./components/AlbumPage";
import Footer from "./components/Footer";
import LeftSidebar from "./components/LeftSidebar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container fluid>
          <Row>
            <LeftSidebar />
            <Routes>
              <Route path="" element={<HomeMain />} />
              <Route path="/album/:id" element={<AlbumPage />} />
              <Route path="/artist/:id" element={<ArtistPage />} />
            </Routes>
          </Row>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
