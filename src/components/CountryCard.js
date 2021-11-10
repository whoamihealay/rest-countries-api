import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./countryCard.css";

const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital, alpha3Code } = country;

  const popFormat = new Intl.NumberFormat().format(population);

  return (
    <Link to={`/country/${alpha3Code}`} className="country-card">
      <img className="flag" src={flags.svg} alt={`flag of ${name}`} />
      <h2 className="country-name">{name}</h2>

      <p className="country-basic-info">
        <b>Population:</b> {popFormat}
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
