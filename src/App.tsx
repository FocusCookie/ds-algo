import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Sequence from "./components/Sequence/Sequence";
import Stack from "./components/Stack/Stack";
import Codebox from "./components/Codebox/Codebox";
import Stacktext from "./components/Stacktext/Stacktext";
import ConsoleLog from "./components/ConsoleLog/ConsoleLog";
import Log from "./components/Log/Log";

function App() {
  const [braces, setBraces] = useState("");
  const [isValidating, setIsValidating] = useState(false);
  const [commands, setCommands] = useState();
  const [stack, setStack] = useState<string[]>([]);
  const [braceIndex, setBraceIndex] = useState(0);

  function addOpeningBraceHandler() {
    if (braces.length < 10) setBraces((current) => current + "[");
  }
  function addClosingBranceHandler() {
    if (braces.length < 10) setBraces((current) => current + "]");
  }

  function validateSequenceHandler() {
    setIsValidating(true);
  }

  function resetSequenceHandler() {
    setBraces("");
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

      <section className="brace-controlls">
        <Button label="[" single onClick={addOpeningBraceHandler} />
        <Button label="]" single onClick={addClosingBranceHandler} />
      </section>

      {braces.length > 0 && <Sequence value={braces} pointer={-1} />}

      {!isValidating && (
        <section className="controlls">
          <Button
            variant="subtle"
            label="reset sequence"
            onClick={resetSequenceHandler}
          />
          <Button
            variant="primary"
            label="validate sequence"
            onClick={validateSequenceHandler}
          />
        </section>
      )}

      {isValidating && (
        <section className="execution">
          <Codebox>{commands}</Codebox>
          <div className="execution__stack">
            <Stack items={stack} />
          </div>
        </section>
      )}
    </div>
  );
}

export default App;
