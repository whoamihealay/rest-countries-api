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
} from "../types";

const ApiState = (props) => {
  const initialState = {
    countries: [],
    country: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(ApiReducer, initialState);

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

  const getCountry = async (countryName) => {
    setLoading();

    const res = await axios.get(
      `https://restcountries.com/v2/name/${countryName}?fields=flags,name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages,borders`
    );

    dispatch({
      type: GET_COUNTRY,
      payload: res.data,
    });
  };

  const searchCountry = async (text) => {
    setLoading();

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

  const filterRegion = async (region) => {
    setLoading();

    const res = await axios.get(
      `https://restcountries.com/v2/regionalbloc/${region}?fields=flags,name,population,region,capital`
    );

    dispatch({
      type: FILTER_REGION,
      payload: res.data,
    });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

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
      }}
    >
      {props.children}
    </ApiContext.Provider>
  );
};

export default ApiState;
