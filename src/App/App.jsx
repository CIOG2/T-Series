import React from "react";
import { SeriesProvider } from "../SeriesContext";
import { AppUI } from "./AppIU.jsx";
import './Main.css';

function App() {
  return (
    <SeriesProvider>
      <AppUI />
    </SeriesProvider>
  );
}

export { App };