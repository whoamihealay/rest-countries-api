import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./countryCard.css";

const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital, alpha3Code } = country;

  return (
    <Link to={`/country/${alpha3Code}`} className="country-card">
      <img className="flag" src={flags.svg} alt={`flag of ${name}`} />
      <h1 className="country-name">{name}</h1>

      <p className="country-basic-info">
        <b>Population:</b> {population}
        <br />
        <b>Region:</b> {region}
        <br />
        <b>Capital:</b> {capital}
      </p>
    </Link>
  );
};

CountryCard.propTypes = {
  country: PropTypes.object.isRequired,
};

export default CountryCard;
