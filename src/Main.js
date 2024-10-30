// Main.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home"; // Import the new Home component
import About from "./About";
import Services from "./Services";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Use Home instead of App */}
        <Route path="/reserve" element={<Services />} />
        <Route path="/info" element={<About />} />
      </Routes>
    </main>
  );
};

export default Main;
