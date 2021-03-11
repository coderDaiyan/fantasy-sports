import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            Soccer-Mania
          </a>
          <div className="d-flex">
            <ul className="navbar nav">
              <li>
                <Link
                  style={{ color: "#212529", textDecoration: "none" }}
                  className="me-3"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  style={{ color: "#212529", textDecoration: "none" }}
                  to="/allTeams"
                >
                  All Teams
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Home;
