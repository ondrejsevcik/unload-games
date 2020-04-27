import React from "react";
import GuessTheFlag from "./guess-the-flag";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./home-page";
import { appRoutes } from "./app-routes";

export function App() {
  return (
    <Router>
      <Switch>
        <Route path={appRoutes.guessTheFlag}>
          <GuessTheFlag />
        </Route>
        <Route path={appRoutes.home}>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}
