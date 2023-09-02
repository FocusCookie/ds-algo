import React, { useState, useEffect } from "react";
import "./App.css";
import Stack from "./views/Stack/Stack";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      <AnimatePresence>
        <Stack />
      </AnimatePresence>
    </div>
  );
}

export default App;
