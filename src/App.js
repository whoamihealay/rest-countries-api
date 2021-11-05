import React, { useState, useEffect } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Search from "./components/Search";
import { FaSearch, FaCaretDown, FaArrowLeft } from "react-icons/fa";
import CountryCard from "./components/CountryCard";
import CountryDetail from "./components/CountryDetail";
import Footer from "./components/Footer";

function App() {
  const searchIcon = <FaSearch className="search-icon" />;
  const filtericon = <FaCaretDown className="filter-icon" />;
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
    <div className={`App`}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <main className="container">
        <section className="search-section">
          <Search icon={searchIcon} />
          <Filter icon={filtericon} />
        </section>
        <section className="country-grid">
          <CountryCard />
        </section>
      </main>
      <CountryDetail icon={backIcon} />
      <Footer />
    </div>
  );
}

export default App;
