import React, { useEffect, useState } from "react";
import Team from "../Team/Team";
import "./AllTeams.css";
import StadiumImg from "../../Assets/stedium2.jpg";

const AllTeams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`
    )
      .then((res) => res.json())
      .then((data) => setTeams(data.teams));
  }, []);

  const first15 = teams.slice(0, 15);
  return (
    <>
      <div className="stadium">
        <img className="stadium-bg" src={StadiumImg} alt="" />
        <h2>Soccer Mania</h2>
      </div>
      <div className="all-teams">
        {first15.map((team) => (
          <Team key={team.idTeam} team={team} />
        ))}
      </div>
    </>
  );
};

export default AllTeams;
