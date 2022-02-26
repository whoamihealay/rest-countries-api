import React, { useEffect } from "react";
import Search from "../components/Search";
import CountryCard from "../components/CountryCard";
import Filter from "../components/Filter";
import Spinner from "../components/Spinner";
import { FaSearch, FaCaretDown } from "react-icons/fa";
import "./home.css";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { getCountries, reset } from "../features/countries/countriesSlice";

const Home = () => {
  const { countries, isError, isLoading, message } = useAppSelector(
    (state) => state.countries
  );

  const dispatch = useAppDispatch();

  const searchIcon = <FaSearch className="search-icon" />;
  const filtericon = <FaCaretDown className="filter-icon" />;

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getCountries());

    return () => {
      dispatch(reset());
    };
  }, []);

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
        {countries.length > 0 &&
          countries.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
      </section>
    </main>
  );
};

export default Home;
