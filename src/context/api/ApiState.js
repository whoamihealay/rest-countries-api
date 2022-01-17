import React, { useReducer } from "react";
import axios from "axios";

import ApiContext from "./apiContext";
import ApiReducer from "./apiReducer";
import {
  GET_ALL,
  GET_COUNTRY,
  SEARCH_COUNTRY,
  FILTER_REGION,
  SET_LOADING,
  ERROR,
  CLEAR_COUNTRY,
} from "../types";

const ApiState = (props) => {
  const initialState = {
    countries: [],
    // eslint-disable-next-line no-restricted-globals
    country: {
      currencies: [],
      languages: [],
      name: "",
      topLevelDomain: [],
      capital: "",
      subregion: "",
      population: "",
      borders: [],
      nativeName: "",
      flags: {},
      alpha3Code: "",
    },

    loading: false,
    searchActive: false,
    filterActive: false,
  };

  const [state, dispatch] = useReducer(ApiReducer, initialState);

  // getAll: Sends GET request to API /all endpoint to retrieve all countries in database. Fields to reduce payload size. If more info needed, add fields.

  const getAll = async () => {
    setLoading();

    const res = await axios.get(
      "https://restcountries.com/v2/all?fields=flags,name,population,region,capital,alpha3Code"
    );

    dispatch({
      type: GET_ALL,
      payload: res.data,
    });
  };

  // getCountry: Sends GET to /name/ endpoint with Name of the country as variable from CountryCard Component. Fields to reduce payload size. If more info needed, add fields.

  const getCountry = async (countryCode) => {
    setLoading();

    const res = await axios.get(
      `https://restcountries.com/v2/alpha/${countryCode}?fields=flags,name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages,borders,alpha3Code`
    );
    dispatch({
      type: GET_COUNTRY,
      payload: res.data,
    });
  };

  // searchCountry: Sends GET to /name/ endpoint with Name of the country as variable from Search Component. Fields to reduce payload size. If more info needed, add fields.

  const searchCountry = async (text) => {
    setLoading();

    if (state.filterActive === true) {
      const captext =
        text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

      const filterBySearch = (item) => {
        if (item.name.includes(`${captext}`)) {
          return true;
        }
        return false;
      };

      const res = state.countries.filter(filterBySearch);

      dispatch({
        type: SEARCH_COUNTRY,
        payload: res,
      });
    } else {
      const res = await axios.get(
        `https://restcountries.com/v2/name/${text}?fields=flags,name,population,region,capital,alpha3Code`
      );

      if (typeof res.data.status === "undefined") {
        dispatch({
          type: SEARCH_COUNTRY,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR,
          payload: res.data,
        });
      }
    }
  };

  // filterRegion: Sends GET to /regionalbloc/ endpoint with Name of the region as variable from Filter Component. Fields to reduce payload size. If more info needed, add fields.

  const filterRegion = async (region) => {
    setLoading();

    if (state.searchActive === true) {
      const filterByRegion = (item) => {
        if (item.region === `${region}`) {
          return true;
        }
        return false;
      };

      const res = state.countries.filter(filterByRegion);

      dispatch({
        type: FILTER_REGION,
        payload: res,
      });
    } else {
      const res = await axios.get(
        `https://restcountries.com/v2/region/${region}?fields=flags,name,population,region,capital,alpha3Code`
      );

      dispatch({
        type: FILTER_REGION,
        payload: res.data,
      });
    }
  };

  // setLoading: sets loading to true while GET requets are fullfilled.

  const setLoading = () => dispatch({ type: SET_LOADING });

  // clearCountry: clears the Country objet as cleanup. No stricly neccesary but keeps control over action.

  const clearCountry = () => dispatch({ type: CLEAR_COUNTRY });

  return (
    <ApiContext.Provider
      value={{
        countries: state.countries,
        country: state.country,
        loading: state.loading,
        getAll,
        getCountry,
        searchCountry,
        filterRegion,
        clearCountry,
      }}
    >
      {props.children}
    </ApiContext.Provider>
  );
};

export default ApiState;
