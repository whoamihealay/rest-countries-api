import React, { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Error from "./components/Error";

import CountryDetail from "./pages/CountryDetail";

function App() {
  const body = document.body;
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
      localStorage.removeItem("theme");
      setDark(false);
    } else {
      body.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      body.classList.add("dark");
      setDark(true);
    }
  }, [body.classList]);

  return (
    <Router>
      <div className="App">
        <Header toggleTheme={toggleTheme} dark={dark} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="country/:alpha" element={<CountryDetail />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
