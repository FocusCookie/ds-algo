import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Sequence from "./components/Sequence/Sequence";

function App() {
  const [braces, setBraces] = useState("");

  function addBraceHandler() {
    setBraces((current) => current + "(");
  }

  function removeBraceHandler() {
    if (braces.length > 0)
      setBraces((current) => current.slice(0, current.length - 1));
  }

  return (
    <div className="App">
      <header>⚖️ Balanced Braces</header>
      <section>
        <article>
          <p>
            Add braces how ever you want and click verify 🔎 to check if the
            braces are balanced.
          </p>
          <p>
            We will use a stack to solve the question if the given braces
            sequences is balanced. Each opening brace [ will be added to the
            stack and each time a closing brace occurs we remove one opening
            brace from the stack. At the end the stack should be empty. If the
            stack is empty before the sequence ends we know the sequence is not
            balanced.
          </p>
        </article>
      </section>

      <section className="controls">
        <Button label="[" single onClick={addBraceHandler} />
        <Button label="]" single onClick={removeBraceHandler} />
      </section>

      {braces.length > 0 && <Sequence value={braces} pointer={0} />}
    </div>
  );
}

export default App;
