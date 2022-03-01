import React from "react";
import Search from "../components/Search";
import CountryCard from "../components/CountryCard";
import Filter from "../components/Filter";
import Spinner from "../components/Spinner";
import { FaSearch, FaCaretDown } from "react-icons/fa";
import "./home.css";
import { useAppSelector } from "../hooks/redux";
import { selectSearchedCountriesByIds } from "../features/countries/countriesSlice";

const Home = () => {
  const { isLoading } = useAppSelector((state) => state.countries);
  const countriesIds = useAppSelector(selectSearchedCountriesByIds);
  const searchIcon = <FaSearch className="search-icon" />;
  const filtericon = <FaCaretDown className="filter-icon" />;

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <main className="container">
      <section className="search-section">
        <h2 className="sr-only">Search Bar</h2>
        <Search icon={searchIcon} />
        <h2 className="sr-only">Filter Dropdown</h2>
        <Filter icon={filtericon} />
      </section>
      <section className="country-grid">
        <h2 className="sr-only">List of Countries</h2>
        {countriesIds.length > 0 &&
          countriesIds.map((countryId) => (
            <CountryCard key={countryId} countryId={countryId} />
          ))}
      </section>
    </main>
  );
};

export default Home;
