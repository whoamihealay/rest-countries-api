import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Error from "./components/Error";

import CountryDetail from "./pages/CountryDetail";
import { FaArrowLeft } from "react-icons/fa";

function App() {
  const backIcon = <FaArrowLeft className="back-icon" />;
  const [theme, setTheme] = useState("");
  const body = document.body;

  const toggleTheme = () => {
    if (body.classList.contains("light")) {
      setTheme("dark");
      body.classList.replace("light", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      body.classList.replace("dark", "light");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      body.classList.add("dark");
      setTheme("dark");
    } else {
      body.classList.add("light");
      setTheme("light");
    }
  }, [body.classList]);

  return (
    <Router>
      <div className="App">
        <Header toggleTheme={toggleTheme} theme={theme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="country/:alpha"
            element={<CountryDetail icon={backIcon} />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
