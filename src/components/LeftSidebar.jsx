import logo from "../assets/logo/Spotify_Logo.png";
import { faBookOpen, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Col, Form, InputGroup, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { search } from "../redux/actions/index.js";
import { useDispatch } from "react-redux";

const LeftSidebar = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(search(query));
  };

  return (
    <Col xs={1}>
      <Navbar className=" navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between p-3" id="sidebar">
        <div className="nav-container">
          <div className="navbar-brand">
            <Link to={"/"}>
              <img src={logo} alt="Spotify_Logo" width={131} height={40} />
            </Link>
          </div>
          <Button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          <Navbar.Collapse className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul className="text-start">
                <li>
                  <Link className="nav-item nav-link" to="/">
                    <FontAwesomeIcon icon={faHouse} /> &nbsp; Home
                  </Link>
                </li>
                <li>
                  <Link className="nav-item nav-link" to="#">
                    <FontAwesomeIcon icon={faBookOpen} />
                    &nbsp; Your Library
                  </Link>
                </li>
                <li>
                  <InputGroup className="mt-3 ">
                    <Form.Control
                      value={query}
                      onChange={handleChange}
                      type="text"
                      className="form-control mb-2"
                      id="searchField"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />

                    <Button
                      style={{ marginBottom: "4%" }}
                      size="sm"
                      variant="outline-secondary"
                      type="button"
                      id="button-addon1"
                      onClick={handleSubmit}
                    >
                      GO
                    </Button>
                  </InputGroup>
                </li>
              </ul>
            </div>
          </Navbar.Collapse>
        </div>

        <div className="nav-btn">
          <div>
            <Button className="btn signup-btn" type="button">
              Sign Up
            </Button>
            <Button className="btn login-btn" type="button">
              Login
            </Button>
          </div>
          <Link to="#">Cookie Policy</Link> |<Link to="#"> Privacy</Link>
        </div>
      </Navbar>
    </Col>
  );
};

export default LeftSidebar;
