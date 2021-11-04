import React from "react";
import "./countryCard.css";

const CountryCard = () => {
  const country = {
    flag: (
      <img
        classname="flag"
        src="https://flagcdn.com/de.svg"
        alt="flag of germany"
      ></img>
    ),
    name: "Germany",
    population: "81.770.990",
    region: "Europe",
    capital: "Berlin",
  };

  return (
    <article className="country-card">
      {country.flag}
      <h1 className="country-name">{country.name}</h1>

      <p className="country-basic-info">
        <b>Population:</b> {country.population}
        <br />
        <b>Region:</b> {country.region}
        <br />
        <b>Capital:</b> {country.capital}
      </p>
    </article>
  );
};

export default CountryCard;
