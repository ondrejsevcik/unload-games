import React from "react";
import { Link } from "react-router-dom";
import { appRoutes } from "./app-routes";
import "./home-page.css";

export function HomePage() {
  return (
    <div className="text-center mt-2">
      <img src="logo.svg" alt="Unload Games logo" className="max-w-sm" />
      <nav className="menu">
        <Link to={appRoutes.guessTheFlag} className="menu__item">
          Guess the flag
        </Link>
      </nav>
    </div>
  );
}
