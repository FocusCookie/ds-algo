import React from "react";
import "./Stack.css";
import Note from "../Note/Note";

type Props = {
  items: Array<string>;
};

export default function Stack({ items = ["1"] }: Props) {
  return (
    <div className="stack">
      {items.map((item, index) => (
        <Note
          value={item}
          className={`stack__note stack__note--${index}`}
          key={`stack-item-${index}`}
        />
      ))}
    </div>
  );
}
