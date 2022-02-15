import React from "react";
import "./Stacktext.css";

type Props = {
  method: "pop" | "push" | "peek" | "isEmpty" | "size";
  arg: string;
};

export default function Stacktext({ method = "size", arg }: Props) {
  return (
    <div className="stacktext">
      <span className="stacktext__object">stack</span>
      <span>.</span>
      <span className="stacktext__method">{method}</span>
      <span>(</span>
      {method === "push" && <span className="stacktext__argument">{arg}</span>}
      <span>)</span>
    </div>
  );
}
