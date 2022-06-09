import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { AuthProvider, FilterProvider, NotesProvider } from "./hooks";
import { NotificationsProvider } from "reapop";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <NotificationsProvider>
      <AuthProvider>
        <NotesProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </NotesProvider>
      </AuthProvider>
    </NotificationsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
