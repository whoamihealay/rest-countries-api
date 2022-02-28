import React from "react";
import { Link, useParams } from "react-router-dom";
import "./countryDetail.css";

// import Spinner from "../components/Spinner";
import { useAppSelector } from "../hooks/redux";
import { selectCountryByAlphaCode } from "../features/countries/countriesSlice";

// import Border from "../components/Border";

const CountryDetail = ({ icon }: any) => {
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
  } = country;

  const popFormat = new Intl.NumberFormat().format(population);

  return (
    <main className="container">
      <section className="detail-section">
        <Link to="/" className="back-btn">
          {icon} <p className="back-p">Back</p>
        </Link>
        {country && (
          <div className="detail-flex">
            <img
              className="detail-flag"
              src={flags.svg}
              alt={`flag of ${name.common}`}
            />
            <div className="detail-div">
              <h2 className="detail-name">{name.common}</h2>
              <div className="detail-p-flex">
                <p className="detail-info">
                  <b>Native Name:</b> {name.official} <br />
                  <b>Population:</b> {popFormat} <br />
                  <b>Region:</b> {region} <br />
                  <b>Sub Region:</b> {subregion} <br />
                  <b>Capital:</b> {capital} <br />
                </p>
                <p className="detail-info">
                  <b>Top Level Domain:</b> {tld} <br />
                  <b>Languages: </b>
                  {Object.keys(languages).map((key) => `${languages[key]} `)}
                </p>
              </div>
              <h3 className="detail-border">Border Countries: </h3>
              <div className="border-div">
                {/* {borders &&
                  borders.map((border, index) => (
                    <Border key={index} border={border} handleNav={handleNav} />
                  ))} */}
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default CountryDetail;
