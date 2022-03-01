import axios from "axios";

const API_URL = "https://restcountries.com/v3.1/";

// GET countries
const getCountries = async () => {
  const response = await axios.get(
    API_URL +
      "all?fields=name,population,region,subregion,capital,tld,currencies,languages,cca3,borders,flags"
  );

  return response.data;
};

const countriesService = {
  getCountries,
};

export default countriesService;
