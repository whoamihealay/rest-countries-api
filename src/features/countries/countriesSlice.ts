import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import countriesService from "./countriesService";

export type Country = {
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
  languages: object;
  borders: string[];
  population: number;
  flags: {
    png: string;
    svg: string;
  };
};

interface IInitialState {
  isLoading: boolean;
  isError: boolean;
  isSucess: boolean;
  message: unknown;
  countries: Country[];
}

const initialState: IInitialState = {
  isLoading: false,
  isSucess: false,
  isError: false,
  message: "",
  countries: [],
};

// Middleware / Thunks
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
        state.countries = action.payload;
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
