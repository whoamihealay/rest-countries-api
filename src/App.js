import React from "react";
import "./App.css";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Search from "./components/Search";
import { FaSearch, FaCaretDown, FaArrowLeft } from "react-icons/fa";
import CountryCard from "./components/CountryCard";
import CountryDetail from "./components/CountryDetail";

function App() {
  const searchIcon = <FaSearch className="search-icon" />;
  const filtericon = <FaCaretDown className="filter-icon" />;
  const arrowIcon = <FaArrowLeft className="arrow-icon" />;

  return (
    <div className="App">
      <Header />
      <main className="container">
        <section className="search-section flex">
          <Search icon={searchIcon} />
          <Filter icon={filtericon} />
        </section>
        <section className="country-grid">
          <CountryCard />
          <CountryDetail icon={arrowIcon} />
        </section>
      </main>
    </div>
  );
}

export default App;
