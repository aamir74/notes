import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { FilterProvider, NotesProvider } from "./hooks";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <NotesProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </NotesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
