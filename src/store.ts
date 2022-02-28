import { configureStore } from "@reduxjs/toolkit";

import countriesReducer from "./features/countries/countriesSlice";
import filtersReducer from "./features/filters/filtersSlice";

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    filters: filtersReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
