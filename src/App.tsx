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
  const [commands, setCommands] = useState<any[]>([]);
  const [stack, setStack] = useState<string[]>([]);
  const [braceIndex, setBraceIndex] = useState(0);
  const [validated, setValidated] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (braceIndex === braces.length - 1 || isInvalid) {
      setValidated(true);
      setIsValidating(false);
    }

    if (braceIndex < braces.length && isValidating && !isInvalid) {
      const brace = braces[braceIndex];
      if (brace === "[") {
        setStack((current) => [...current, brace]);
        setCommands((current) => [
          ...current,
          <ConsoleLog value="stack.size()" key={`console-log-${braceIndex}`} />,
          <Log
            value={`stack size: ${stack.length}`}
            key={`log-stacksize-${braceIndex}`}
          />,
          <Stacktext
            method="push"
            arg={`"${brace}"`}
            key={`stacktext-${braceIndex}`}
          />,
          <Log
            value={`stack size: ${stack.length + 1}`}
            key={`log-stacksize-after-push-${braceIndex}`}
          />,
          <Log
            value={`------------------------------`}
            key={`log-hr-${braceIndex}`}
          />,
        ]);
      }

      if (brace === "]" && stack.length > 0) {
        setStack((current) => [...current.slice(0, current.length - 1)]);
        setCommands((current) => [
          ...current,
          <ConsoleLog
            value="stack.isEmpty()"
            key={`console-log-isEmpty-${braceIndex}`}
          />,
          <Log
            value={`${
              stack.length > 0 ? "stack is not empty" : "stack is empty"
            }`}
            key={`log-stackIsEmpty-${braceIndex}`}
          />,
          <Stacktext
            method="pop"
            arg={`"${brace}"`}
            key={`stacktext-${braceIndex}`}
          />,
          <ConsoleLog
            value="stack.size()"
            key={`console-log-size-after-pop-${braceIndex}`}
          />,
          <Log
            value={`stack size: ${stack.length - 1}`}
            key={`log-stacksize-after-push-${braceIndex}`}
          />,
          <Log
            value={`------------------------------`}
            key={`log-hr-${braceIndex}`}
          />,
        ]);
      }

      let invalid = false;
      if (brace === "]" && stack.length === 0) {
        setCommands((current) => [
          ...current,
          <ConsoleLog
            value="stack.isEmpty()"
            key={`console-log-isEmpty-${braceIndex}`}
          />,
          <Log
            value={`${
              stack.length > 0 ? "stack is not empty" : "stack is empty"
            }`}
            key={`log-stackIsEmpty-${braceIndex}`}
          />,
          <Log
            value={`------------------------------`}
            key={`log-hr-${braceIndex}`}
          />,
        ]);

        invalid = true;
        setIsInvalid(true);
        setIsValidating(false);
      }

      timeoutId = setTimeout(() => {
        if (!invalid) setBraceIndex((current) => current + 1);
      }, 2000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [braceIndex, isValidating]);

  function addOpeningBraceHandler() {
    if (braces.length < 10) setBraces((current) => current + "[");
  }
  function addClosingBranceHandler() {
    if (braces.length < 10) setBraces((current) => current + "]");
  }

  function validateSequenceHandler() {
    setIsValidating(true);
    setValidated(false);
    setCommands([]);
    setStack([]);
    setIsInvalid(false);
    setBraceIndex(0);
  }

  function resetSequenceHandler() {
    setValidated(false);
    setBraces("");
    setCommands([]);
    setStack([]);
    setIsInvalid(false);
    setBraceIndex(0);
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
            We will use a stack to solve the question, if the given braces
            sequences is balanced or not. Each opening brace "[" will be added
            to the stack and each time a closing brace occurs we remove one
            opening brace from the stack.
          </p>
          <p>
            At the end the stack should be empty. If the stack is empty before
            the sequence ends or we still have items left in the stack we know
            the sequence is not balanced.
          </p>
        </article>
      </section>

      <section className="brace-controlls">
        <Button label="[" single onClick={addOpeningBraceHandler} />
        <Button label="]" single onClick={addClosingBranceHandler} />
      </section>

      {braces.length > 0 && <Sequence value={braces} pointer={braceIndex} />}

      {!isValidating && braces.length > 0 && (
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

      {!isValidating && validated && stack.length === 0 && !isInvalid && (
        <div className="message message--success">
          <h1>The braces are balanced ⚖️! 🥳</h1>
        </div>
      )}

      {(!isValidating && validated && stack.length > 0) || isInvalid ? (
        <div className="message message--error">
          <h1>The braces are not balanced! 🙁</h1>
        </div>
      ) : null}

      {(stack.length > 0 || isValidating || validated) && (
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
