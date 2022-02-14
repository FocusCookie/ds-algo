import React from "react";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
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

      <section>
        <Button label="[" />
        <Button label="]" />
      </section>
    </div>
  );
}

export default App;
