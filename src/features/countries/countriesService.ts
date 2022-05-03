import axios from "axios";

const API_URL = "https://restcountries.com/v3.1/";

const fields = [
  "name",
  "population",
  "region",
  "subregion",
  "capital",
  "tld",
  "currencies",
  "languages",
  "cca3",
  "borders",
  "flags",
];

// GET countries
const getCountries = async () => {
  const response = await axios.get(API_URL + `all?fields=${fields.join(",")}`);

  return response.data;
};

// GET country details
const getCountryDetail = async (code: string) => {
  const response = await axios.get(API_URL + `alpha/${code}?fields=`);

  return response.data;
};

const countriesService = {
  getCountries,
  getCountryDetail,
};

export default countriesService;
