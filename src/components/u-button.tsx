import React, { MouseEventHandler } from "react";
import "./u-button.css";

interface Props {
  label?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export function UButton(props: Props) {
  return (
    <button className="u-button" onClick={props.onClick}>
      {props.label}
    </button>
  );
}
