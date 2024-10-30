// Home.js
import React from "react";
import "./Home.css"; // Import the CSS file for styling
import Nav from "./Nav";

const Home = () => {
  return (
    <>
    
      <Nav className="nav" /> {/* Apply the nav class if needed */}
      <div className="home-container">
        <div className="home-text">Welcome to the Little Lemon Home Page!</div>
      </div>
    </>
  );
};

export default Home;
