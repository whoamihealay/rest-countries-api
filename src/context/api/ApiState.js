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
} from "../types";

const ApiState = (props) => {
  const initialState = {
    all: [],
    countries: [],
    country: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(ApiReducer, initialState);

  const getAll = () => {
    setLoading();

    const res = axios.get(
      "https://restcountries.com/v2/all?fields=flags,name,population,region,capital"
    );

    dispatch({
      type: GET_ALL,
      payload: res.data.items,
    });
  };

  const getCountry = async (countryName) => {
    setLoading();

    const res = await axios.get(
      `https://restcountries.com/v2/name/${countryName}?fields=flags,name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages,borders`
    );

    dispatch({
      type: GET_COUNTRY,
      payload: res.data.items,
    });
  };

  const searchCountry = async (text) => {
    setLoading();

    const res = await axios.get(
      `https://restcountries.com/v2/name/${text}?fields=flags,name,population,region,capital`
    );

    dispatch({
      type: SEARCH_COUNTRY,
      payload: res.data.items,
    });
  };

  const filterRegion = async (region) => {
    setLoading();

    const res = await axios.get(
      `https://restcountries.com/v2/regionalbloc/${region}?fields=flags,name,population,region,capital`
    );

    dispatch({
      type: FILTER_REGION,
      payload: res.data.items,
    });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <ApiContext.Provider
      value={{
        all: state.all,
        countries: state.countries,
        country: state.country,
        loading: state.loading,
        getAll,
        getCountry,
        searchCountry,
        filterRegion,
      }}
    >
      {props.children}
    </ApiContext.Provider>
  );
};

export default ApiState;
