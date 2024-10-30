// Nav.js
import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"; // Import the CSS file for styling
import logo from "./assets/logo.png";

const Nav = () => {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <img src={logo} alt="Little Lemon logo" className="logo-image" />
        <span className="logo-text">LITTLE LEMON</span>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/reserve" className="nav-link">
            Reserve Table
          </Link>
        </li>
        <li>
          <Link to="/info" className="nav-link">
            Info
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
