import {
  GET_ALL,
  GET_COUNTRY,
  SEARCH_COUNTRY,
  FILTER_REGION,
  SET_LOADING,
} from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        all: action.payload,
        loading: false,
      };
    case GET_COUNTRY:
      return {
        ...state,
        country: action.payload,
        loading: false,
      };
    case SEARCH_COUNTRY:
      return {
        ...state,
        countries: action.payload,
        loading: false,
      };
    case FILTER_REGION:
      return {
        ...state,
        countries: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
