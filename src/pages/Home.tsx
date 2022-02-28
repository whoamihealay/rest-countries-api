import React, { useEffect } from "react";
import Search from "../components/Search";
import CountryCard from "../components/CountryCard";
import Filter from "../components/Filter";
import Spinner from "../components/Spinner";
import { FaSearch, FaCaretDown } from "react-icons/fa";
import "./home.css";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import {
  getCountries,
  reset,
  selectFilteredCountriesByIds,
} from "../features/countries/countriesSlice";

const Home = () => {
  const { isError, isLoading, message } = useAppSelector(
    (state) => state.countries
  );

  const countriesIds = useAppSelector(selectFilteredCountriesByIds);

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
        {countriesIds.length > 0 &&
          countriesIds.map((countryId) => (
            <CountryCard key={countryId} countryId={countryId} />
          ))}
      </section>
    </main>
  );
};

export default Home;
