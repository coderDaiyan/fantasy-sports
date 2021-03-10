import React from "react";
import "./Team.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Team = (props) => {
  const { strTeam, strTeamBadge, strSport, idTeam } = props.team;
  return (
    <div className="team">
      <img className="team-badge" src={strTeamBadge} alt="Team Badge" />
      <h3>Name: {strTeam}</h3>
      <h5>Sport Type: {strSport}</h5>
      <button className="explore-btn">
        <Link
          to={`/team/${idTeam}`}
          style={{ color: "white", textDecoration: "none" }}
        >
          Explore
          <FontAwesomeIcon className="ms-2" icon={faArrowRight} />
        </Link>
      </button>
    </div>
  );
};

export default Team;
