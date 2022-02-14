import React from "react";
import "./Note.css";

type Props = {
  value: string;
};

export default function Note({ value }: Props) {
  return <div className="note">{value}</div>;
}
