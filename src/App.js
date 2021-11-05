import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";

import CountryDetail from "./components/CountryDetail";
import { FaArrowLeft } from "react-icons/fa";
import Home from "./components/Home";

function App() {
  const backIcon = <FaArrowLeft className="back-icon" />;

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/germany"
            element={<CountryDetail icon={backIcon} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
