import React from "react";
import GuessTheFlag from "./guess-the-flag";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

const routes = {
  home: "/",
  guessTheFlag: "/guess-the-flag"
};

export function App() {
  return (
    <Router>
      <Switch>
        <Route path={routes.guessTheFlag}>
          <GuessTheFlag />
        </Route>
        <Route path={routes.home}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <div className="tc">
      <h1>Pick a game</h1>
      <nav>
        <Link to={routes.guessTheFlag} className="tc">
          Guess the flag
        </Link>
      </nav>
    </div>
  );
}
