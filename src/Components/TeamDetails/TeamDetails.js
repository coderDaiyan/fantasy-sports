import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const TeamDetails = () => {
  const { idTeam } = useParams();
  const [teamDetails, setTeamDetails] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328`
    )
      .then((res) => res.json())
      .then((data) => setTeamDetails(data.teams));
  }, []);

  let team = teamDetails.find((t) => t.idTeam === idTeam);

  const { strStadiumThumb } = team;

  console.log(strStadiumThumb);

  //   console.log(strStadiumThumb);

  return (
    <>
      <div className="stadium">
        <img src={team && strStadiumThumb} alt="" />
      </div>
      <div className="team-details"></div>
    </>
  );
};

export default TeamDetails;
