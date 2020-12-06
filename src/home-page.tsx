import React from "react";
import { Link } from "react-router-dom";
import { appRoutes } from "./app-routes";
import "./home-page.css";

export function HomePage() {
  return (
    <div className="text-center mt-2">
      <img src="logo.svg" alt="Unload Games logo" className="max-w-sm px-4" />
      <nav className="menu">
        <Link to={appRoutes.guessTheFlag} className="menu__item">
          Guess the flag
        </Link>
      </nav>
      <div className="mt-8 text-gray-400 text-sm">
        <div>
          <span>Made by </span>
          <a
            href="https://twitter.com/ondrejsevcik"
            rel="noopener noreferrer"
            target="_blank"
            className="underline"
          >
            @ondrejsevcik
          </a>
        </div>
        <div>
          <a
            href="https://github.com/ondrejsevcik/unload-games"
            rel="noopener noreferrer"
            target="_blank"
            className="underline"
          >
            [source]
          </a>
        </div>
      </div>
    </div>
  );
}
