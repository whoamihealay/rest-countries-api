import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Error from "./components/Error";

import CountryDetail from "./components/CountryDetail";
import { FaArrowLeft } from "react-icons/fa";

import ApiState from "./context/api/ApiState";

function App() {
  const backIcon = <FaArrowLeft className="back-icon" />;
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved || "light";
  });
  const body = document.body;

  const loadTheme = () => {
    body.classList.add(theme);
  };

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
    loadTheme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ApiState>
      <Router>
        <div className="App">
          <Header toggleTheme={toggleTheme} theme={theme} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              path="country/:alpha"
              element={<CountryDetail icon={backIcon} />}
            />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ApiState>
  );
}

export default App;
