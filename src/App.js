import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

import CountryDetail from "./components/CountryDetail";
import { FaArrowLeft } from "react-icons/fa";

function App() {
  const backIcon = <FaArrowLeft className="back-icon" />;
  const [theme, setTheme] = useState("light");
  const body = document.body;

  const toggleTheme = () => {
    if (body.classList.contains("light")) {
      setTheme("dark");
      body.classList.replace("light", "dark");
    } else {
      setTheme("light");
      body.classList.replace("dark", "light");
    }
  };

  return (
    <Router>
      <div className="App">
        <Header toggleTheme={toggleTheme} theme={theme} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/germany"
            element={<CountryDetail icon={backIcon} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
