import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Gallery from "./pages/Gallery";
import Bronx from "./pages/Bronx";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/4bronx" element={<Bronx />} />
      </Routes>
    </MantineProvider>
  );
}

export default App;
