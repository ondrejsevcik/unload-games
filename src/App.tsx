import React from "react";
import GuessTheFlag from "./guess-the-flag";
import { HashRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./home-page";
import { appRoutes } from "./app-routes";

export function App() {
  return (
    <div className="max-w-sm m-auto">
      <HashRouter>
        <Routes>
          <Route path={appRoutes.guessTheFlag} element={<GuessTheFlag />} />
          <Route path={appRoutes.home} element={<HomePage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
