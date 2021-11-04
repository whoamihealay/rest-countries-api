import React from "react";
import { FaMoon, FaRegMoon } from "react-icons/fa";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-h1">Where in the world?</h1>
      <p id="dark" className="theme-btn">
        <FaMoon /> Dark Mode
      </p>
    </header>
  );
};

export default Header;
