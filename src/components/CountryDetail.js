import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "./countryDetail.css";

import Spinner from "./Spinner";

import ApiContext from "../context/api/apiContext";

const CountryDetail = ({ icon }) => {
  const apiContext = useContext(ApiContext);

  let { alpha } = useParams();

  const { loading, getCountry, country } = apiContext;

  const handleNav = (dest) => {
    getCountry(dest);
  };

  const {
    flags,
    name,
    population,
    nativeName,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = country;

  const popFormat = new Intl.NumberFormat().format(population);

  useEffect(() => {
    getCountry(alpha);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="container">
      <section className="detail-section">
        <Link to="/" className="back-btn">
          {icon} <p className="back-p">Back</p>
        </Link>
        {loading ? (
          <Spinner />
        ) : (
          <div className="detail-flex">
            <img
              className="detail-flag"
              src={flags.svg}
              alt={`flag of ${name}`}
            />
            <div className="detail-div">
              <h1 className="detail-name">{name}</h1>
              <div className="detail-p-flex">
                <p className="detail-info">
                  <b>Native Name:</b> {nativeName} <br />
                  <b>Population:</b> {popFormat} <br />
                  <b>Region:</b> {region} <br />
                  <b>Sub Region:</b> {subregion} <br />
                  <b>Capital:</b> {capital} <br />
                </p>
                <p className="detail-info">
                  <b>Top Level Domain:</b> {topLevelDomain} <br />
                  <b>Currencies: </b>
                  {currencies.map((currency) => currency.name)} <br />
                  <b>Languages: </b>
                  {languages.map((language) => language.name)}
                </p>
              </div>
              <h2 className="detail-border">Border Countries: </h2>
              <div className="border-div">
                {borders.map((border) => (
                  <Link to={`/country/${border}`} key={border}>
                    <button
                      className="border-btn"
                      key={border}
                      onClick={() => handleNav(border)}
                    >
                      {border}
                    </button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default CountryDetail;
