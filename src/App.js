import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Router } from "@reach/router";
import Home from "./components/Home";
import Display from "./components/Display";

function App() {
  const [state, setState] = useState([]);
  const [select, setSelect] = useState("");
  const [id, setId] = useState("");
  useEffect(() => {
    axios
      .get("https://swapi.dev/api")
      .then((response) => setState(response.data));
  }, []);
  return (
    <div className="wrapper">
      {/* <Input state={state} id={{ id, setId }} select={{ select, setSelect }} /> */}
      <Router>
        <Home
          state={state}
          id={id}
          setId={setId}
          select={select}
          setSelect={setSelect}
          path="/"
        />
        <Display
          path="/:stuff/:id"
          state={state}
          id={id}
          setId={setId}
          select={select}
          setSelect={setSelect}
        />
      </Router>
    </div>
  );
}

export default App;
