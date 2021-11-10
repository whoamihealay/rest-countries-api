import React, { useContext, useEffect } from "react";
import Search from "./Search";
import CountryCard from "./CountryCard";
import Filter from "./Filter";
import Spinner from "./Spinner";
import { FaSearch, FaCaretDown } from "react-icons/fa";
import "./home.css";

import ApiContext from "../context/api/apiContext";

const Home = () => {
  const apiContext = useContext(ApiContext);

  const { loading, countries, getAll } = apiContext;

  const searchIcon = <FaSearch className="search-icon" />;
  const filtericon = <FaCaretDown className="filter-icon" />;

  useEffect(() => {
    getAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="container">
      <section className="search-section">
        <h2 className="sr-only">Search Bar</h2>
        <Search icon={searchIcon} />
        <h2 className="sr-only">Filter Dropdown</h2>
        <Filter icon={filtericon} />
      </section>
      <section className="country-grid">
        <h1 className="sr-only">List of Countries</h1>
        {loading ? (
          <Spinner />
        ) : (
          countries.map((country) => (
            <CountryCard key={country.name} country={country} />
          ))
        )}
      </section>
    </main>
  );
};

export default Home;
