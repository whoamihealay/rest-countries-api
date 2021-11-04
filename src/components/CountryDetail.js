import React from "react";
import "./countryDetail.css";

const CountryDetail = ({ icon }) => {
  const detail = {
    flag: (
      <img
        className="flag"
        src="https://flagcdn.com/de.svg"
        alt="flag of germany"
      />
    ),
    name: "Germany",
    nativeName: "Deutschland",
    population: "81.770.990",
    region: "Europe",
    subregion: "Western Europe",
    capital: "berlin",
    topLevelDomain: ".de",
    currencies: "Euro",
    languages: ["German"],
    borderCountries: [
      "AUT",
      "BEL",
      "CZE",
      "DNK",
      "FRA",
      "LUX",
      "NLD",
      "POL",
      "CHE",
    ],
  };

  return (
    <main className="container">
      <section className="detail-section">
        <button className="back-btn">
          {icon} <p className="back-p">Back</p>
        </button>
        <div className="detail-flex">
          {detail.flag}
          <div className="detail-div">
            <h1 className="detail-name">{detail.name}</h1>
            <div className="detail-p-flex">
              <p className="detail-info">
                <b>Native Name:</b> {detail.nativeName} <br />
                <b>Population:</b> {detail.population} <br />
                <b>Region:</b> {detail.region} <br />
                <b>Sub Region:</b> {detail.subregion} <br />
                <b>Capital:</b> {detail.capital} <br />
              </p>
              <p className="detail-info">
                <b>Top Level Domain:</b> {detail.topLevelDomain} <br />
                <b>Currencies:</b> {detail.currencies} <br />
                <b>Languages:</b>{" "}
                {detail.languages.map((language) => ` ${language}`)}{" "}
              </p>
            </div>
            <h2 className="detail-border">Border Countries: </h2>
            <div className="border-div">
              {detail.borderCountries.map((border) => (
                <button className="border-btn" key={border}>
                  {border}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CountryDetail;
