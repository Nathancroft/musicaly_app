import React from "react";
import ReactDOM from "react-dom";
import "./custom.scss";

import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
