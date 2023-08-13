import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { MoviesContextComponent } from "./context/contextBoilerPlate";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MoviesContextComponent>
        <App />
      </MoviesContextComponent>
    </BrowserRouter>
  </React.StrictMode>
);
