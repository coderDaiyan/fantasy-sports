import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../AllTeams/AllTeams.css";
import "./TeamDetails.css";
import StadiumBg from "../../Assets/stedium2.jpg";
import Female from "../../Assets/female.png";
import Male from "../../Assets/male.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMars,
  faFutbol,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const TeamDetails = () => {
  const { idTeam } = useParams();
  const [teamDetails, setTeamDetails] = useState({});

  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
    )
      .then((res) => res.json())
      .then((data) => setTeamDetails(data.teams[0]));
  }, [idTeam]);

  const {
    strTeamBadge,
    strTeam,
    intFormedYear,
    strSport,
    strGender,
    strDescriptionEN,
    strFacebook,
    strTwitter,
    strInstagram,
    strStadiumThumb,
  } = teamDetails;

  return (
    <>
      <div className="stadium">
        <div className="">
          <img className="stadium-bg" src={strStadiumThumb} alt="" />
          <div className="black stadium-bg"></div>
        </div>
        <img className="team-logo" src={strTeamBadge} alt="" />
      </div>
      <div className="team-details">
        <br />
        <div className="team-info-card">
          <div className="">
            <h1 style={{ fontWeight: "bold" }}>{strTeam}</h1>
            <h4>
              <FontAwesomeIcon className="me-2" icon={faCalendarAlt} />
              Founded: {intFormedYear}
            </h4>
            <h4>
              <FontAwesomeIcon className="me-2" icon={faFutbol} />
              Sport Type: {strSport}
            </h4>
            <h4>
              <FontAwesomeIcon className="me-2" icon={faMars} />
              Gender: {strGender}
            </h4>
          </div>
          <div className="">
            <img
              className="gender-img"
              src={strGender === "Male" ? Male : Female}
              alt=""
            ></img>
          </div>
        </div>
        <div className="team-description">
          <p>{strDescriptionEN}</p>
          <div className="social-icons mt-5">
            <a target="blank_" href={strFacebook}>
              <FontAwesomeIcon className="me-5" icon={faFacebook} />
            </a>
            <a target="blank_" href={strTwitter}>
              <FontAwesomeIcon
                style={{ color: "#4C9BE5" }}
                className="me-5"
                icon={faTwitter}
              />
            </a>
            <a target="blank_" href={`https://${strInstagram}`}>
              <FontAwesomeIcon className="insta" icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamDetails;
