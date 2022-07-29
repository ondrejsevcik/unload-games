import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import GuessTheFlag from "./guess-the-flag";

import "@testing-library/jest-dom";

test("it starts with an empty score", () => {
  render(<GuessTheFlag />);
  fireEvent.click(screen.getByText("Start game"));

  expect(screen.getByText("Joey 0")).toBeInTheDocument();
  expect(screen.getByText("Phoebe 0")).toBeInTheDocument();
});

test("it should be possible to answer correctly", () => {
  render(<GuessTheFlag />);
  fireEvent.click(screen.getByText("Start game"));

  fireEvent.click(screen.getByText("Show me"));
  fireEvent.click(screen.getByText("👍"));

  expect(screen.getByText("Joey 1")).toBeInTheDocument();
  expect(screen.getByText("Phoebe 0")).toBeInTheDocument();
});

test("it should be possible to answer incorrectly", () => {
  render(<GuessTheFlag />);
  fireEvent.click(screen.getByText("Start game"));

  fireEvent.click(screen.getByText("Show me"));
  fireEvent.click(screen.getByText("👎"));

  expect(screen.getByText("Joey 0")).toBeInTheDocument();
  expect(screen.getByText("Phoebe 0")).toBeInTheDocument();
});
