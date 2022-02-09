import React from "react";
import "./Sequence.css";

type Props = {
  value: string;
  pointer: number;
};

export default function Sequence({ value, pointer = 0 }: Props) {
  const braces = value
    .slice(0, 10)
    .split("")
    .filter(
      (char) =>
        char === "(" ||
        char === ")" ||
        char === "[" ||
        char === "]" ||
        char === "{" ||
        char === "}"
    );

  return (
    <div className="sequence">
      <div className="sequence__braces">
        {braces.map((brace, index) => (
          <div className="squence_brace" key={index}>
            {brace}
          </div>
        ))}
      </div>
      <div className="sequence__pointer-wrapper">
        <div
          className="sequence__pointer__spacer"
          style={{
            width:
              pointer >= 0 && pointer < braces.length
                ? pointer < 0
                  ? `${(0 * 100) / braces.length}%`
                  : `${(pointer * 100) / braces.length}%`
                : pointer < 0
                ? `${(0 * 100) / braces.length}%`
                : `${((braces.length - 1) * 100) / braces.length}%`,
          }}
        ></div>

        <span
          className="sequence__pointer"
          style={{
            paddingLeft: `${100 / braces.length / 2 - 2}%`,
          }}
        >
          👆
        </span>
      </div>
    </div>
  );
}
