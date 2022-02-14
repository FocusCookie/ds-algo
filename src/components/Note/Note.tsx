import React from "react";
import "./Note.css";

type Props = {
  value: string;
  className?: string;
};

export default function Note({ value, className }: Props) {
  return (
    <div className={`note${className ? " " + className : ""}`}>{value}</div>
  );
}
