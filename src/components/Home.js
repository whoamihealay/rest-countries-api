import React from "react";
import Search from "./Search";
import CountryCard from "./CountryCard";
import Filter from "./Filter";
import { FaSearch, FaCaretDown } from "react-icons/fa";
import "./home.css";

const Home = () => {
  const searchIcon = <FaSearch className="search-icon" />;
  const filtericon = <FaCaretDown className="filter-icon" />;
  return (
    <main className="container">
      <section className="search-section">
        <Search icon={searchIcon} />
        <Filter icon={filtericon} />
      </section>
      <section className="country-grid">
        <CountryCard />
      </section>
    </main>
  );
};

export default Home;
