import React from "react";
import "./Button.css";

type Props = {
  onClick?: React.MouseEventHandler;
  variant: "primary" | "secondary" | "subtle";
  label: string;
};

export default function Button({
  onClick,
  variant = "secondary",
  label = "label",
}: Props) {
  return (
    <button className={`btn btn--${variant}`} onClick={onClick}>
      {label}
    </button>
  );
}
