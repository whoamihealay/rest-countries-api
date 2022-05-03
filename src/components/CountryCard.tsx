import React from "react";
import { Link } from "react-router-dom";
import "./countryCard.css";
import { selectCountryById } from "../features/countries/countriesSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface IProps {
  countryId: number;
}

const CountryCard = ({ countryId }: IProps) => {
  const country = useSelector((state: RootState) =>
    selectCountryById(state, countryId)
  );

  const { flags, name, population, region, capital, cca3 } = country;

  const popFormat = new Intl.NumberFormat().format(population);

  return (
    country && (
      <Link to={`/country/${cca3}`} className="country-card">
        <img className="flag" src={flags.svg} alt={`flag of ${name.common}`} />
        <h2 className="country-name">{name.common}</h2>

        <section className="country-basic-info">
          <b>Population:</b> {popFormat}
          <br />
          <b>Region:</b> {region}
          <br />
          <div className="flex">
            <b id="capital-id">Capital{capital.length === 1 ? "" : "s"}:</b>
            <ul aria-labelledby="capital-id">
              {capital.map((capital) => (
                <li key={capital}>{capital}</li>
              ))}
            </ul>
          </div>
        </section>
      </Link>
    )
  );
};

export default CountryCard;
