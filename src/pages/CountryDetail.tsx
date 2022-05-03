import React from "react";
import { Link, useParams } from "react-router-dom";
import "./countryDetail.css";

import { FaArrowLeft } from "react-icons/fa";
import { useAppSelector } from "../hooks/redux";
import {
  Country,
  selectCountryByAlphaCode,
} from "../features/countries/countriesSlice";
import Spinner from "../components/Spinner";

import Border from "../components/Border";

const CountryDetail = ({ icon }: any) => {
  const { isLoading } = useAppSelector((state) => state.countries);
  const { alpha } = useParams();

  const country = useAppSelector((state) =>
    selectCountryByAlphaCode(state, alpha!)
  );

  const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    languages,
    borders,
  } = country as Country;

  const popFormat = new Intl.NumberFormat().format(population);

  const suffix = (array: any[], single: string, plural: string) => {
    return array.length === 1 ? single : plural;
  };

  return (
    <main className="container">
      <section className="detail-section">
        <Link to="/" className="back-btn">
          <FaArrowLeft className="back-icon" />
          <p className="back-p">Back</p>
        </Link>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="detail-flex">
            <img
              className="detail-flag"
              src={flags.svg}
              alt={`flag of ${name.common}`}
            />
            <div className="detail-div">
              <h2 className="detail-name">{name.common}</h2>
              <div className="detail-p-flex">
                <div className="detail-info">
                  <b>Native Name:</b> {name.official} <br />
                  <b>Population:</b> {popFormat} <br />
                  <b>Region:</b> {region} <br />
                  <b>Sub Region:</b> {subregion} <br />
                  <div className="flex">
                    <b>Capital{suffix(capital, "", "s")}: </b>
                    <ul>
                      {capital.map((capital: string) => (
                        <li key={capital}>{capital}</li>
                      ))}
                    </ul>
                  </div>
                  <br />
                </div>
                <div className="detail-info">
                  <b>Top Level Domain{suffix(tld, "", "s")}: </b>
                  <ul>
                    {tld.map((tld) => (
                      <li key={tld}>{tld}</li>
                    ))}
                  </ul>
                  <br />
                  <b>Languages: </b>
                  {Object.values(languages)}
                </div>
              </div>
              <h3 className="detail-border">
                Border Countr{suffix(borders, "y", "ies")}:{" "}
              </h3>
              <div className="border-div">
                {borders &&
                  borders.map((border) => (
                    <Border key={border} border={border} />
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
