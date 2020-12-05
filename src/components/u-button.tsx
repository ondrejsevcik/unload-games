import React, { MouseEventHandler } from "react";
import "./u-button.css";
import { classNames } from "../utils/class-names";

interface Props {
  label?: string;
  isSelected?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export function UButton(props: Props) {
  return (
    <button
      className={classNames("u-button", { "ring-4": !!props.isSelected })}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}
