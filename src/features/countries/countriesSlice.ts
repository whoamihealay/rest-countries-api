import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import countriesService from "./countriesService";
import { RootState } from "../../store";
import { addIds } from "../../utils";

// Types and Interfaces

export type Country = {
  id: number;
  name: {
    common: string;
    official: string;
  };
  tld: string[];
  cca3: string;
  currencies: object;
  capital: string[];
  region: string;
  subregion: string;
  // TODO: Replace any by accurate type
  languages: any;
  borders: string[];
  population: number;
  flags: {
    png: string;
    svg: string;
  };
};

interface IState {
  isLoading: boolean;
  isError: boolean;
  isSucess: boolean;
  message: unknown;
  countries: Country[];
}

// INITIAL STATE
const initialState: IState = {
  isLoading: false,
  isSucess: false,
  isError: false,
  message: "",
  countries: [],
};

// THUNKS

// GET countries for API
export const getCountries = createAsyncThunk(
  "countries/get",
  async (_, thunkAPI) => {
    try {
      return await countriesService.getCountries();
    } catch (error: any) {
      const message =
        (error.response && error.response.data && error.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Select all countries in state returned from GET/Countries
const selectCountryEntities = (state: {
  countries: { countries: Country[] };
}) => state.countries.countries;

// Selector: All countries
export const selectCountries = createSelector(
  selectCountryEntities,
  (countries) => Object.values(countries)
);

// Select country by ID
export const selectCountryById = (state: RootState, countryId: number) => {
  return selectCountries(state)[countryId];
};

export const selectCountryByAlphaCode = (
  state: RootState,
  countryCode: string
) => {
  return selectCountries(state).find(
    (country) => country.cca3 === countryCode
  )!;
};

// Selector: Cycle through Countries to create a Set of Regions and return Set as Array.
// Set is used to eliminate duplicates
export const selectRegions = createSelector(
  selectCountryEntities,
  (countries) => {
    const regionsSet = new Set<string>();
    countries.forEach((country: Country) => regionsSet.add(country.region));
    return Array.from(regionsSet);
  }
);

// Selector: Return countries after filtered
export const selectFilteredCountries = createSelector(
  selectCountries,
  (state: RootState) => state.filters,
  (countries, filters) => {
    const { status } = filters;
    const showAll = status === "All";
    if (showAll) {
      return countries;
    }
    return countries.filter((country: Country) => country.region === status);
  }
);

export const selectFilteredCountriesByIds = createSelector(
  selectFilteredCountries,
  (filteredCountries) => filteredCountries.map((country: Country) => country.id)
);

// Reducers
export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSucess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSucess = true;
        state.countries = addIds(action.payload);
      })
      .addCase(getCountries.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = countriesSlice.actions;
export default countriesSlice.reducer;
