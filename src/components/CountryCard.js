import React from "react";
import { Link } from "react-router-dom";
import "./countryCard.css";

const CountryCard = ({ country }) => {
  return (
    <Link to={`/germany`} className="country-card">
      <img
        className="flag"
        src={country.flags.svg}
        alt={`flag of ${country.name}`}
      />
      <h1 className="country-name">{country.name}</h1>

      <p className="country-basic-info">
        <b>Population:</b> {country.population}
        <br />
        <b>Region:</b> {country.region}
        <br />
        <b>Capital:</b> {country.capital}
      </p>
    </Link>
  );
};

export default CountryCard;
