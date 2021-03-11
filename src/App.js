import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import AllTeams from "./Components/AllTeams/AllTeams";
import TeamDetails from "./Components/TeamDetails/TeamDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <AllTeams />
        </Route>
        <Route path="/home">
          <AllTeams />
        </Route>
        <Route path="/allTeams">
          <AllTeams />
        </Route>
        <Route path="/team/:idTeam">
          <TeamDetails />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
