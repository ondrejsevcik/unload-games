import React from "react";
import { initialState } from "./guess-the-flag";

test("it returns correct initial state", () => {
  expect(initialState).toEqual({
    kind: "setup"
  });
});
