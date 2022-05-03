import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "./header.css";

interface IProps {
  toggleTheme: () => void;
  dark: boolean;
}

const Header = ({ toggleTheme, dark }: IProps) => {
  return (
    <header className="header">
      <h1 className="header-h1">Where in the world?</h1>
      <button
        aria-label="theme button"
        id="dark"
        className="theme-btn"
        onClick={toggleTheme}
      >
        {dark ? <FaMoon aria-label="dark" /> : <FaSun aria-label="light" />}
        {dark ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
};

export default Header;
