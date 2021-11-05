import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
// HashRouter only for Gh-pages, replace by BrowserRouter
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

import CountryDetail from "./components/CountryDetail";
import { FaArrowLeft } from "react-icons/fa";

import ApiState from "./context/api/ApiState";

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
    <ApiState>
      <Router>
        <div className="App">
          <Header toggleTheme={toggleTheme} theme={theme} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/:countryname"
              element={<CountryDetail icon={backIcon} />}
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ApiState>
  );
}

export default App;
