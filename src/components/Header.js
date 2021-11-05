import React from "react";
import { FaMoon, FaRegMoon } from "react-icons/fa";
import "./header.css";

const Header = ({ toggleTheme, theme }) => {
  let icon;
  if (theme === "light") {
    icon = <FaRegMoon />;
  } else {
    icon = <FaMoon />;
  }

  return (
    <header className="header">
      <h1 className="header-h1">Where in the world?</h1>
      <p id="dark" className="theme-btn" onClick={toggleTheme}>
        {icon} Dark Mode
      </p>
    </header>
  );
};

export default Header;
