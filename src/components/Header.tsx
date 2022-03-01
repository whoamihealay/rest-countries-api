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
      <p id="dark" className="theme-btn" onClick={toggleTheme}>
        {dark ? <FaMoon /> : <FaSun />}
        {dark ? "Dark" : "Light"} Mode
      </p>
    </header>
  );
};

export default Header;
