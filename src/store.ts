import { configureStore } from "@reduxjs/toolkit";

import countriesReducer from "./features/countries/countriesSlice";
import filtersReducer from "./features/filters/filtersSlice";
import searchesReducer from "./features/searches/searchesSlice";

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    filters: filtersReducer,
    searches: searchesReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
