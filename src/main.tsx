import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./styles/globals.css";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.hydrateRoot(
  document.getElementById("root"),
  <HelmetProvider>
    <App />
  </HelmetProvider>,
);
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );
