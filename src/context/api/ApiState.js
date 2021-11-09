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
    },
    loading: false,
  };

  const [state, dispatch] = useReducer(ApiReducer, initialState);

  // getAll: Sends GET request to API /all endpoint to retrieve all countries in database. Fields to reduce payload size. If more info needed, add fields.

  const getAll = async () => {
    setLoading();

    const res = await axios.get(
      "https://restcountries.com/v2/all?fields=flags,name,population,region,capital"
    );

    dispatch({
      type: GET_ALL,
      payload: res.data,
    });
  };

  // getCountry: Sends GET to /name/ endpoint with Name of the country as variable from CountryCard Component. Fields to reduce payload size. If more info needed, add fields.

  const getCountry = async (countryName) => {
    setLoading();

    const res = await axios.get(
      `https://restcountries.com/v2/name/${countryName}?fields=flags,name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages,borders,`
    );
    dispatch({
      type: GET_COUNTRY,
      payload: res.data[0],
    });
  };

  // searchCountry: Sends GET to /name/ endpoint with Name of the country as variable from Search Component. Fields to reduce payload size. If more info needed, add fields.

  const searchCountry = async (text) => {
    setLoading();
    clearCountry();

    const res = await axios.get(
      `https://restcountries.com/v2/name/${text}?fields=flags,name,population,region,capital`
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
  };

  // filterRegion: Sends GET to /regionalbloc/ endpoint with Name of the region as variable from Filter Component. Fields to reduce payload size. If more info needed, add fields.

  const filterRegion = async (region) => {
    setLoading();

    const res = await axios.get(
      `https://restcountries.com/v2/region/${region}?fields=flags,name,population,region,capital`
    );

    dispatch({
      type: FILTER_REGION,
      payload: res.data,
    });
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
