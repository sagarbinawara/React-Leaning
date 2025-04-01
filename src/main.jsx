import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import List from "./List";
import UseApiCall from "./UseApiCall";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <dataContext.Provider value={UseApiCall()}>
    <div className="App">
      <h1>ListHello CodeSandbox</h1>
      <List />
    </div>
  </dataContext.Provider>
);
