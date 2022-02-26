import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./countryCard.css";
import { Country } from "../features/countries/countriesSlice";

interface IProps {
  country: Country;
}

const CountryCard = ({ country }: IProps) => {
  const { flags, name, population, region, capital, cca3 } = country;

  const popFormat = new Intl.NumberFormat().format(population);

  return (
    <Link to={`/country/${cca3}`} className="country-card">
      <img className="flag" src={flags.svg} alt={`flag of ${name}`} />
      <h2 className="country-name">{name.common}</h2>

      <p className="country-basic-info">
        <b>Population:</b> {popFormat}
        <br />
        <b>Region:</b> {region}
        <br />
        <b>Capital:</b> {capital.map((capital) => capital)}
      </p>
    </Link>
  );
};

CountryCard.propTypes = {
  country: PropTypes.object.isRequired,
};

export default CountryCard;
