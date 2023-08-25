import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PathsProvider } from "./context/PathsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PathsProvider>
      <App />
    </PathsProvider>
  </React.StrictMode>
);
